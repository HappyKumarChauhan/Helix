import React from 'react'
import CourseCategoryBox from '../CourseCategoryBox'

const TopSection = () => {
  const topCourseCategories = [
    {
      title: 'Data Science',
      link: 'data-science',
    },
    {
      title: 'Programming & Development',
      link: 'programming',
    },
    {
      title: 'Artificial Intelligence',
      link: 'artificial-intelligence',
    },
    {
      title: 'Business',
      link: 'business',
    },
    {
      title: 'Autonomous Systems',
      link: 'autonomous-systems',
    },
    {
      title: 'Product Management',
      link: 'product-management',
    },
    {
      title: 'Cloud Computing',
      link: 'cloud-computing',
    },
  ]
  return (
    <section className="bg-indigo-950 w-full px-8 py-14 flex flex-col flex-wrap flex-grow items-center overflow-x-auto">
      <h1 className="text-white text-5xl my-2 text-center font-semibold">
        <span>Bootcamp level quality,</span>
        <span className="text-yellow-300">at a fraction of cost.</span>
      </h1>{' '}
      <div className="text-white text-xl font-semibold bg-indigo-950 px-2 relative top-6">
        Explore courses by Job function
      </div>
      <div className="border w-full flex items-center justify-between gap-3 px-4 py-8 rounded-lg my-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        {topCourseCategories.map((item, index) => (
          <CourseCategoryBox key={index} category={item} />
        ))}
      </div>
    </section>
  )
}

export default TopSection
