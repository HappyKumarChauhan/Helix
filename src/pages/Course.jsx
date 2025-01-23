import React from 'react'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const Course = () => {
    return (
        <main className='bg-[#f0f5ff]'>
            <section className={`header bg-[url('https://www.udacity.com/_next/image?url=https%3A%2F%2Fvideo.udacity-data.com%2Ftopher%2F2024%2FDecember%2F676370c3_introduction-to-data-science-and-supervised-machine-learning-plp%2Fintroduction-to-data-science-and-supervised-machine-learning-plp.jpeg&w=828&q=75')] bg-center bg-cover px-10 py-10`}>
                <div className='max-w-96 text-white'>
                    <h1 className='text-3xl font-bold text-balance'>Introduction to Data Science and Supervised Machine Learning</h1>
                    <p>Course</p>
                    <p>This course is for data analysts who want to apply machine learning. You will begin with an introduction to the fundamental concepts and processes that differentiate data science from other fields. Then you will dive deeper into machine learning algorithms, including underlying math concepts like gradient descent, ensemble models like random forests, and an introduction to neural networks and deep learning....</p>
                </div>
                <button className='bg-[#bdea09] my-5 px-8 py-3 font-bold rounded-md'>Enroll Now &rarr;</button>
            </section>
            <section className='course-details px-10 py-5 outline outline-1 outline-gray-400'>
                <div className='flex gap-3'>
                    <div className="border bg-white px-3 text-xs flex items-center justify-center py-1 rounded-2xl border-blue-700">Advanced</div>
                    <div className="border bg-white px-3 text-xs flex items-center justify-center py-1 rounded-2xl border-blue-700">Two Weeks</div>
                    <div className="border bg-white px-3 text-xs flex items-center justify-center py-1 rounded-2xl border-blue-700">Last Updated: January 11, 2025</div>
                </div>
                <div className='py-2'>
                    <div className='flex py-1 gap-1'>
                        <p className='font-bold'>Skills you will learn:</p>
                        <p>Blog posts • Data storytelling • CRISP-DM • AI algorithms in Python</p>
                    </div>
                    <div className='flex py-1 gap-1'>
                        <p className='font-bold'>Prerequisites:</p>
                        <p>NumPy • Github • Linear regression</p>
                    </div>
                </div>
            </section>
            <section className='lesson-section px-10 py-10'>
                <h1 className='text-3xl font-semibold'>Course Lessons</h1>
                <div className="lessons-container flex gap-5 flex-wrap py-5">
                    {Array.from({ length: 6 }).map((_, index) => (<div key={index} className="lesson-card border p-5 max-w-72 bg-white">
                        <h2><AutoStoriesIcon /> Lesson {index+1}</h2>
                        <h1 className="title text-lg py-2">The Data Science Process</h1>
                        <p className="description text-sm">Learn about the basics of data science and machine learning. Walk through the CRISP-DM process and how you can apply it to many data science problems.</p>
                    </div>))}
                </div>
            </section>
            <section className="faculties-section px-10 py-10">
                <h1 className='title text-3xl font-semibold'>Taught by the best</h1>
                <div className="faculty-cards-container flex py-5">
                    <div className="card p-5 bg-blue-950 max-w-60 rounded-xl text-white">
                        <div className="profile-image">
                            <img src="https://cdn.sanity.io/images/tlr8oxjg/production/51ecf35d785433c801859f285da6f74d67b28453-1300x1950.jpg?w=96&q=100&fit=clip&auto=format" className='rounded-full h-24 w-24' alt="" />
                        </div>
                        <h2 className="name text-xl font-semibold">David Elliott</h2>
                        <p className="designation text-sm">Data Scientist and Engineer</p>
                        <p className="description py-4">David Elliott is both a data scientist and a data engineer at a small data management company. He has extensive experience in education, both as an instructor and as a curriculum developer.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Course
