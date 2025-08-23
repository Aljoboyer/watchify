import React from 'react'
import WText from '../../../components/Shared/WText/WText'
import RootLayout from '../../../components/Layouts/RootLayout/RootLayout'
import ProductCard from '../../../components/ProductCard/ProductCard'
import AllInputs from '../../../components/Shared/Inputs/AllInputs'
import { Buttons } from '../../../components/Shared/Buttons/Buttons'
import { COLORS } from '../../../theme/colors'

export default function WatchShop() {
  return (
   <RootLayout>
        <div className='w-full'>
            <div className='bg-black py-7'>
                <WText
                    type="title_xl"
                    text="POPULAR WATCHES"
                    otherStyle="text-white text-center"
                />
            </div>

            <div className='px-6 mt-7'>
                <div className='flex flex-row justify-center items-center flex-wrap'>
                    <div className='w-full md:w-1/3 flex flex-row items-center flex-wrap md:flex-nowrap'>
                        <AllInputs
                            inputType='search'
                            placeholder="Search Watch name"
                            label='Search'
                        />
                        <Buttons
                        bgColor={COLORS.baseColor}
                        textColor={COLORS.white}
                        title='Search'
                        other_style={{width: '100px', height: '45px', marginLeft: {xs: '0px', md:'10px'},  marginTop: {xs: '10px', md:'0px'}}}
                        />
                    </div>
                    <div className='w-full md:w-[300px] ms-0 lg:ms-4 mt-4 md:mt-0'>
                         <AllInputs
                        inputType='select'
                        options={[
                            {value: 'all', label: 'All'}, 
                            {value: 'men', label: 'Men'}, 
                            {value: 'women', label: 'Women'}
                        ]}
                        otherStyle={{width: '100%', }}
                        label='Find By Gender'
                    />
                    </div>
                    
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-11 mb-7">
                    {
                    [1,2,3,4,5,6,7,8,11,22,33]?.map((item) => (
                        <ProductCard key={item}/>
                    ))
                    }
                </div>
            </div>
        </div>
   </RootLayout>
  )
}
