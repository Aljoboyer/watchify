import React, { useEffect, useState } from 'react'
import RootLayout from '../../../components/Layouts/RootLayout/RootLayout'
import Header from '../../../components/Home/Header'
import EchoesOfTime from '../../../components/Home/EcheosOfTime'
import ProductCard from '../../../components/ProductCard/ProductCard'
import SectionTitle from '../../../components/Shared/SectionTitle/SectionTitle'
import { Buttons } from '../../../components/Shared/Buttons/Buttons'
import { COLORS } from '../../../theme/colors'
import { ArrowForward } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { useLazyGetProductListQuery } from '../../../redux/features/productApi'
import NoDataView from '../../../components/Shared/NoDataView/NoDataView'
import SkeletonLoader from '../../../components/Shared/Loader/SkeletonLoader'

export default function Home() {
    const navigate = useNavigate();
    const [productListTrigger, { data: productList, error, isLoading , isFetching}] = useLazyGetProductListQuery();

    const [searchText, setSearchText] = useState('')

    const productFetch = () => {
    
        productListTrigger({ querys: `limit=${8}&page=${1}` });
    }

    useEffect(() => {
        productFetch()
    },[])

  return (
    <RootLayout>
        <Header/>
        
        <div className='w-full px-4 md:px-6 py-11'>
          <SectionTitle
          title="POPULAR WATCHES"
          />
            {
                    isFetching ?  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-11 mb-7">
                    {
                    [1,2,3,4,5,6]?.map((item) => (
                        <SkeletonLoader key={item}/>
                    ))
                    }
                </div> :  <>
                    {
                        productList?.data?.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-11 mb-7">
                    {
                    productList?.data?.map((item) => (
                        <ProductCard key={item?.id} product={item}/>
                    ))
                    }
                </div> : <div className='w-full h-screen'><NoDataView/></div>
                    }
                </>
                }

            <div className='flex flex-row justify-center mt-13'>
              <Buttons
                title='VIEW MORE'
                textColor={COLORS.white}
                bgColor={COLORS.maroon}
                other_style={{width: '150px', height: '60px'}}
                icon={<ArrowForward className='ml-2'/>}
                onClickHandler={() => navigate('/watch-shop')}
                />
            </div>
        </div>
        <EchoesOfTime/>
    </RootLayout>
  )
}
