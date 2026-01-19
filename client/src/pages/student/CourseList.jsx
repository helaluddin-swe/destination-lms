
import SearchBar from '../../components/student/SearchBar'
import { Link, useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import CourseCard from '../../components/student/CourseCard'
import { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import Footer from '../../components/student/Footer'

const CourseList = () => {
  const { navigate, allCourse } = useAppContext()
  const { input } = useParams()
  const [filteredCourse, setFilteredCourse] = useState([])
  useEffect(() => {
    if (!allCourse) return

    const query = input?.toLowerCase().trim()

    const filtered = query
      ? allCourse.filter(item =>
        item.courseTitle?.toLowerCase().includes(query)
      )
      : allCourse

    setFilteredCourse(filtered)
  }, [allCourse, input])


  return (
     <>
    <div className='relative px-10 md:px-36 pt-20 text-left'>

      <div className='flex flex-col w-full md:flex-row justify-between items-start gap-6'>
        <div className='flex flex-col'>  <h2 className='text-2xl font-bold'>Course List</h2>
          <p className='cursor-pointer'>

            <span onClick={() => navigate("/")} className='text-blue-600 '>Home</span><span>/</span><span className='text-gray-500'>Course-list</span> </p></div>

        <SearchBar data={input} />
      </div>
      {input && <div className='bg-gray-200 px-4 py-2 font-semibold flex justify-between gap-3 max-w-md mt-10 rounded-md  '>
        <p>{input.toLowerCase()}</p>
        <img src={assets.cross_icon} alt='cross' onClick={() => navigate("/course-list")} className='cursor-pointer text-white' />
      </div>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-12 md:p-0'>{filteredCourse.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}</div>



    </div>
    <Footer/>
  </>
  )
}

export default CourseList
