import React, {  useState } from 'react'
import Hero from '../../components/student/Hero'
import SearchBar from '../../components/student/SearchBar'

const Home = () => {
  const [data,setData]=useState('')
  return (
    <div className='items-center justify-center flex flex-col space-y-5'>
    <Hero/>
    <SearchBar data={data}/>
    </div>
  )
}

export default Home
