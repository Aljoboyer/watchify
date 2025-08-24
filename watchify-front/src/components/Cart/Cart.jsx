import { Box } from '@mui/material'
import React from 'react'
import { Buttons } from '../Shared/Buttons/Buttons'
import { COLORS } from '../../theme/colors'

import WText from '../Shared/WText/WText'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { setProductToCart } from '../../redux/slices/commonSlice'
import { useDispatch, useSelector } from 'react-redux';
import CartProdCard from './CartProdCard'
import { successToast } from '../../utils/toaster/toaster'

export default function Cart({setCartDrawerOpen}) {
  const navigate = useNavigate();
  const productCart = useSelector((state) => state.commonstore.cart);
  const dispatch = useDispatch();
  
    const {totalQty, totalPrice } = useMemo(() => {
    if (!Array.isArray(productCart) || productCart.length === 0) {
      return {totalQty: 0,   totalPrice: 0 };
    }

    return productCart.reduce(
      (totals, item) => {
        const qty = Number(item?.qty) || 0;
        const price = Number(item?.price) || 0;

        return {
          totalQty: totals.totalQty + qty,
          totalPrice: totals.totalPrice + qty * price,
        };
      },
      {totalQty: 0,  totalPrice: 0 }
    );
  }, [productCart]);

    const addToCartHandler = (item, action) => {

      const isProductExists = productCart?.find((prod) => prod?.id == item?.id);

      if(isProductExists?.id){
        const calProdQty =  productCart?.map((prod) => {
            if(prod?.id == item?.id){
              const newObj = {...prod, qty: (action == 'minus' && prod?.qty  > 1)  ?  prod?.qty - 1 : (action == 'minus' && prod?.qty == 1) ? 1 :   prod?.qty + 1 }
              return newObj
            }else{
              return prod;
            }
        });
          dispatch(setProductToCart(calProdQty));
          const msg = action == 'plus' ? 'Product successfully added to cart' : "Product successfully removed from cart"
          successToast(msg)
      }
    }

    const removeToCartHandler = (item) => {

      const isProductExists = productCart?.find((prod) => prod?.id == item?.id);

      if(isProductExists?.id){
        const filterCart = productCart?.filter((prod) => prod?.id !== item?.id )  
        
        dispatch(setProductToCart(filterCart));
        successToast('Product successfully removed from cart')
      }
    }
    
  return (
 <Box
    sx={{
      width: { xs: '100%', sm: '100%', md: '400px', lg: '500px' },
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'space-between',
    }}
    role="presentation"
  >
    {/* Cart Header */}
    <div className="flex justify-between items-center border-b pb-2">
      <WText
      type="title_sm"
      text={`Shopping Cart (${totalQty})`}
      />
      <button onClick={() => setCartDrawerOpen(false)} className="text-2xl font-bold">&times;</button>
    </div>

    {/* Cart Items */}
    {
      productCart?.length == 0 ? <div>
        <WText
        type="title"
        text="Your cart is empty. Start adding products you love!"
        otherStyle='text-gray-500'
        />
      </div> : <div className="flex flex-col gap-6 flex-grow overflow-y-auto py-4">
      {/* Single Item */}
        {
          productCart?.map((item) => (
              <CartProdCard 
              item={item} 
              addToCartHandler={addToCartHandler}
              removeToCartHandler={removeToCartHandler}
              />
          ))
        }
    </div>
    }

    {/* Footer */}
    {
      productCart?.length > 0 && 
    <div className="border-t pt-4">
      {/* Subtotal */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold">Subtotal:</span>
        <span className="font-bold">$ {totalPrice}</span>
      </div>
      {/* Buttons */}
      <div className="flex gap-3">
         <Buttons
            title='Check Out'
            bgColor={COLORS.baseColor}
            textColor={COLORS.white}
            other_style={{width: '100%', height: '55px'}}
            onClickHandler={() => navigate('/checkout')}
         />
      </div>
    </div>
    }
  </Box>
  )
}
