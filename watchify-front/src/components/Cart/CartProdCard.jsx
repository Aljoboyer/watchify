import React from 'react'
import { Delete } from '@mui/icons-material'
import { FaMinus, FaPlus } from 'react-icons/fa'

export default function CartProdCard({item, addToCartHandler, removeToCartHandler}) {
  return (
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
            <span className="px-3 cursor-pointer">1</span>
            <button onClick={() => addToCartHandler(item, 'plus')} className="px-2 cursor-pointer"><FaPlus/></button>
            </div>
            <button onClick={() => removeToCartHandler(item)} className="cursor-pointer">
            <Delete className="text-red-500"/>
            </button>
        </div>
        </div>
    </div>
  )
}
