import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='animate-spin aspect-square rounded-full border-4 border-t-blue-500 w-20 md:w-30 '></div>
    </div>
  )
}

export default Loading
