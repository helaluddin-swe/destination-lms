import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'
import humanizeDuration from 'humanize-duration'

const CourseDetails = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const { allCourse, calculateRating, calculateNoOfLecture, calculateChapterDuration, totalCourseDuration } = useAppContext()
  const fetchedCourse = async () => {
    const findCourse = await allCourse.find(item => item._id === id)
    setCourseData(findCourse)
  }
  useEffect(() => {
    fetchedCourse()

  }, [])
  return courseData ? (
    <div className="relative flex flex-col-reverse md:flex-row gap-10 pt-12 md:pt-20 px-16 md:px-24 justify-between">

      {/* background gradient */}
      <div className="absolute inset-0 w-full h-full bg-linear-to-b from-cyan-100/70 to-transparent z-[-1] pointer-events-none" />

      {/* left side */}
      <div className="flex flex-col z-10">
        <h2 className="text-3xl text-gray-950">
          {courseData.courseTitle}
        </h2>

        <p
          className="max-w-sm text-gray-800 md:text-base pt-8"
          dangerouslySetInnerHTML={{
            __html: courseData.courseDescription.slice(0, 200),
          }}
        />

        {/* rating */}
        <div className="flex space-x-2 items-center pt-4">
          <h3>{calculateRating(courseData)}</h3>

          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="h-3.5 w-3.5"
                src={
                  i < Math.floor(calculateRating(courseData))
                    ? assets.star
                    : assets.star_blank
                }
                alt="star"
              />
            ))}
          </div>

          <span>
            {courseData.courseRatings.length}{' '}
            {courseData.courseRatings.length === 1 ? 'rating' : 'ratings'}
          </span>

        </div>

        {/* course structure */}
        <div className="pt-8">
          <h2 className="text-2xl font-semibold">Course Structure</h2>

          <div className="pt-5 space-y-4 w-auto">
            {courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="border rounded-lg border-gray-300 bg-white mb-2 w-auto"
              >
                <div className='flex items-center justify-between gap-2 px-4 py-3 select-none cursor-pointer'> 
                <div className="flex  gap-3 items-center">
                  <img
                    src={assets.down_arrow_icon}
                    alt="toggle"
                    className="h-4 w-4"
                  />
                  <p className="font-medium">
                    {chapter.chapterTitle}
                  </p>
                 
                </div>
                 <p className="text-sm text-gray-600 pt-2">
                  {(chapter.chapterContent?.length )} -lectures 
                  ---{calculateChapterDuration(chapter)}
                </p>
                </div>
                <div className='max-h-96 duration-300 transition-all overflow-hidden '>
                  <ul className='list-disc border-t md:pl-10 pl-4 py-4 pr-4 text-gray-600 border-gray-500'>
                    {chapter.chapterContent.map((lecture,i)=>(
                      <li key={i} className='flex items-start'>
                        <img src={assets.play_icon} alt="play icon" className='h-4 w-4 mt-2' />
                        <div className='flex  gap-4'>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-4'>
                            {lecture.isPreviewFree && <p>Preview</p>}
                            <p>{humanizeDuration(lecture.lectureDuration*60*1000,{units:["h","m"]})}</p>
                          </div>
                        </div>

                      </li>
                    ))}
                  </ul>
                </div>

                
              </div>
            ))}
          </div>
        </div>

      </div>
      

    </div>
    
  ) : (
    <Loading />
  );

}

export default CourseDetails
