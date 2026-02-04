import React from 'react'
import {assets, dummyEducatorData} from "../../assets/assets"
import {UserButton, useUser} from "@clerk/clerk-react"
import {Link} from "react-router-dom"

const Navbar = () => {
  const educatorData=dummyEducatorData
  const {user}=useUser()
  return (
    <div className='flex items-center justify-between px-4 py-3 border-b border-gray-500 '>
      <Link to="/"className=''>
      <img src={assets.logo} alt="logo"className='w-28 md:w-32'/>
      </Link>
      <div className='flex items-center gap-4 px-4 py-2 mx-8'>
        <p className='hidden md:block text-blue-500 font-bold'>Hi, {user? user.fullName:"Developer"}</p>
        {user? <UserButton/>:<img src={assets.profile_img} alt='profile img' className='max-w-8'/>}
      </div>
    </div>
  )
}

export default Navbar
