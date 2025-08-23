import { Box } from '@mui/material'
import React from 'react'
import { Buttons } from '../Shared/Buttons/Buttons'
import { COLORS } from '../../theme/colors'
import { Delete } from '@mui/icons-material'
import { FaMinus, FaPlus } from 'react-icons/fa'
import WText from '../Shared/WText/WText'
import { useNavigate } from 'react-router-dom'

export default function Cart({setCartDrawerOpen}) {
  const navigate = useNavigate();

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
      text={`Shopping Cart (3)`}
      />
      <button onClick={() => setCartDrawerOpen(false)} className="text-2xl font-bold">&times;</button>
    </div>

    {/* Cart Items */}
    <div className="flex flex-col gap-6 flex-grow overflow-y-auto py-4">
      {/* Single Item */}
     {
        [1,2,]?.map((item) => (
             <div className="flex gap-4">
                {/* Product Image */}
                <img
                src="https://your-watch-image-url.jpg"
                alt="product"
                className="w-24 h-28 object-cover border"
                />
                {/* Product Details */}
                <div className="flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="font-semibold">BERING AURORA COLLECTION</h3>
                    <p className="text-gray-600">$195.00</p>
                </div>
                {/* Quantity & Remove */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center border px-2 py-2">
                    <button className="px-2"><FaMinus/></button>
                    <span className="px-3">3</span>
                    <button className="px-2"><FaPlus/></button>
                    </div>
                    <button className="cursor-pointer">
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
        <span className="font-bold">$195.00</span>
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
