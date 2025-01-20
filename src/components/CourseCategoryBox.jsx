import React from 'react'
import { Link } from 'react-router-dom'

const CourseCategoryBox = (props) => {
  return (
    <Link to={`/school/${props.category.link}`} className='w-36 h-36 min-w-36 min-h-36 cursor-pointer rounded-md bg-white flex items-center justify-center text-center hover:border-green-400 hover:border-4'>
        <p className='p-3'>{props.category.title}</p>
    </Link>
  )
}

export default CourseCategoryBox
