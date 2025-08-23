import { Box } from '@mui/material'
import React from 'react'
import { Buttons } from '../Shared/Buttons/Buttons'
import { COLORS } from '../../theme/colors'
import { Delete } from '@mui/icons-material'
import { FaMinus, FaPlus } from 'react-icons/fa'
import WText from '../Shared/WText/WText'
import { useNavigate } from 'react-router-dom'
import { useMemo } from 'react'
import { setProductToCart } from '../../redux/slices/commonSlice'
import { useDispatch, useSelector } from 'react-redux';

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
              const newObj = {...prod, qty: (action == 'minus' && prod?.qty) > 1  ?  prod?.qty - 1 : prod?.qty + 1 }
              return newObj
            }else{
              return prod;
            }
        });
          dispatch(setProductToCart(calProdQty));
      }
    }

    const removeToCartHandler = (item) => {

      const isProductExists = productCart?.find((prod) => prod?.id == item?.id);

      if(isProductExists?.id){
        const filterCart = productCart?.filter((prod) => prod?.id !== item?.id )  
        
        dispatch(setProductToCart(filterCart));
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
    <div className="flex flex-col gap-6 flex-grow overflow-y-auto py-4">
      {/* Single Item */}
     {
        productCart?.map((item) => (
             <div className="flex gap-4">
                {/* Product Image */}
                <img
                src={item?.image}
                alt="product"
                className="w-24 h-28 object-cover border"
                />
                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="font-semibold">{item?.name}</h3>
                    <p className="text-gray-600 mt-2">$ {item?.price}</p>
                     <p className="text-gray-700 my-2">Quantity : {item?.qty}</p>
                </div>
                {/* Quantity & Remove */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center border px-2 py-2">
                    <button onClick={() => addToCartHandler(item, 'minus')} className="px-2"><FaMinus/></button>
                    <span className="px-3">1</span>
                    <button onClick={() => addToCartHandler(item, 'plus')} className="px-2"><FaPlus/></button>
                    </div>
                    <button onClick={() => removeToCartHandler(item)} className="cursor-pointer">
                      <Delete className="text-red-500"/>
                    </button>
                </div>
                </div>
            </div>
        ))
     }
    </div>

    {/* Footer */}
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
  </Box>
  )
}
