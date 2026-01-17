
import { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from "react-router-dom"

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')
  const onSearchHandler = (e) => {
    e.preventDefault()
    navigate('/course-list/' + input)
  }
  return (
    <form onSubmit={onSearchHandler} className='max-w-xl w-full h-12 md:h-14 items-center flex border border-gray-500/20 bg-white rounded ' >
      <img src={assets.search_icon} alt="search" className='md:w-auto w-10 px-3' />
      <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className='outline-none w-full h-full  ' placeholder='Search for courses' />
      <button type='submit' className='text-white bg-blue-500 rounded md:px-10 px-7 md:py-3 py-2 mx-1  '>Search</button>
    </form>
  )
}

export default SearchBar
