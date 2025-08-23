import React, { useEffect, useState } from 'react'
import WText from '../../../components/Shared/WText/WText'
import RootLayout from '../../../components/Layouts/RootLayout/RootLayout'
import ProductCard from '../../../components/ProductCard/ProductCard'
import AllInputs from '../../../components/Shared/Inputs/AllInputs'
import { Buttons } from '../../../components/Shared/Buttons/Buttons'
import { COLORS } from '../../../theme/colors'
import { useLazyGetProductListQuery } from '../../../redux/features/productApi'
import ProductPagination from '../../../components/Shared/Pagination/Pagination'
import SkeletonLoader from '../../../components/Shared/Loader/SkeletonLoader'
import NoDataView from '../../../components/Shared/NoDataView/NoDataView'

export default function WatchShop() {
    const [productListTrigger, { data: productList, error, isLoading , isFetching}] = useLazyGetProductListQuery();

    const [gender, setGender] = useState('')
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [searchText, setSearchText] = useState('')

    const productFetch = () => {
    
        productListTrigger({ querys: `limit=${perPage}&page=${page}&gender=${gender == 'all' ? '' : gender}&searchText=${searchText}` });
    }

    useEffect(() => {
        productFetch()
    },[gender, page, perPage, searchText])

     const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePerPageChange = (event) => {
        setPerPage(Number(event.target.value));
        setPage(1); 
    };
    
    const onSearchHandler = (searchVal) => {
        setSearchText(searchVal)
        setTimeout(productFetch(), 1000)
    }
 
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
                    <div className='w-full md:w-1/3 '>
                        <AllInputs
                            inputType='search'
                            placeholder="Search Watch name"
                            label='Search'
                            onChangeHandler={(val) => onSearchHandler(val)}
                        />
                    </div>
                    <div className='w-full md:w-[300px] ms-0 lg:ms-4 mt-4 md:mt-0'>
                         <AllInputs
                        inputType='select'
                        options={[
                            {value: 'all', label: 'All'}, 
                            {value: 'Male', label: 'Men'}, 
                            {value: 'Female', label: 'Women'}
                        ]}
                        otherStyle={{width: '100%', }}
                        label='Find By Gender'
                        onChangeHandler={(val) => {
                            setSearchText('')
                            setGender(val)
                        }}
                        value={gender}
                    />
                    </div>
                    
                </div>
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

                {
                    productList?.data?.length > 0 && <div className="flex flex-row justify-center py-7">
                    <ProductPagination 
                    perPage={perPage}
                    handlePerPageChange={handlePerPageChange}
                    handlePageChange={handlePageChange}
                    totalPage={productList?.totalPage} />
                </div>
                }

            </div>
        </div>
   </RootLayout>
  )
}
