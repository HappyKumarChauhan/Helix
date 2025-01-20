import React from 'react'

const SkillBox = () => {
  return (
    <div className="skill-box hover:animate-pulse bg-gradient-to-r from-indigo-500 px-5 py-8 w-60 rounded-md flex justify-between items-center transition-all cursor-pointer">
      <h2 className="text-xl text-white font-semibold">
        Machine Learning Courses
      </h2>
      <h2 className="text-xl text-white font-semibold">&rarr;</h2>
    </div>
  )
}

export default SkillBox
