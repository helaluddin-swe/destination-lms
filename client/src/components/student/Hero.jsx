
import {assets} from "../../assets/assets"
import SearchBar from './SearchBar'


const Hero = () => {
 
  return (
    <div className='flex flex-col justify-center items-center space-y-5 w-full pt-20 pb-12  relative'>
     < div className="absolute inset-0 w-full h-125 bg-linear-to-b from-cyan-100/70 to-transparent pointer-events-none" />
      <h1 className='text-4xl max-w-2xl text-black md:text-5xl font-bold  '>Empower your future with the courses designed to
      <span className='  text-cyan-500'> fit your choice.</span></h1>
      <img src={assets.sketch} alt="sketch" />
      <p className='hidden md:block items-center max-w-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.hello rthis fdsljfsdf f sf!</p>

      <SearchBar />
    </div>
  )
}

export default Hero
