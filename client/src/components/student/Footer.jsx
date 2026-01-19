import React from 'react'
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <footer className='md:text-left  bg-gray-800 md:px-20 mt-12 w-full px-4  py-8'>
      <div className=' gap-8 grid grid-cols-1 md:grid-cols-3'>
        <div>
          <img src={assets.logo_dark} alt="logo" />
          <p className='text-gray-300 max-w-sm mt-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. </p>

        </div>
        <div className='text-white'> <h2>Company</h2>
          <ul className='list-none flex flex-col pt-6 text-gray-400'>
            <Link to={"#"}>Home</Link>
            <Link to={"#"}>About Us</Link>
            <Link to={"#"}>Contact us</Link>
            <Link to={"#"}>Privacy Policy</Link>
            </ul>

        </div>
        <div className='text-white font-bold'> 
          <h2>Subscribe to our newsletter</h2>
        <p className='pt-5 text-gray-400'>The latest news, articles, and resources, sent to your inbox weekly.</p> 
        <div className='flex gap-2 mt-5'>
         <input type="text" placeholder='Enter your Email' className='border border-gray-500/30 text-center'/> <button className='bg-blue-500 rounded-lg px-6 py-3 '>Subscribe</button>
        </div>

        </div>
      </div>

      <p className='text-white text-center border-t mt-16 pt-4'>All Right Reserved.Copyright {new Date().getFullYear()} @DestinationStack</p>
    </footer>
  )
}

export default Footer
