import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import SkillBox from '../components/catalog-components/SkillBox'

const Catalog = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  return (
    <main className="bg-[#f6f6f6]">
      <section className="top-section bg-[rgba(40,58,98,1)] px-20 py-5 flex">
        <h1 className="text-white text-2xl my-2 font-semibold max-w-72">
          <span>Bootcamp level quality, on your own time,</span>
          <span className="text-yellow-300">at a fraction of cost.</span>
        </h1>
        <div className="flex flex-grow justify-around items-center">
          <button className="rounded-full bg-white px-2 font-bold border-blue-700 border-2 text-2xl py-1">
            &larr;
          </button>
          <div className=" bg-white py-5 px-20 rounded-md">
            <h1 className="font-semibold text-2xl">Unlimited Learning</h1>
            <p>
              Access our entire catalog of 500+ courses and nano-degree
              programs.
            </p>
          </div>
          <button className="rounded-full bg-white px-2 font-bold border-blue-700 border-2 text-2xl py-1">
            &rarr;
          </button>
        </div>
      </section>
      <section className="programs px-20 py-10">
        <div className="header flex py-5 items-center w-full justify-between">
          <h1 className="text-2xl font-semibold">All Programs</h1>
          <div className="border-[5px] flex justify-between border-blue-700 rounded-md py-3 px-4 w-64">
            <div className="font-semibold text-gray-900">
              Sort By: Most Popular
            </div>
            <div>▼</div>
          </div>
        </div>
        <div className="all-courses flex gap-8 h-[96vh]">
          <div className="side-scroll-bar h-full w-64 overflow-y-auto flex flex-col gap-2 flex-shrink-0">
            <div className="filter-box border border-gray-400 ">
              <div className="filter cursor-pointer bg-white w-full p-5 flex justify-between hover:bg-gray-100"
              onClick={()=>{setIsFilterOpen(!isFilterOpen)}}>
                <h2 className="font-semibold">Price</h2>
                <h2>▼</h2>
              </div>
              <div className={`options bg-white flex flex-col gap-1 ${isFilterOpen?"":"h-0"} overflow-hidden`}>
                <div className="option px-4 py-2 cursor-pointer">Option 1</div>
                <div className="option px-4 py-2 cursor-pointer">Option 2</div>
                <div className="option px-4 py-2 cursor-pointer">Option 3</div>
                <div className="option px-4 py-2 cursor-pointer">Option 4</div>
                <div className="option px-4 py-2 cursor-pointer">Option 5</div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="course-container flex flex-grow flex-wrap gap-5 overflow-y-scroll h-[90vh] my-5">
              {Array.from({ length: 20 }).map((_, index) => (
                <CourseCard key={index} />
              ))}
            </div>
            <div className="pages self-center w-64 my-5 flex flex-grow justify-around items-center">
              <button className="rounded-full bg-white px-2 font-bold border-blue-700 border-2 text-2xl py-1">
                &larr;
              </button>
              <div className="flex justify-evenly w-full">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>...</p>
              </div>
              <button className="rounded-full bg-white px-2 font-bold border-blue-700 border-2 text-2xl py-1">
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="skills-collection bg-blue-950 p-20 flex flex-col items-center">
        <h1 className="heading text-3xl text-white font-semibold">
          Discover our Skill Collections
        </h1>
        <div className="skills py-10 gap-4 flex flex-wrap justify-center">
          {Array.from({ length: 12 }).map((_, index) => (
            <SkillBox key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default Catalog
