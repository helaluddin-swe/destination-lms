

import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {
  const {allCourse}=useAppContext()
  return (
    <div className='mx-20 bg-cyan-100/10'>
      <h2 className='text-2xl md:text-3xl text-gray-500  '>Learn From The Best Teachers </h2>
      <p className='text-sm text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum quod autem, ut earum est ex illo odit nesciunt <br/> quos quis quisquam, aliquid eum aspernatur deserunt, sunt facere exercitationem assumenda!</p>


      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-10 md:my-16 gap-4 px-4 md:px-0'>{allCourse.slice(0,4).map((course,index)=>(
        <CourseCard key={index} course={course}/>
      ))}</div>
      <Link to={"/course-list"} className='border-gray-500 text-gray-500/70 px-4 py-2 border mt-10 '>Show all Coures</Link>
    </div>
  )
}

export default CourseSection
