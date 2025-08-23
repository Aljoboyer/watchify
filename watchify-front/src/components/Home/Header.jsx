import React from 'react'
import WText from '../Shared/WText/WText'
import { Buttons } from '../Shared/Buttons/Buttons'
import { ArrowForward } from '@mui/icons-material'

export default function Header() {
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
                type='title'
                otherStyle='text-white font-regular '
                />
                <Buttons
                title='Shop Now'
                bgColor='white'
                textColor='black'
                icon={<ArrowForward color='white' fontSize='30'/>}
                other_style={{width: '200px', marginTop: '20px', height: '50px'}}
                />
            </div>
        </div>
    </div>
  )
}
