import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-white'>
      <div className='relative flex items-center justify-center'>
        {/* Outer track circle (Gray) */}
        <div className='w-16 h-16 md:w-24 md:h-24 border-4 border-gray-100 rounded-full'></div>
        
        {/* Spinning part (Blue) */}
        <div className='absolute w-16 h-16 md:w-24 md:h-24 border-4 border-transparent border-t-blue-600 rounded-full animate-spin'></div>
      </div>
    </div>
  )
}

export default Loading