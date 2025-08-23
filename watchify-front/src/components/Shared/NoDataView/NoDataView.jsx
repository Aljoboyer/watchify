import React from 'react'
import NoDatLogo from '../../../assets/no-data.png'

export default function NoDataView() {
  return (
    <div className='w-full h-full flex flex-row justify-center items-center'>
        <img src={NoDatLogo} className='h-[300px] w-[300px] object-contain'/>
    </div>
  )
}
