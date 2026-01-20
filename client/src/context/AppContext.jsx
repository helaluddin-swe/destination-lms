import { createContext, useContext, useEffect, useState } from "react"
import { dummyCourses } from "../assets/assets"
import { useNavigate } from "react-router-dom"
import humanizeDuration from "humanize-duration"

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [allCourse, setAllCourse] = useState([])
  const [isEducator, setIsEducator] = useState(true)

  useEffect(() => {
    setAllCourse(dummyCourses)
  }, [])

  const currency = import.meta.env.VITE_CURRENCY
  const navigate=useNavigate()

  const calculateRating=(course)=>{
    if(course.courseRatings.length===0){
      return 0
    }
    let totalRating=0
    course.courseRatings.forEach(rating=>{
      totalRating+=rating.rating
    })
    return totalRating/course.courseRatings.length
  }

 const calculateChapterDuration = (chapter) => {
  let time = 0;

  chapter.chapterContent?.forEach((lecture) => {
    time += lecture.lectureDuration || 0;
  });

  return humanizeDuration(time * 60 * 1000, {
    units: ['h', 'm'],
  });
};

  const totalCourseDuration=(course)=>{
    let time=0
    course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time +=lecture.lectureDuration))
    return humanizeDuration(time*60*1000,{units:["h","m"]})

  }
  const calculateNoOfLecture = (course) => {
  let total = 0;

  course.courseContent.forEach((chapter) => {
    if (Array.isArray(chapter.chapterContent)) {
      total += chapter.chapterContent.length;
    }
  });

  return total;
};


  const value = {
    currency,
    allCourse
    ,navigate,calculateRating,isEducator,setIsEducator,calculateNoOfLecture,calculateChapterDuration,totalCourseDuration
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}
