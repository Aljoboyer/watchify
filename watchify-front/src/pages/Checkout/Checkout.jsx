import React, { useEffect, useState } from 'react'
import RootLayout from '../../components/Layouts/RootLayout/RootLayout'
import WText from '../../components/Shared/WText/WText'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Delete } from '@mui/icons-material'
import { getLocalStorageData } from '../../utils/getLocalStorageData'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Shared/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import NoDataView from '../../components/Shared/NoDataView/NoDataView'
import { useMemo } from 'react'
import { setProductToCart } from '../../redux/slices/commonSlice'
import CartProdCard from '../../components/Cart/CartProdCard'
import { successToast } from '../../utils/toaster/toaster'


export default function Checkout() {
    const [loading, setLoading] = useState(true)
    const userData = getLocalStorageData();
    const navigate = useNavigate();
    const productCart = useSelector((state) => state.commonstore.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!userData?.email){
            navigate('/login')
        }else{
            setLoading(false)
        }
    },[userData?.email]);

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
   <RootLayout>
        {
            loading ? <div className='flex flex-row justify-center items-center h-screen w-full'><Loader/> </div>: <div className='w-full'>
            <div className='bg-black py-7'>
                <WText
                    type="title_xxl"
                    text="CHECKOUT"
                    otherStyle="text-white text-center"
                />
            </div>
            
            <div className='my-7 p-4'>
                <div className='max-w-3xl mx-auto p-4 product_card'>
                      {
                        productCart?.length == 0 ? <div>
                            <NoDataView/>
                        </div> :     
                        <div className="flex flex-col gap-6 flex-grow overflow-y-auto py-4 h-[600px]">
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
                    
                    <div className='border-t'>
                         <div className="w-[300px] pt-2">
                            {/* Subtotal */}
                            <div className="flex justify-between items-center mb-4">
                              <span className="font-semibold">Total Quantity:</span>
                              <span className="font-bold">{totalQty}</span>
                            </div>
                            {/* Subtotal */}
                            <div className="flex justify-between items-center mb-4 border-t pt-2">
                              <span className="font-semibold">Subtotal:</span>
                              <span className="font-bold">$ {totalPrice}</span>
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
            </div>
        }
   </RootLayout>
  )
}
