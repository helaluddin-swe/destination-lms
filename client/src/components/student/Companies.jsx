import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='py-8  w-full '>
      <p className=' text-base text-gray-500 mb-4'>Trusted by Companies</p>
      <div className='flex flex-wrap  gap-12 justify-center items-center    '>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-12 md:w-30' />
        <img src={assets.adobe_logo} alt="Microsoft" className='w-10 md:w-30' />
        <img src={assets.walmart_logo} alt="Microsoft" className='w-10 md:w-30' />
        <img src={assets.accenture_logo} alt="Microsoft" className='w-10 md:w-30' />
        <img src={assets.paypal_logo} alt="Microsoft" className='w-10 md:w-30' />
      </div>
    </div>
  )
}

export default Companies
