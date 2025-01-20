import React, { useRef } from 'react'
import CourseCard from './CourseCard'

const CourseSection = (props) => {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -195, // Scroll by the width of the container
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 195, // Scroll by the width of the container
        behavior: 'smooth',
      });
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center text-2xl font-semibold">
        <h1>{props.category.categoryName}</h1>
        <div className="flex justify-end gap-4">
          <button
            onClick={scrollLeft}
            className="rounded-full px-4 py-3 border-2 border-gray-300 text-xl"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className="rounded-full px-4 py-3 border-2 border-gray-300 text-xl"
          >
            →
          </button>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto justify-between [&::-webkit-scrollbar]:hidden space-x-4 py-4 mx-2 scroll-smooth"
      >
        {props.category.courses.map((item,index)=>(<CourseCard key={index} course={item} />))}
      </div>
    </div>
  )
}

export default CourseSection
