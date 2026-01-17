import { createContext, useContext, useEffect, useState } from "react"
import { dummyCourses } from "../assets/assets"

const AppContext = createContext()

export const AppContextProvider = ({ children }) => {
  const [allCourse, setAllCourse] = useState([])

  useEffect(() => {
    setAllCourse(dummyCourses)
  }, [])

  const currency = import.meta.env.VITE_CURRENCY

  const value = {
    currency,
    allCourse
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
