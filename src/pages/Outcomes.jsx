import React from 'react';
import ProgressBar from '../components/outcomes/ProgressBar'

const Outcomes = () => {

  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-800 to-gray-900">
        <div className="h-full w-full py-36 bg-[url('https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Fline-pattern-left.png&w=1920&q=75')] bg-center bg-cover">
          <h1 className="text-[1.8rem] text-center px-4 text-white font-semibold">Helix Career Outcomes Report 2024</h1>
          <p className='text-[1rem] px-4 py-6 text-center font-[600] text-[#bdea09]'>Another great year of positive career outcomes. Are you next?</p>
        </div>
      </section>
      <section className="progress flex flex-col md:flex-row bg-[#171a53] px-10">
        <div className="min-w-1/3 flex items-center">
          <div>
            <ProgressBar percentage="60" />
          </div>
          <p className="description text-white text-[1rem]">
            Graduates reported that they achieved their enrollment goal
          </p>
        </div>
        <div className="min-w-1/3 flex items-center">
          <div>
            <ProgressBar percentage="84" />
          </div>
          <p className="description text-white text-[1rem]">
            Graduates reported a positive career outcome
          </p>
        </div>
        <div className="min-w-1/3 flex items-center">
          <div>
            <ProgressBar percentage="90" />
          </div>
          <p className="description text-white text-[1rem]">
            Graduates reported that they expanded their skills
          </p>
        </div>
      </section>
      <section className="students-articles flex flex-col justify-center px-10 py-20">
        <h1 className='heading text-[1.5rem] font-semibold text-center'>Graduates reported that Helix helped them land their dream job</h1>
        <div className="artical-container flex flex-wrap gap-8 justify-center py-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="artical-card min-w-[280px] max-w-full w-full md:w-[45%] border-[#c7c7c7] border-[1px]">
              <h1 className='text-[1.2rem] font-semibold p-5 bg-[#e9e8ff]'>From Graduate Student to Digital Marketer</h1>
              <p className="description p-5 pr-10 text-[1rem] font-semibold">Within a month of finishing my Nanodegree, I got a job at Audible. Udacity not only helped me gain knowledge, but also boosted my confidence!</p>
              <div className="student-details flex justify-between p-5 items-center">
                <div className="student-info flex items-center flex-grow">
                  <img src="https://cdn.sanity.io/images/tlr8oxjg/production/1034532e6ad7228fb87b762a7b3fb2d2cc3d5c05-548x548.png?w=128&q=100&fit=clip&auto=format" className='w-16 h-16' alt="" />
                  <div className='pl-2'>
                    <h2 className="name text-[1rem] font-semibold text-[#2015ff]">Falguni Ghandi</h2>
                    <p className="designation text-[0.6rem]">Data Scientist</p>
                    <p className="course-taken text-[0.6rem]">Nanodegree, Jan 2024</p>
                  </div>
                </div>
                <img className='w-20 h-20' src="https://cdn.sanity.io/images/tlr8oxjg/production/60ca62291ede266f161d0798e9d7c83d39ff2419-100x40.svg?w=256&q=100&fit=clip&auto=format" alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
      section.
    </main>
  );
}

export default Outcomes;