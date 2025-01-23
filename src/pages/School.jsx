import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ScheduleIcon from '@mui/icons-material/Schedule'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import { act } from 'react'

const School = () => {
  const otherCourses = [
    'Autonomous Systems',
    'Business',
    'Career Resources',
    'Cloud Computing',
    'Cybersecurity',
    'Data Science',
    'Executive Leadership',
    'Product Management',
    'Programming & Development',
  ]
  const learningPaths = [
    {
      title: 'Machine Learning Engineer',
      description:
        'Machine learning is becoming a fundamental skill as software development is entering a new era. This path will enable you to start a career as a machine learning engineer. First learn the fundamentals of programming in Python, linear algebra, and neural networks, and then move on to core machine learning concepts.',
    },
    {
      title: 'Deep Learning Engineer',
      description:
        'Deep learning is driving advances in artificial intelligence that are changing our world. To join this field, start by learning Python fundamentals and neural networks, move on to core machine learning concepts, and then apply deep neural networks to challenges like image classification and generation, time-series prediction, and model deployment.',
    },
    {
      title: 'Aritificial Intelligence Specialist',
      description:
        'Artificial intelligence is expected to be a $60 billion industry by 2025. Learn AI skills in specialized fields like computer vision, natural language processing, deep reinforcement learning, or core AI algorithms. Each of these programs covers advanced topics, building on your existing skills in programming, deep learning, and machine learning.',
    },
    {
      title: 'Quantitative Analyst',
      description:
        'Data-driven traders are now responsible for more than 30% of all U.S. stock trades by investors (or about $1 trillion USD worth of investments). Learn artificial intelligence by building programming and linear algebra skills, then learn to analyze real data and develop financial models for trading.',
    },
  ]
  const freeAICourses = [
    {
      title: 'Intro to Tensorflow for deep learning',
      duration: '3 months',
      level: 'Intermediate',
    },
    {
      title: 'Machine Learning with Python',
      duration: '4 months',
      level: 'Beginner',
    },
    {
      title: 'Advanced AI Techniques',
      duration: '5 months',
      level: 'Advanced',
    },
    {
      title: 'Natural Language Processing with BERT',
      duration: '3 months',
      level: 'Intermediate',
    },
  ]
  const coCreators = [
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
  const [activeTab, setActiveTab] = useState(learningPaths[0])

  return (
    <main className="bg-[#faf6f6]">
      <section className="header flex flex-col md:flex-row justify-center items-center py-5 bg-[rgba(235,228,228,1)] bg-[url('https://www.udacity.com/_next/image?url=%2Fimages%2Fbackgrounds%2Flines-2.png&w=3840&q=75')] bg-center bg-cover">
        <div className="px-10 h-full">
          <h2 className="font-semibold">The School Of</h2>
          <h1 className="text-3xl font-semibold">Artificial Intelligence</h1>
          <p className="py-5 text-md">
            AI is one of the most transformational and fastest-growing
            technologies of our time. Our School of Artificial Intelligence
            offers AI training and machine learning courses as well as programs
            focusing on deep learning, computer vision, natural language
            processing, and AI product management.
          </p>
        </div>
        <div className="image-container min-w-[50vw]">
          <img
            src="https://cdn.sanity.io/images/tlr8oxjg/production/4d2811cdfe0de3966ac4003aaee7e0faff22672a-1280x890.png?w=1920&q=95&fit=clip&auto=format"
            alt=""
          />
        </div>
      </section>
      <hr />
      <section className="learning-path py-10 px-10">
        <h1 className="title text-3xl font-semibold">
          Learning Paths by Job Title
        </h1>
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden mx-3 my-5 gap-2 text-lg border-b-[1px] border-gray-400">
          {learningPaths.map((element, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab(element)
              }}
              className={`whitespace-nowrap p-3 ${
                element.title === activeTab.title
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : ''
              }`}
            >
              {element.title}
            </button>
          ))}
        </div>
        <p className="description max-w-[600px] text-lg text-justify">
          {activeTab.description}
        </p>
      </section>
      <section className="px-10 py-10">
        <h1 className="title text-3xl py-4 font-semibold">
          Artificial Intelligence Across Industries
        </h1>
        <div className="cards-container flex py-4 gap-4 overflow-x-auto">
          <div className="card border px-2 py-8 bg-white min-w-64 max-w-72">
            <h1 className="title font-semibold text-2xl">Manufacturing</h1>
            <ul className="description list-disc p-5 min-w-1/4 flex flex-col gap-4">
              <li>
                Artificial Intelligence is used for predictive maintenance,
                quality control, supply chain optimization, robotics, and
                process automation.
              </li>
              <li>
                It helps manufacturers optimize production, reduce downtime, and
                improve product quality.
              </li>
            </ul>
          </div>
          <div className="card border px-2 py-8 bg-white min-w-64 max-w-72">
            <h1 className="title font-semibold text-2xl">Telecommunications</h1>
            <ul className="description list-disc p-5 min-w-1/4 flex flex-col gap-4">
              <li>
                Artificial Intelligence is employed in customer service
                chatbots, network optimization, fraud detection, and predictive
                analytics.
              </li>
              <li>
                It enhances customer support, improves network performance, and
                identifies potential issues in real-time.
              </li>
            </ul>
          </div>
          <div className="card border px-2 py-8 bg-white min-w-64 max-w-72">
            <h1 className="title font-semibold text-2xl">Energy</h1>
            <ul className="description list-disc p-5 min-w-1/4 flex flex-col gap-4">
              <li>
                Artificial Intelligence is used for energy grid optimization,
                predictive maintenance of infrastructure, demand response
                management, and renewable energy forecasting.
              </li>
              <li>
                It enables efficient energy usage, reduces costs, and supports
                sustainable practices.
              </li>
            </ul>
          </div>
          <div className="card border px-2 py-8 bg-white min-w-64 max-w-72">
            <h1 className="title font-semibold text-2xl">Healthcare</h1>
            <ul className="description list-disc p-5 min-w-1/4 flex flex-col gap-4">
              <li>
                Artificial Intelligence is used in medical imaging analysis,
                drug discovery, personalized medicine, patient monitoring, and
                disease diagnosis.
              </li>
              <li>
                It helps healthcare professionals make more accurate diagnoses,
                predict disease outcomes, and enhance patient care.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="co-creators flex flex-col items-center justify-center py-10 px-5 bg-[#e4ecf9]">
        <h1 className="title text-3xl font-semibold">
          Programs Co-created With Artificial Intelligence Leaders
        </h1>
        <div className="container flex gap-20 flex-wrap justify-center px-10 py-8">
          {coCreators.map((creator, index) => (
            <img height={70} key={index} src={creator} />
          ))}
        </div>
      </section>
      <section className="px-10 py-5 text-2xl font-semibold">
        <h1 className="text-4xl font-semibold py-3">
          Free Artificial Intelligence Programs
        </h1>
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden space-x-6 py-4 mx-2 scroll-smooth">
          {freeAICourses.map((course, index) => (
            <Link key={index} to={`/`}>
              <div className="bg-white border-2 h-96 border-gray-200 rounded-lg shadow-md w-64 cursor-pointer">
                <div className="relative h-24">
                  <img
                    src={
                      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600'
                    }
                    className="absolute inset-0 w-full object-cover p-2 rounded-xl"
                  />
                </div>
                <div className="p-3">
                  <h1 className="font-semibold text-lg pt-16">
                    {course.title}
                  </h1>
                  <div className="items-center justify-between mt-4 text-sm align-baseline text-gray-500">
                    <div className="flex items-center space-x-1">
                      <ScheduleIcon style={{ fontSize: '0.8rem' }} />
                      <p>{course.duration}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SignalCellularAltIcon style={{ fontSize: '0.8rem' }} />
                      <p>{course.level}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          to="/catalog"
          className="text-blue-800 p-4 hover:underline text-lg"
        >
          View Full Catalog
        </Link>
      </section>
      <section className="other-schools-section py-10 px-10">
        <div className="bg-white border px-5 py-6">
          <h1 className="text-3xl font-semibold">Explore Other Schools</h1>
          <div className="button-container py-5 max-w-[1000px] min-w-72 flex gap-4 flex-wrap">
            {otherCourses.map((course, element) => (
              <button
                key={element}
                className="min-w-56 border-2 rounded-sm border-blue-800 text-blue-800
            hover:text-white hover:bg-blue-800 transition-all py-2 px-2 font-semibold"
              >
                {course} &rarr;
              </button>
            ))}
            <Link
              to="/catalog"
              className="text-blue-800 hover:underline transition-all py-2 px-5 font-semibold"
            >
              View Full Catalog
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default School
