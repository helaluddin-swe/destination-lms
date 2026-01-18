
import Hero from '../../components/student/Hero'

import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  

  return (
    <div className='text-center items-center  flex flex-col '>
    <Hero/>
    <Companies/>
    <CourseSection/>
    <TestimonialSection/>
    <CallToAction/>
    <Footer/>
    </div>
  )
}

export default Home
