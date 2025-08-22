import React from 'react'
import Navbar from '../../Shared/NavBars/NavBars'

export default function RootLayout({children}) {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
    </div>
  )
}
