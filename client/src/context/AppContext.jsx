import { createContext, useContext, useEffect, useState } from "react"
import { dummyCourses } from "../assets/assets"
import { useNavigate } from "react-router-dom"

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [allCourse, setAllCourse] = useState([])

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

  const value = {
    currency,
    allCourse
    ,navigate,calculateRating
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
