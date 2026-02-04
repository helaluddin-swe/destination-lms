import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
   <footer className='flex mb-4 md:flex-row justify-between items-center text-left gap-4 px-8 py-3  border-t' >
    <div className='flex justify-between items-center gap-4 h-auto '>
      <img src={assets.logo} alt="logo" className='w-28 md:w-36' /> 
      </div>
    <div className='hidden md:block items-center'><p>
      {new Date().getFullYear()} @DestinationStack .All Right Reserved.
      </p></div>
    
    <div className='flex gap-4 px-8'> 
      <a href="#">  <img src={assets.facebook_icon} alt="face book logo"/>   </a>
      <a href="#">  <img src={assets.instagram_icon} alt="face book logo"/>   </a>
      <a href="#">  <img src={assets.twitter_icon} alt="face book logo"/>   </a>
     
      
      
        </div>
   </footer>
  )
}

export default Footer
