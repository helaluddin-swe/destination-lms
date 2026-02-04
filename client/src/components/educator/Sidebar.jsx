import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const { isEducator } = useAppContext()

  const menuList = [
    { name: "Dashboard", path: "/educator", icon: assets.home_icon },
    { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
    { name: "My Courses", path: "/educator/my-courses", icon: assets.my_course_icon },
    { name: "Student Enrollment", path: "/educator/student-enrollment", icon: assets.person_tick_icon },
  ]

  // Only render if user is an educator
  if (!isEducator) return null;

  return (
    <div className='flex flex-col w-16 md:w-64 min-h-screen py-3 border-r border-gray-300 bg-white'>
      {menuList.map((item) => (
        <NavLink 
          to={item.path} 
          key={item.name} 
      
          end={item.path === "/educator"} 
          className={({ isActive }) => `
            flex flex-col md:flex-row items-center gap-3 py-3.5 md:px-6 transition-all duration-200
            ${isActive 
              ? "bg-indigo-50 border-r-8 border-indigo-600 text-indigo-700" 
              : "text-gray-600 hover:bg-gray-50 border-r-4 border-transparent"
            }
          `}
        >
          <img src={item.icon} alt={item.name} className='w-6 h-6' />
          <p className='hidden md:block text-sm font-medium'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar