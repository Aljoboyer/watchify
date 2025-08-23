import React from 'react'
import RootLayout from '../../../components/Layouts/RootLayout/RootLayout'
import Header from '../../../components/Home/Header'
import EchoesOfTime from '../../../components/Home/EcheosOfTime'

export default function Home() {
  return (
    <RootLayout>
        <Header/>
        <EchoesOfTime/>
    </RootLayout>
  )
}
