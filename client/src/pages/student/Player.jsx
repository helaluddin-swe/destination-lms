import humanizeDuration from 'humanize-duration'
import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'
import Footer from '../../components/student/Footer'
import Rating from '../../components/student/Rating'

const Player = () => {
  const [openSection, setOpenSection] = useState({})
  const [courseData, setCourseData] = useState(null)
  const [playerData, setPlayerData] = useState(null)
  const { calculateChapterDuration, enrollCourses } = useAppContext()
  const { courseId } = useParams()
  const getCourseData = () => {
    enrollCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course)
      }
    })
  }
  useEffect(() => {
    getCourseData()
  }, [enrollCourses])
  const toggleSection = (index) => {
    setOpenSection((prev) => ({
      ...prev, [index]: !prev[index],
    }))
  }
  return (
    <>
      <div className='p-4 sm:p-10 flex flex-col-reverse md:px-20 md:grid md:grid-cols-2 gap-4'>
        {/* left side of player page */}


        <div className="pt-8">
          <h2 className="text-2xl font-semibold">Course Structure</h2>

          <div className="pt-5 space-y-4 w-auto">
            {courseData && courseData.courseContent.map((chapter, index) => (
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
                        <img src={false ? assets.blue_tick_icon : assets.play_icon} alt="play icon" className='h-4 w-4 mt-2' />
                        <div className='flex  gap-1 justify-between items-center  w-full '>
                          <p>{lecture.lectureTitle}</p>
                          <div className='flex gap-2'>
                            {lecture.lectureUrl && <p className='text-blue-500 cursor-pointer' onClick={() => setPlayerData({...lecture,chapter:index+1,lecture:i+1 })}>Watch</p>}
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
          <div className='flex gap-2 md:mt-10 py-10 items-center '><h2 className='text-2xl font-bold'>Rate this Courses :</h2>
          <Rating onRate initialRating={0}/>
          </div>
        </div>

        {/* right side of player page */}
        <div className='md:mt-10'>
          {playerData ? ( <div>
            <YouTube iframeClassName='aspect-video w-full' videoId={playerData.lectureUrl.split("/").pop()} />
            <div className='flex justify-between items-center md:mt-2'><p>
              {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
              </p>
              <button className='text-blue-500'> {true?"Completed":"Mark Complete"}</button></div>


          </div>):<img src={courseData?courseData.courseThumbnail:''} alt="course data" /> }
          

        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Player
