
import Hero from '../../components/student/Hero'

import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'

const Home = () => {
  

  return (
    <div className='text-center items-center  flex flex-col mb-10'>
    <Hero/>
    <Companies/>
    <CourseSection/>
    <TestimonialSection/>
    <CallToAction/>
    </div>
  )
}

export default Home
