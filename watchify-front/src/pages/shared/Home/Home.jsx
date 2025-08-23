import React from 'react'
import RootLayout from '../../../components/Layouts/RootLayout/RootLayout'
import Header from '../../../components/Home/Header'
import EchoesOfTime from '../../../components/Home/EcheosOfTime'
import ProductCard from '../../../components/ProductCard/ProductCard'
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle'

export default function Home() {
  return (
    <RootLayout>
        <Header/>
        
        <div className='w-full px-4 md:px-6 py-11'>
          <SectionTitle
          title="POPULAR WATCHES"
          />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-11">
              {
                [1,2,3,4,5,6,7,8,11,22,33]?.map((item) => (
                  <ProductCard key={item}/>
                ))
              }
            </div>
        </div>
        <EchoesOfTime/>
    </RootLayout>
  )
}
