import React from 'react'
import {assets} from "../../assets/assets"

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-5'>
      <h1 className='text-4xl max-w-2xl '>Empower your future with the courses designed to
      <span className='  text-cyan-500'> fit your choice.</span></h1><img src={assets.sketch} alt="sketch" />
      <p className='hidden md:block items-center max-w-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.hello rthis fdsljfsdf f sf!</p>
    </div>
  )
}

export default Hero
