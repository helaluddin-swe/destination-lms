import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'

const CourseDetails = () => {
  const {id}=useParams()
  const [courseData,setCourseData]=useState(null)
  const {allCourse}=useAppContext()
  const fetchedCourse=async()=>{
    const findCourse=await allCourse.find(item=>item._id===id)
    setCourseData(findCourse)
  }
  useEffect(()=>{
    fetchedCourse()

  },[])
  return courseData?  (
    <div className="relative flex items-start flex-col-reverse md:flex-row gap-10 pt-12 md:pt-20 px-16 md:px-24 justify-between">

  <div className="absolute inset-0 w-full h-125 bg-linear-to-b from-cyan-100/70 to-transparent pointer-events-none" />

       

    
      {/* left side */}
      <div> <h2>{courseData.courseTitle}</h2><p>{courseData.courseDescription}</p></div>
      {/* rigfht side */}
      <div> </div>
    </div>
  )
  :
  <Loading/>
}

export default CourseDetails
