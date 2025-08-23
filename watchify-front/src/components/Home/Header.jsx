import React, { useState } from 'react'
import WText from '../Shared/WText/WText'
import { Buttons } from '../Shared/Buttons/Buttons'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <div className='hero w-full h-screen p-4 bg-black'>
        <div className='hero w-full h-screen flex flex-col justify-center'>
            <div className='pl-0 lg:pl-13'>
                <WText
                text="LUXURY & LEGACY"
                type='title_xxl'
                otherStyle='text-white'
                />
               
                <WText
                text="The Perfect Combination Of Classic Beauty And Trendy Style"
                type='title_sm'
                otherStyle='text-white font-normal'
                />
                <Buttons
                title='Shop Now'
                bgColor='white'
                textColor='black'
                icon={<ArrowForward color='white' fontSize='30'/>}
                other_style={{width: '200px', marginTop: '20px', height: '50px'}}
                onClickHandler={() => navigate('/watch-shop')}
                />
            </div>
        </div>
    </div>
  )
}
