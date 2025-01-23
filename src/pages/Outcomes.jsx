import React from 'react'
import ProgressBar from '../components/outcomes/ProgressBar'

const Outcomes = () => {
  const industries = [
    'https://cdn.sanity.io/images/tlr8oxjg/production/72d5d499eb465bb6ba0fe060b614274d027b9c3d-66x40.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/e269fc20f1d2370bde63f2cfb8fc9ae15c015cc8-91x36.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/388c33ac84c9b84bb2a277562182855d54d43b2a-116x40.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/6093a10d7fbe6d5d53df267da1f13c5b9ca4d350-48x48.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/f13351aa98334cbe97b3261b6de74c0471bdad5a-106x40.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/770eaa5ea62c3f0f3d15c0f7cef63ebc138b4daf-139x13.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/fad7ac7e3caf37bfc9ce975c794f08f7be0e8e8a-129x24.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/c26bc6aeaf957221a0f0e11e9624f25921f15aca-130x14.svg?w=1080&q=90&fit=clip&auto=format',
    'https://cdn.sanity.io/images/tlr8oxjg/production/5ca576c693ba1567c019abc39e9c42dc9dc8c657-74x28.svg?w=1080&q=90&fit=clip&auto=format',
  ]
  return (
    <main>
      <section className="flex flex-col justify-center items-center bg-gradient-to-b from-blue-800 to-gray-900">
        <div className="h-full w-full py-36 bg-[url('https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Fblue-lines-wide.png&w=3840&q=100')] bg-center bg-cover">
          <h1 className="text-[1.8rem] text-center px-4 text-white font-semibold">
            Helix Career Outcomes Report 2024
          </h1>
          <p className="text-[1rem] px-4 py-6 text-center font-[600] text-[#bdea09]">
            Another great year of positive career outcomes. Are you next?
          </p>
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
      <section className="students-articles flex flex-col justify-center px-10 py-12">
        <h1 className="heading text-[1.8rem] font-semibold text-center">
          Graduates reported that Helix helped them land their dream job
        </h1>
        <div className="artical-container flex flex-wrap gap-8 justify-center py-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="artical-card min-w-[280px] max-w-full w-full md:w-[45%] border-[#c7c7c7] border-[1px]"
            >
              <h1 className="text-[1.2rem] font-semibold p-5 bg-[#e9e8ff] text-[#2015ff]">
                From Graduate Student to Digital Marketer
              </h1>
              <p className="description p-5 pr-10 text-[1rem] font-semibold">
                Within a month of finishing my Nanodegree, I got a job at
                Audible. Helix not only helped me gain knowledge, but also
                boosted my confidence!
              </p>
              <div className="student-details flex justify-between p-5 items-center">
                <div className="student-info flex items-center flex-grow">
                  <img
                    src="https://cdn.sanity.io/images/tlr8oxjg/production/1034532e6ad7228fb87b762a7b3fb2d2cc3d5c05-548x548.png?w=128&q=100&fit=clip&auto=format"
                    className="w-16 h-16"
                    alt=""
                  />
                  <div className="pl-2">
                    <h2 className="name text-[1rem] font-semibold text-[#2015ff]">
                      Falguni Ghandi
                    </h2>
                    <p className="designation text-[0.6rem]">Data Scientist</p>
                    <p className="course-taken text-[0.6rem]">
                      Nanodegree, Jan 2024
                    </p>
                  </div>
                </div>
                <img
                  className="w-20 h-20"
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/60ca62291ede266f161d0798e9d7c83d39ff2419-100x40.svg?w=256&q=100&fit=clip&auto=format"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-[#e9e8ff]">
        <div className="flex items-center gap-6 justify-center">
          <h1 className="text-[4rem] font-semibold text-[#2015ff]">75%</h1>
          <p className="text-[1.3rem] w-1/2">
            of graduates reported the skills they learn from Helix
            <span className="text-[#2015ff] font-semibold">
              {' '}
              are critical to their jobs
            </span>
          </p>
        </div>
      </section>
      <section className="promoted-students-feedback py-12 px-10">
        <h1 className="heading text-[1.8rem] font-semibold text-center">
          Helix students leveraged their new skills to get promoted
        </h1>
        <div className="cards-container py-8 flex gap-4 overflow-x-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="artical-card min-w-[500px] border-[#c7c7c7] border"
            >
              <h1 className="title bg-[rgba(212,249,242,1)] text-[#047a65] font-semibold p-4 text-[1.2rem]">
                Promoted to Associate Product Manager
              </h1>
              <p className="description p-5 pr-10 text-[1rem] font-semibold">
                "After completing the course, I was able to enhance my skills
                and knowledge, which helped me to advance to the position of
                Associate Product Manager within just four months."
              </p>
              <div className="student-details flex justify-between p-5 items-center">
                <div className="student-info flex items-center flex-grow">
                  <img
                    src="https://cdn.sanity.io/images/tlr8oxjg/production/1034532e6ad7228fb87b762a7b3fb2d2cc3d5c05-548x548.png?w=128&q=100&fit=clip&auto=format"
                    className="w-16 h-16"
                    alt=""
                  />
                  <div className="pl-2">
                    <h2 className="name text-[1rem] font-semibold text-[#047a65]">
                      Falguni Ghandi
                    </h2>
                    <p className="designation text-[0.6rem]">Data Scientist</p>
                    <p className="course-taken text-[0.6rem]">
                      Nanodegree, Jan 2024
                    </p>
                  </div>
                </div>
                <img
                  className="w-20 h-20"
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/60ca62291ede266f161d0798e9d7c83d39ff2419-100x40.svg?w=256&q=100&fit=clip&auto=format"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="p-8 bg-[#171a53]">
        <div className="flex items-center gap-6 justify-center">
          <h1 className="text-[4rem] font-semibold text-[#6491fc]">75%</h1>
          <p className="text-[1.3rem] w-1/2 text-white">
            of graduates reported that Helix made them
            <span className="text-[#6491fc] font-semibold">
              {' '}
              feel more confident at their job
            </span>
          </p>
        </div>
      </section>
      <section className="students-articles flex flex-col justify-center px-10 py-12">
        <h1 className="heading text-[1.8rem] font-semibold text-center">
          Graduates reported that Helix helped them land their dream job
        </h1>
        <div className="artical-container flex flex-wrap gap-8 justify-center py-8">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="artical-card min-w-[280px] max-w-full w-full md:w-[45%] border-[#c7c7c7] border-[1px]"
            >
              <h1 className="text-[1.2rem] font-semibold p-5 bg-[#e9e8ff] text-[#2015ff]">
                From Graduate Student to Digital Marketer
              </h1>
              <p className="description p-5 pr-10 text-[1rem] font-semibold">
                Within a month of finishing my Nanodegree, I got a job at
                Audible. Helix not only helped me gain knowledge, but also
                boosted my confidence!
              </p>
              <div className="student-details flex justify-between p-5 items-center">
                <div className="student-info flex items-center flex-grow">
                  <img
                    src="https://cdn.sanity.io/images/tlr8oxjg/production/1034532e6ad7228fb87b762a7b3fb2d2cc3d5c05-548x548.png?w=128&q=100&fit=clip&auto=format"
                    className="w-16 h-16"
                    alt=""
                  />
                  <div className="pl-2">
                    <h2 className="name text-[1rem] font-semibold text-[#2015ff]">
                      Falguni Ghandi
                    </h2>
                    <p className="designation text-[0.6rem]">Data Scientist</p>
                    <p className="course-taken text-[0.6rem]">
                      Nanodegree, Jan 2024
                    </p>
                  </div>
                </div>
                <img
                  className="w-20 h-20"
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/60ca62291ede266f161d0798e9d7c83d39ff2419-100x40.svg?w=256&q=100&fit=clip&auto=format"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="skills-section flex flex-col justify-center px-10">
        <h1 className="heading text-[1.8rem] font-semibold text-center">
          Develop in-demand skills with industry relevant projects
        </h1>
        <div className="skills-container flex flex-wrap gap-4 justify-center py-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="skill-card min-w-[280px] max-w-full w-full md:w-[31%] shadow-md"
            >
              <div className="image-container p-1">
                <img
                  className="w-full rounded-lg"
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/acaa1f1a0bdbb310a6016cc1a85374d473d45f36-1200x992.png?w=2048&q=100&fit=clip&auto=format"
                  alt=""
                />
              </div>
              <div className="card-body p-6 pr-10">
                <p className="text-[1rem]">
                  <span className="text-[#2015ff] font-semibold">
                    In the AI Product Manager Course
                  </span>
                  , learners complete a project that builds a model that
                  classifies images of chest X Rays using Google AutoML
                </p>
                <button className="text-white mt-5 py-2 px-6 rounded-md bg-[#2015ff] hover:bg-[#322d98]">
                  See Course &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="promoted-students-feedback p-10">
        <h1 className="heading text-[1.8rem] font-semibold text-center">
          Learners have spoken. They prefer Helix.
        </h1>
        <div className="cards-container py-8 flex gap-4 overflow-x-auto">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="artical-card min-w-[500px] border-[#c7c7c7] border"
            >
              <h1 className="title bg-[rgba(212,249,242,1)] text-[#047a65] font-semibold p-4 text-[1.2rem]">
                Promoted to Associate Product Manager
              </h1>
              <p className="description p-5 pr-10 text-[1rem] font-semibold">
                "After completing the course, I was able to enhance my skills
                and knowledge, which helped me to advance to the position of
                Associate Product Manager within just four months."
              </p>
              <div className="student-details flex justify-between p-5 items-center">
                <div className="student-info flex items-center flex-grow">
                  <img
                    src="https://cdn.sanity.io/images/tlr8oxjg/production/1034532e6ad7228fb87b762a7b3fb2d2cc3d5c05-548x548.png?w=128&q=100&fit=clip&auto=format"
                    className="w-16 h-16"
                    alt=""
                  />
                  <div className="pl-2">
                    <h2 className="name text-[1rem] font-semibold text-[#047a65]">
                      Falguni Ghandi
                    </h2>
                    <p className="designation text-[0.6rem]">Data Scientist</p>
                    <p className="course-taken text-[0.6rem]">
                      Nanodegree, Jan 2024
                    </p>
                  </div>
                </div>
                <img
                  className="w-20 h-20"
                  src="https://cdn.sanity.io/images/tlr8oxjg/production/60ca62291ede266f161d0798e9d7c83d39ff2419-100x40.svg?w=256&q=100&fit=clip&auto=format"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#171a53] mb-4">
        <div className="h-full flex items-center w-full py-10 bg-[url('https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Fblue-lines-wide.png&w=3840&q=100')] bg-center bg-cover">
        <div className="left-section w-[40%] px-14">
          <h1 className='text-[2.5rem] font-semibold text-white'>Helix is the 'University' for Industries</h1>
          <div className="description mt-4 text-white rounded-md bg-[#2015ff] py-4 px-2">
            <h1 className="total-parteners text-[2rem] font-semibold">200+</h1>
            <h2 className="title text-[1.3rem] font-semibold">Top-tier industry partners</h2>
            <p className='text-[1rem] py-2'>Curriculum is co-created with industry leaders and subject matter experts to align Nanodegree content with high-impact skills that top companies want.</p>
          </div>
        </div>
        <div className="right-section flex flex-wrap gap-4 justify-center">
          {industries.map((item,index)=>(<div className="card flex justify-center items-center bg-white rounded-lg w-44 h-32"><img src={item} alt="" /></div>))}  
        </div>
        </div>
      </section>
    </main>
  )
}

export default Outcomes
