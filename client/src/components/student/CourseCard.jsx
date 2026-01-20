import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'
import {Link } from "react-router-dom"

const CourseCard = ({course}) => {
  const {currency,calculateRating}=useAppContext()
  return (
    <Link to={"/course/"+course._id} onClick={()=>scrollTo(0,0)} className='border-2 border-gray-500/30 overflow-hidden rounded-lg pb-6 '>
      <img src={course.courseThumbnail} alt="course thumnail"  className='w-full'/>
      <div className='text-left p-3'>
        <h3 className='font-semibold text-base'>{course.courseTitle}</h3>
        <p className='text-gray-500'>DestinationStack</p>
      
      <div className='flex space-x-2 items-center'> <h3>{calculateRating(course)}</h3> 
      <div className='flex space-x-2'>{[...Array(5)].map((_,i)=>(<img className='h-3.5 w-3.5' src={i<Math.floor(calculateRating(course))? assets.star:assets.star_blank} alt='star' key={i}/>))}</div>
      <p className='text-gray-500'>{course.courseRatings.length}</p></div>
      <p className='text-gray-800 font-semibold'>{currency}{(course.coursePrice-(course.discount*course.coursePrice)/100).toFixed(2)}</p>
      </div>

    </Link>
  )
}

export default CourseCard
