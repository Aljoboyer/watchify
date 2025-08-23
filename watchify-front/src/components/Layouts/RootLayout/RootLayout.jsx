import React from 'react'
import Navbar from '../../Shared/NavBars/NavBars'
import Footer from '../../Shared/Footers/Footer'

export default function RootLayout({children}) {
  return (
    <div className='w-full'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
