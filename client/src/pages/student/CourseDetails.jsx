import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

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

          <div className="pt-5 space-y-4">
            {courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="border rounded-lg p-4"
              >
                <div className="flex  gap-3 justify-between">
                  <img
                    src={assets.down_arrow_icon}
                    alt="toggle"
                    className="h-4 w-4"
                  />
                  <p className="font-medium">
                    {chapter.chapterTitle}
                  </p>
                  <p className="text-sm text-gray-600 pt-2">
                  {(chapter.chapterContent?.length )} -lectures 
                  ---{calculateChapterDuration(chapter)}
                </p>
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
