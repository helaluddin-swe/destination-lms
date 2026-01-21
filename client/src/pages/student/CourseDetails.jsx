import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import Loading from '../../components/student/Loading'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'
import humanizeDuration from 'humanize-duration'

import YouTube from 'react-youtube'

const CourseDetails = () => {
  const { id } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSection, setOpenSection] = useState({})
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false)
  const [playerData, setPlayerData] = useState(null)
  const { allCourse, currency, calculateRating, calculateNoOfLecture, calculateChapterDuration, totalCourseDuration } = useAppContext()
  const fetchedCourse = async () => {
    const findCourse = await allCourse.find(item => item._id === id)
    setCourseData(findCourse)
  }
  useEffect(() => {
    fetchedCourse()

  }, [allCourse])

  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev, [index]: !prev[index],
    }))
  }
  return courseData ? (<>
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
                <div className='flex items-center justify-between gap-2 px-4 py-3 select-none cursor-pointer' onClick={() => toggleSection(index)}>
                  <div className="flex  gap-3 items-center" >
                    <img
                      src={assets.down_arrow_icon}
                      alt="toggle"
                      className={`transform transition-transform ${openSection[index] ? 'rotate-180' : ''}`}
                    />
                    <p className="font-medium">
                      {chapter.chapterTitle}
                    </p>

                  </div>
                  <p className="text-sm text-gray-600 pt-2">
                    {(chapter.chapterContent?.length)} -lectures
                    ---{calculateChapterDuration(chapter)}
                  </p>
                </div>
                <div className={` duration-300 transition-all overflow-hidden ${openSection[index] ? "max-h-96" : "max-h-0"} `}>
                  <ul className='list-disc border-t md:pl-4 pl-2 py-4 pr-4 justify-between text-gray-600 border-gray-500'>
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className='flex items-start gap-2  '>
                        <img src={assets.play_icon} alt="play icon" className='h-4 w-4 mt-2' />
                        <div className='flex  gap-1 justify-between items-center  w-full '>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.isPreviewFree && <p className='text-blue-500 cursor-pointer' onClick={()=>setPlayerData({videoId:lecture.lectureUrl.split('/').pop()})}>Preview</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}</p>
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
        <div className='pt-12 '>
          <h3 className='text-gray-800 font-semibold text-3xl '>Course Description</h3>
          <p
            className=" pt-4 rich-text"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription
            }}
          />

        </div>

      </div>
      {/* right side data */}
      <div className='rounded-md shadow-md shadow-gray-600 min-w-100 md:min-w-120   '>
        {playerData? <YouTube iframeClassName='aspect-video w-full' videoId={playerData.videoId} opts={{playerVars:{autoplay:1}}}/>: <img src={courseData.courseThumbnail} alt="course thumnails" className='w-full' /> }
       
        <div className='pt-4'>
          <div className='flex gap-4 px-4'>
            <img src={assets.time_left_clock_icon} alt="time left icon" />
            <p className='text-red-500'><span className='font-bold'>5 Days</span> Left at this price</p></div>
        </div>
        <div className='pt-3 flex gap-4 px-4 items-center'>
          <p className='text-2xl md:text-4xl text-gray-800 font-bold'>{currency}{(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2)}</p>
          <p className='md:text-md line-through'>{currency} {courseData.coursePrice}</p>
          <p className='md:text-lg'>{courseData.discount} % price off</p>
        </div>

        <div className='flex items-center gap-4 justify-around pt-3 '>
          <div className='flex items-center gap-1'>
            <img src={assets.star} alt="star icon" />
            <p>({calculateRating(courseData)} rating)</p>
          </div>
          <div className='h-4 w-px bg-gray-800 font-bold' />
          <div className='flex items-center gap-1'>
            <img src={assets.time_clock_icon} alt="time clock icon" />
            <p>{totalCourseDuration(courseData)}</p>

          </div>
          <div className='h-4 w-px bg-gray-800 font-bold' />
          <div className='flex items-center gap-1'>
            <img src={assets.lesson_icon} alt="lesson icon" />
            <p>{calculateNoOfLecture(courseData)} Lessons</p>
          </div>

        </div>
        {/* button for enroolll */}
        <button className='bg-blue-500 text-3xl font-bold w-full   rounded-md text-white py-2 mt-4 md:mt-6 pt-3 '>{isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}</button>
        <div className='pt-4 px-3'>
          <h3 className='text-gray-900 text-2xl font-bold'> what about the Course!</h3>
          <ul className='list-disc text-sm text-gray-700 px-6 pt-2'>
            <li>Lifetime access with free updates.</li>
            <li>Step-by-step, hands-on project guidance.</li>
            <li>Downloadable resources and source code. </li>
            <li>Quizzes to test your knowledge. </li>
            <li>Certificate of completion. </li>

          </ul>
        </div>

 
      </div>
     


    </div>
   <Footer/>
   </>

  ) : (
    <Loading/>
  );

}

export default CourseDetails
