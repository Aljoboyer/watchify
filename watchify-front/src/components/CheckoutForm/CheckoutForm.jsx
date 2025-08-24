import React, { useEffect, useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { errorToast, successToast } from '../../utils/toaster/toaster';
import FFLoader2 from '../../components/Shared/Loader/Loader';
import { usePaymentIntentCreateMutation } from '../../redux/features/orderApi';
import { Buttons } from '../Shared/Buttons/Buttons';
import { COLORS } from '../../theme/colors';

export default function CheckoutForm({orderCart, totalPrice}) {
  const stripe = useStripe();
  const elements = useElements();
  const [createPaymentIntent, { isLoading: intentLoading }] = usePaymentIntentCreateMutation();
  const[clientSecret , setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)

  const createIntent = async () => {
    const intentRes = await createPaymentIntent({totalamount: totalPrice})

    setClientSecret(intentRes?.data?.clientSecret)
  }

  useEffect(() => {
    // createIntent()
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();

      if(!stripe || !elements){
          return;
      }
      const card = elements.getElement(CardElement);

      if (card === null){
          return ;
      }
      setProcessing(true)

      const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
      });

      if(error){
          setProcessing(false)
          errorToast(error.message)
          return;
      }
      else{
          setProcessing(false)
      }

        //payment intent
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
          clientSecret,
          { 
            payment_method: {
              card: card,
              billing_details: {
                name: property?.buyer?.name,
                email: property?.buyer?.email
              },
            },
          },
        );
        if(intentError)
        {
          setProcessing(false)
          errorToast(intentError.message)
          return;
        }
        else{
            const secretArray =  paymentIntent.client_secret.split('_')
            const reqObj = {
              _id: property?._id,
              property: property?.property?._id,
              buyer: property?.buyer?._id,
              seller: property?.seller?._id,
              amount: property?.property?.advanceMoney,
              paymentIntentId: secretArray[secretArray.length - 1],
              paidAt: new Date().toLocaleDateString()
            }

        //   const paymentRes = await completePayment(reqObj)

          if(paymentRes?.data?.msg == 'payment success'){


            successToast('Payment Succesfull!')
            setProcessing(false)
            handleClose()
          }
        }
    
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {
        intentLoading ? <div className='w-[100px] h-[50px] mx-auto'><FFLoader2/> </div> : <div className="border border-gray-300 rounded-md p-4 bg-white">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#000',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                '::placeholder': {
                  color: '#999',
                },
              },
              invalid: {
                color: '#e5424d',
              },
            },
          }}
        />
        </div>
      }

        <div className='my-4'>
          <Buttons
              bgColor={COLORS.baseColor}
              textColor={COLORS.white}
              title={'Pay Now'}
              other_style={{ fontWeigth: 'bold'}}
              isLoading={processing}
            />
            <p className='text-psm text-gray-500 my-2 text-center'> Secure payment powered by Stripe</p>
        </div>
    </form>
  )
}
