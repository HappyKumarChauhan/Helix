import React from 'react'

const CourseCategoryBox = (props) => {
  return (
    <div className='w-36 h-36 min-w-36 min-h-36 cursor-pointer rounded-md bg-white flex items-center justify-center text-center hover:border-green-400 hover:border-4'>
        <p className='p-3'>{props.category}</p>
    </div>
  )
}

export default CourseCategoryBox
