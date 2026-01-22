import React, { useState } from 'react'
import {Line} from "rc-progress"
import { useAppContext } from '../../context/AppContext'
import Footer from '../../components/student/Footer'

const MyEnrollments = () => {
  const {enrollCourses,totalCourseDuration,navigate}=useAppContext()
  const [progressArray,setProgressArray]=useState([
    {lectureCompleted:2,totalLecture:4},
    {lectureCompleted:1,totalLecture:5},
    {lectureCompleted:3,totalLecture:6},
    {lectureCompleted:4,totalLecture:7},
    {lectureCompleted:0,totalLecture:8},
    {lectureCompleted:4,totalLecture:4},
    {lectureCompleted:0,totalLecture:4},
    {lectureCompleted:1,totalLecture:5},
    {lectureCompleted:6,totalLecture:6},
    {lectureCompleted:0,totalLecture:4},
  ])
  return (
    <> 
    <div className='px-4'>
      <h1 className='font-semibold text-2xl  pt-10  px-4 py-1 underline'>My enrollment pages</h1>
      <table className='w-full gap-4 justify-between items-center'>
        <thead className='pt-10 '>
          
          
         <tr className='gap-4 px-3 py-3 border-b border-gray-600/30'>
          <th className='px-4 py-3 font-semibold truncate'>Courses</th>
          <th className='px-4 py-3 font-semibold truncate max-sm:hidden'>Duration</th>
          <th className='px-4 py-3 font-semibold truncate max-sm:hidden' >Course Completion</th>
          <th className='px-4 py-3 font-semibold truncate'>Course Status</th>
        
         </tr> </thead>
         <tbody>
          {enrollCourses.map((course,index)=>(
            <tr key={index} className='border border-gray-500/20 '>
              <td className='flex items-center px-4 py-3 mr-2 space-x-3'>
                <img src={course.courseThumbnail} className='h-20 w-40' alt="courses" />
                <div className='flex-1 '>
                  <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                  <Line strokeWidth={4} className='bg-gray-300 rounded-full' percent={progressArray[index]? (progressArray[index].lectureCompleted*100)/progressArray[index].totalLecture:0} />
                </div>

              </td>
              <td className='px-3 py-3 items-center text-center max-sm:hidden '>
                {totalCourseDuration(course)}

              </td>
              <td className='px-3 py-3 max-sm:hidden items-center text-center '> 2/4 <span>Lecture</span></td>
              <td className='px-3 py-3 text-center'> <button className='bg-blue-500  px-3 py-2 text-white font-semibold rounded' onClick={()=>navigate("/player/"+ course._id)}>{progressArray[index] && progressArray[index].lectureCompleted/progressArray[index].totalLecture===1? "Completed":"Ongoing"}</button></td>

            </tr>
          ))}
         </tbody>
      </table>
    </div>
    <Footer/>
    </>
  )
}

export default MyEnrollments
