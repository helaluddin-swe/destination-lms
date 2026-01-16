import React from 'react'
import {assets} from "../../assets/assets"

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <h1 className='text-4xl max-w-2xl '>Empower your future with the courses designed to
      <span className='  text-cyan-500'> fit your choice.</span></h1><img src={assets.sketch} alt="sketch" />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, consectetur cupiditate, nam deleniti fugiat ab repellendus, sequi quaerat maiores corporis ducimus? Iste quas odit, aspernatur quae quisquam culpa quia delectus!</p>
    </div>
  )
}

export default Hero
