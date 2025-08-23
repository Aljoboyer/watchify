import React from 'react'
import RootLayout from '../../components/Layouts/RootLayout/RootLayout'
import WText from '../../components/Shared/WText/WText'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Delete } from '@mui/icons-material'


export default function Checkout() {

  return (
   <RootLayout>
        <div className='w-full'>
            <div className='bg-black py-7'>
                <WText
                    type="title_xxl"
                    text="CHECKOUT"
                    otherStyle="text-white text-center"
                />
            </div>
            
            <div className='my-7 p-4'>
                <div className='max-w-5xl mx-auto p-4 product_card'>
                      <div className="flex gap-4">
                            {/* Product Image */}
                            <img
                            src="https://your-watch-image-url.jpg"
                            alt="product"
                            className="w-24 h-28 object-cover border"
                            />
                            {/* Product Details */}
                            <div className="flex flex-col justify-between flex-grow">
                            <div className='w-full'>
                                <h3 className="font-semibold">BERING AURORA COLLECTION</h3>
                                <p className="text-gray-600 my-2">$195.00</p>
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
                </div>
            </div>

        </div>
   </RootLayout>
  )
}
