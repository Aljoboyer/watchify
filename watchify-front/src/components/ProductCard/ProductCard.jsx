import React from 'react'
import W1Img from '../../assets/w-1.jpg';
import WText from '../Shared/WText/WText';
import { Buttons } from '../Shared/Buttons/Buttons';
import { COLORS } from '../../theme/colors';
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getLocalStorageData } from '../../utils/getLocalStorageData';

export default function ProductCard() {
  const navigate = useNavigate();
  const userData = getLocalStorageData();
  
  const addToCartHandler = (item) => {
    if(userData?.email){
      
    }else{
      navigate('/login')
    }
  }

  return (
    <div className='w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto cursor-pointer product_card p-2 flex flex-col items-center'>
        <img
          src={W1Img} 
          alt="Apartment"
          className="w-full h-64 object-contain"
        />
        <div className='mt-4'>
            <WText
            text="Cairnhill"
            type='title'
            otherStyle='uppercase text-center'
            />
            <WText
            text="MT463SK ST WH MT"
            type='p_lg'
            otherStyle='text-center'
            />
            <WText
            text="$898"
            type='title_sm'
            otherStyle='text-maroon font-bold text-center'
            />
            <Buttons
            title='Add To Cart'
            bgColor={COLORS.baseColor}
            textColor='white'
            other_style={{':hover': {backgroundColor: COLORS.white, color: COLORS.baseColor, borderColor: COLORS.baseColor}, width: '200px', heigth: '55px', margin: '10px 0px 10px 0px'}}
            icon={<FaCartArrowDown  size={25} className='ml-4'/>}
            onClickHandler={() => addToCartHandler()}
            />
        </div>
    </div>
  )
}
