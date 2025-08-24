const mongoose = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const paymentIntentServ = async (reqData) => {

    try {
      const paymentAmount = reqData

      const convertedAmount = Math.round(paymentAmount * 100);

      const paymentIntent = await stripe.paymentIntents.create({
          currency: 'usd',
          amount: convertedAmount,
          payment_method_types: ['card']
          });

      return {clientSecret: paymentIntent.client_secret }

    } catch (error) {
      return { message: "Rent request Failed" , error};
    }
};

module.exports = {
  paymentIntentServ
};
  