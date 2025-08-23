import React from 'react'

export default function SectionTitle({title}) {
  return (
    <div className='my-4'>
        <p className='text-title md:text-title_xl font-medium text-blackshade'>{title}</p>
        <div className='w-32 h-[5px] bg-basecolor '></div>
    </div>
  )
}
