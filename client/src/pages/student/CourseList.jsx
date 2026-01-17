
import SearchBar from '../../components/student/SearchBar'
import { Link } from 'react-router-dom'

const CourseList = () => {
  return (
    <div>
    <div className='flex justify-between mt-10 '>
    <div className='flex flex-col gap-1'><h2 className='text-2xl font-bold'>Course List</h2>
    <div><Link to={"/"} className='text-blue-600 '>Home</Link><Link to={"/course-list"} >/Course-list</Link> </div>
    </div>
    <SearchBar/>
    </div>
    <div></div>
    </div>
  )
}

export default CourseList
