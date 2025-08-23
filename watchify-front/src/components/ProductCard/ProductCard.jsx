import React from 'react'
import W1Img from '../../assets/w-1.jpg';
import WText from '../Shared/WText/WText';
import { Buttons } from '../Shared/Buttons/Buttons';
import { COLORS } from '../../theme/colors';
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getLocalStorageData } from '../../utils/getLocalStorageData';
import { useDispatch, useSelector } from 'react-redux';
import { setProductToCart } from '../../redux/slices/commonSlice';
import { successToast } from '../../utils/toaster/toaster';

export default function ProductCard({product}) {
  const navigate = useNavigate();
  const userData = getLocalStorageData();
  const dispatch = useDispatch();
  const productCart = useSelector((state) => state.commonstore.cart);

  const addToCartHandler = (item) => {
    if(userData?.email){

      const isProductExists = productCart?.find((prod) => prod?.id == item?._id);
      if(isProductExists?.id){
        const increaseProdQty =  productCart?.map((prod) => {
            if(prod?.id == item?._id){
              const newObj = {...prod, qty: prod?.qty + 1}
              return newObj
            }else{
              return prod;
            }
        });
          dispatch(setProductToCart(increaseProdQty));

      }else{
        const newCartArr = [...productCart, {id: item?._id, name: item?.name, image: item?.image, qty: 1, price: item?.price}]
        dispatch(setProductToCart(newCartArr));
      }
      successToast('Product successfully added to cart')
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto cursor-pointer product_card p-2 flex flex-col items-center'>
        <img
          src={product?.image} 
          alt="Apartment"
          className="w-full h-64 object-contain"
        />
        <div className='mt-4 flex flex-col justify-center'>
            <div className='h-[140px]'>
                <WText
                text={product?.name}
                type='p_lg'
                otherStyle='uppercase text-center  font-semibold'
                />
                <WText
                text={product?.modelName}
                type='p'
                otherStyle='text-center'
                />
                <WText
                text={`$ ${product?.price}`}
                type='title_sm'
                otherStyle='text-maroon font-bold text-center'
                />
            </div>
            <Buttons
            title='Add To Cart'
            bgColor={COLORS.baseColor}
            textColor='white'
            other_style={{':hover': {backgroundColor: COLORS.white, color: COLORS.baseColor, borderColor: COLORS.baseColor}, width: '200px', heigth: '55px', margin: '10px 0px 10px 0px', alignSelf: 'center'}}
            icon={<FaCartArrowDown  size={25} className='ml-4'/>}
            onClickHandler={() => addToCartHandler(product)}
            />
        </div>
    </div>
  )
}
