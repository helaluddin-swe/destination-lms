import React from 'react'
import { assets, dummyTestimonial } from '../../assets/assets'

const TestimonialSection = () => {
  return (
    <div className='pb-12 px-12 md:pb-0'>
      <h1 className='text-3xl text-gray-500 font-bold '>Testimonial</h1>
      <p className='text-gray-400 mt-4'> Hear from our learners as they share their journeys of transformation, success, <br/>and how our
platform has made a difference in their lives.</p>


<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10'>
  {dummyTestimonial.map((testimonial,index)=>(
    <div key={index} className='pb-5 rounded-lg border-gray-800/30 text-left border text-sm bg-white shadow-[0px_4px_15px_0px] shadow-black/5'>
      <div className='flex bg-gray-500/10 px-5 py-4 items-center gap-4'> 
      <img src={testimonial.image} alt={testimonial.name} className='h-12 w-12 rounded-full' />
      <div>
        <h1 className='text-gray-800'>{testimonial.name}</h1>
      <p className='text-gray-800/80'>{testimonial.role}</p>
      </div>
      </div>
      <div className='p-4 pb-4'>
        <div className='flex gap-0.5'>{[...Array(5)].map((_,i)=>(<img className='h-4' src={i<Math.floor(testimonial.rating)? assets.star:assets.star_blank} alt='star' key={i}/>))} </div>
        <p className='mt-5 text-gray-500'>{testimonial.feedback}</p>
      </div>
      <a href="#" className='text-blue-500 underline px-4'>Read More</a>

    </div>
  ))}
</div>
    </div>
  )
}

export default TestimonialSection
