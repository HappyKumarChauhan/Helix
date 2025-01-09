import React from 'react'
import CourseCategoryBox from '../components/CourseCategoryBox'
import CourseCard from '../components/CourseCard'
import CourseSection from '../components/CourseSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="main bg-[#f6f6f6] w-full">
      <section className="bg-indigo-950 w-full px-8 py-14 flex flex-col flex-wrap flex-grow items-center overflow-x-auto">
        <h1 className="text-white text-5xl my-2 text-center font-semibold">
          <span>Bootcamp level quality,</span>
          <span className="text-yellow-300">at a fraction of cost.</span>
        </h1>{' '}
        <div className="text-white text-xl font-semibold bg-indigo-950 px-2 relative top-6">
          Explore courses by Job function
        </div>
        <ul className="border w-full flex items-center justify-between gap-3 px-4 py-8 rounded-lg my-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          <CourseCategoryBox category="Data Science" />
          <CourseCategoryBox category="Programming & Development" />
          <CourseCategoryBox category="Artificial Intelligence" />
          <CourseCategoryBox category="Business" />
          <CourseCategoryBox category="Autonomous" />
          <CourseCategoryBox category="Product Management" />
          <CourseCategoryBox category="Cloud Management" />
        </ul>
      </section>
      <section className="px-14 pt-14">
        <CourseSection title="Course Recommended For You" />
      </section>
      <section className="px-14 pt-14">
        <CourseSection title="Newly Released Courses" />
      </section>
      <section className="px-14 pt-14">
        <CourseSection title="Most Popular Courses" />
      </section>
      <section className="px-14 pt-14">
        <CourseSection title="Top AI and Data Skills Courses" />
      </section>
      <section className="px-14 pt-14">
        <CourseSection title="Course recommended for you" />
      </section>
      <section className="flex w-full my-10 flex-wrap-reverse justify-center">
        <div className=" video-section max-w-[500px] min-w-[200px] h-full flex items-center justify-center p-20 px-5">
          <video
            poster="/videos/workspaces-poster.webp"
            autoPlay
            controls
            loop
            muted
            playsInline
            className="css-1rdhbun h-full rounded-xl"
          >
            <source
              src="https://www.udacity.com/videos/workspaces.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className="description flex w-96 items-center justify-center flex-col flex-grow bg-red px-10">
          <h1 className="heading text-3xl font-semibold mb-16">
            The HELIX Difference
          </h1>
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="text-2xl font-semibold">
                Prove Mastery Through Hands-On Projects
              </h1>
              <p>
                Our open-ended projects are modeled after real-world workplace
                scenarios, and require in-depth critical thinking and creative
                solutions.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-semibold">
                Succeed with Personalized Feedback
              </h1>
              <p>
                Every project receives personalized feedback from industry
                experts, and our mentors are available to answer questions
                whenever you're feeling stuck.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home
