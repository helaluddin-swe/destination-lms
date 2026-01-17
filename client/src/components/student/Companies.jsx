import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-12  '>
      <p className=' text-base text-gray-500 mb-10'>Trusted by Companies</p>
      <div className='flex flex-wrap  gap-8 justify-around items-center  p-6  '>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-12 md:w-16' />
        <img src={assets.adobe_logo} alt="Microsoft" className='w-10 md:w-16' />
        <img src={assets.walmart_logo} alt="Microsoft" className='w-10 md:w-16' />
        <img src={assets.accenture_logo} alt="Microsoft" className='w-10 md:w-16' />
        <img src={assets.paypal_logo} alt="Microsoft" className='w-10 md:w-16' />
      </div>
    </div>
  )
}

export default Companies
