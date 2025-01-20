import React from 'react'
import VideoSection from '../components/home-components/VideoSection'
import CourseSections from '../components/home-components/CourseSections'
import TopSection from '../components/home-components/TopSection'

const Home = () => {
  return (
    <div className="main bg-[#f6f6f6] w-full">
      <TopSection/>
      <CourseSections/>
      <VideoSection/>
    </div>
  )
}
export default Home
