

import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {
  const {allCourse}=useAppContext()
  return (
    <div>
      <h2 className='text-2xl md:text-3xl text-gray-500  '>Learn From The Best </h2>
      <p className='text-sm text-gray-500 mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus rerum quod autem, ut earum est ex illo odit nesciunt quos quis quisquam, aliquid eum aspernatur deserunt, sunt facere exercitationem assumenda!</p>


      <div>{allCourse.slice(0,4).map((course,index)=>(
        <CourseCard key={index} course={course}/>
      ))}</div>
      <Link to={"/course-list"} className='border-gray-500 text-gray-500/70 px-4 py-2 border mt-10 '>Show all Coures</Link>
    </div>
  )
}

export default CourseSection
