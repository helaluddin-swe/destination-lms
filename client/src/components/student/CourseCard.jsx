import React from 'react'
import { useAppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const CourseCard = ({course}) => {
  const {currency}=useAppContext()
  return (
    <div>
      <img src={course.courseThumbnail} alt="course thumnail" />
      <div>
        <p>{course.courseTitle}</p>
        <p>{course.discount}</p>
      </div>
      <div>{[...Array(5)].map((_,i)=>(<img src={assets.star} alt='star' key={i}/>))}</div>
      <p>{currency}{course.courseprice}</p>

    </div>
  )
}

export default CourseCard
