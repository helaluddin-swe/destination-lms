
import Hero from '../../components/student/Hero'

import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'

const Home = () => {
  

  return (
    <div className='text-center items-center  flex flex-col mb-10'>
    <Hero/>
    <Companies/>
    <CourseSection/>
    </div>
  )
}

export default Home
