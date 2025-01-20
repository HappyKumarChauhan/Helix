import React from 'react'
import CourseSection from '../CourseSection'

const CourseSections = () => {
    const allCourses=[
        {
            "categoryName": "Top AI and Data Skills Courses",
            "courses": [
                {
                    "title": "AI Project Manager",
                    "image": "https://www.pexels.com/photo/technology-people-programming-computer-5468195/",
                    "rating": 4.5,
                    "ratedBy": 792,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Data Science Masterclass",
                    "image": "https://www.pexels.com/photo/data-technology-future-microchip-1029750/",
                    "rating": 4.8,
                    "ratedBy": 1200,
                    "duration": "6 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Machine Learning Bootcamp",
                    "image": "https://www.pexels.com/photo/man-wearing-black-hoodie-working-on-laptop-1533728/",
                    "rating": 4.6,
                    "ratedBy": 950,
                    "duration": "4 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Deep Learning Specialization",
                    "image": "https://www.pexels.com/photo/coding-and-technology-concept-5577106/",
                    "rating": 4.7,
                    "ratedBy": 600,
                    "duration": "5 Months",
                    "level": "Advanced"
                },
                {
                    "title": "AI in Healthcare",
                    "image": "https://www.pexels.com/photo/person-holding-a-tablet-computer-with-medical-healthcare-connection-on-the-screen-4867273/",
                    "rating": 4.4,
                    "ratedBy": 850,
                    "duration": "2 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Data Visualization with Python",
                    "image": "https://www.pexels.com/photo/close-up-photo-of-person-using-black-and-gray-laptop-1181231/",
                    "rating": 4.9,
                    "ratedBy": 1100,
                    "duration": "2 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "AI for Business Leaders",
                    "image": "https://www.pexels.com/photo/black-desk-chair-1181684/",
                    "rating": 4.3,
                    "ratedBy": 760,
                    "duration": "1 Month",
                    "level": "Beginner"
                },
                {
                    "title": "Natural Language Processing (NLP) Fundamentals",
                    "image": "https://www.pexels.com/photo/person-wearing-white-t-shirt-and-black-sunglasses-3619088/",
                    "rating": 4.7,
                    "ratedBy": 950,
                    "duration": "4 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "AI Ethics and Governance",
                    "image": "https://www.pexels.com/photo/photo-of-digital-clock-1051074/",
                    "rating": 4.2,
                    "ratedBy": 400,
                    "duration": "3 Months",
                    "level": "Advanced"
                },
                {
                    "title": "AI and Robotics Integration",
                    "image": "https://www.pexels.com/photo/robot-hand-holding-gears-5025737/",
                    "rating": 4.6,
                    "ratedBy": 800,
                    "duration": "5 Months",
                    "level": "Advanced"
                }
            ]
        },
        {
            "categoryName": "Development",
            "courses": [
                {
                    "title": "Full Stack Web Development",
                    "image": "https://www.pexels.com/photo/person-coding-on-a-laptop-574071/",
                    "rating": 4.7,
                    "ratedBy": 1500,
                    "duration": "6 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Mobile App Development with Flutter",
                    "image": "https://www.pexels.com/photo/person-holding-black-iphone-4476633/",
                    "rating": 4.6,
                    "ratedBy": 1100,
                    "duration": "4 Months",
                    "level": "Beginner"
                },
                {
                    "title": "JavaScript for Beginners",
                    "image": "https://www.pexels.com/photo/laptop-computer-on-brown-wooden-table-beside-iphone-1406639/",
                    "rating": 4.8,
                    "ratedBy": 850,
                    "duration": "2 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Python Development Bootcamp",
                    "image": "https://www.pexels.com/photo/computer-keyboard-inside-room-572056/",
                    "rating": 4.9,
                    "ratedBy": 2000,
                    "duration": "5 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "React Native Mobile Development",
                    "image": "https://www.pexels.com/photo/person-holding-smartphone-while-using-laptop-607812/",
                    "rating": 4.7,
                    "ratedBy": 970,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Django Web Development",
                    "image": "https://www.pexels.com/photo/person-using-black-laptop-926680/",
                    "rating": 4.6,
                    "ratedBy": 1200,
                    "duration": "4 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Node.js Backend Development",
                    "image": "https://www.pexels.com/photo/turned-on-gray-laptop-computer-374720/",
                    "rating": 4.5,
                    "ratedBy": 850,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Java Development for Beginners",
                    "image": "https://www.pexels.com/photo/person-using-laptop-computer-1089438/",
                    "rating": 4.7,
                    "ratedBy": 1050,
                    "duration": "2 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Ruby on Rails Web Development",
                    "image": "https://www.pexels.com/photo/person-in-red-jacket-using-laptop-computer-1266281/",
                    "rating": 4.4,
                    "ratedBy": 700,
                    "duration": "3 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Kotlin for Android Development",
                    "image": "https://www.pexels.com/photo/person-holding-black-smartphone-1711988/",
                    "rating": 4.5,
                    "ratedBy": 900,
                    "duration": "4 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "C# Development for Windows Applications",
                    "image": "https://www.pexels.com/photo/photo-of-person-typing-on-computer-keyboard-1103531/",
                    "rating": 4.6,
                    "ratedBy": 870,
                    "duration": "3 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Swift Programming for iOS Development",
                    "image": "https://www.pexels.com/photo/close-up-photo-of-person-coding-on-laptop-5468195/",
                    "rating": 4.7,
                    "ratedBy": 950,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "PHP and MySQL Web Development",
                    "image": "https://www.pexels.com/photo/photo-of-laptop-near-camera-210241/",
                    "rating": 4.3,
                    "ratedBy": 650,
                    "duration": "2 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Game Development with Unity",
                    "image": "https://www.pexels.com/photo/black-and-gray-laptop-computer-on-table-373076/",
                    "rating": 4.8,
                    "ratedBy": 1250,
                    "duration": "5 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Blockchain Development with Solidity",
                    "image": "https://www.pexels.com/photo/photo-of-person-typing-on-laptop-1093716/",
                    "rating": 4.7,
                    "ratedBy": 920,
                    "duration": "4 Months",
                    "level": "Advanced"
                }
            ]
        },
        {
            "categoryName": "Top AI and Python Courses",
            "courses": [
                {
                    "title": "AI for Everyone",
                    "image": "https://www.pexels.com/photo/artificial-intelligence-technology-background-5474295/",
                    "rating": 4.8,
                    "ratedBy": 2100,
                    "duration": "2 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Python Programming for Beginners",
                    "image": "https://www.pexels.com/photo/person-typing-on-laptop-keyboard-1181467/",
                    "rating": 4.7,
                    "ratedBy": 1800,
                    "duration": "3 Months",
                    "level": "Beginner"
                },
                {
                    "title": "Machine Learning with Python",
                    "image": "https://www.pexels.com/photo/close-up-of-data-processing-5468196/",
                    "rating": 4.9,
                    "ratedBy": 2500,
                    "duration": "4 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Deep Learning with TensorFlow and Python",
                    "image": "https://www.pexels.com/photo/blue-and-white-deep-learning-illustration-3735432/",
                    "rating": 4.6,
                    "ratedBy": 1400,
                    "duration": "5 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Natural Language Processing with Python",
                    "image": "https://www.pexels.com/photo/code-on-computer-monitor-5468194/",
                    "rating": 4.7,
                    "ratedBy": 1700,
                    "duration": "4 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "AI and Python for Financial Services",
                    "image": "https://www.pexels.com/photo/person-in-white-long-sleeve-shirt-working-on-computer-1181527/",
                    "rating": 4.5,
                    "ratedBy": 1200,
                    "duration": "3 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Data Analysis with Python",
                    "image": "https://www.pexels.com/photo/photo-of-person-holding-tablet-computer-1181671/",
                    "rating": 4.8,
                    "ratedBy": 1950,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Reinforcement Learning with Python",
                    "image": "https://www.pexels.com/photo/artificial-intelligence-ai-robot-3707948/",
                    "rating": 4.6,
                    "ratedBy": 1300,
                    "duration": "4 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Python for Data Science",
                    "image": "https://www.pexels.com/photo/person-writing-on-white-paper-3771097/",
                    "rating": 4.9,
                    "ratedBy": 2200,
                    "duration": "3 Months",
                    "level": "Beginner"
                },
                {
                    "title": "AI-Powered Web Development with Python",
                    "image": "https://www.pexels.com/photo/website-development-and-coding-concept-3938009/",
                    "rating": 4.7,
                    "ratedBy": 1450,
                    "duration": "4 Months",
                    "level": "Intermediate"
                }
            ]
        },
        {
            "categoryName": "Top Courses for Software Engineers",
            "courses": [
                {
                    "title": "Advanced Algorithms and Data Structures",
                    "image": "https://www.pexels.com/photo/coding-on-a-laptop-574071/",
                    "rating": 4.8,
                    "ratedBy": 2100,
                    "duration": "3 Months",
                    "level": "Advanced"
                },
                {
                    "title": "System Design for Software Engineers",
                    "image": "https://www.pexels.com/photo/person-coding-on-a-laptop-577585/",
                    "rating": 4.7,
                    "ratedBy": 1800,
                    "duration": "4 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "DevOps Essentials",
                    "image": "https://www.pexels.com/photo/person-writing-on-blackboard-1181710/",
                    "rating": 4.9,
                    "ratedBy": 2500,
                    "duration": "2 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Microservices Architecture",
                    "image": "https://www.pexels.com/photo/abstract-blur-bokeh-316748/",
                    "rating": 4.6,
                    "ratedBy": 1400,
                    "duration": "3 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Cloud Computing with AWS",
                    "image": "https://www.pexels.com/photo/clouds-digital-art-web-97077/",
                    "rating": 4.7,
                    "ratedBy": 1700,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Kubernetes for Software Engineers",
                    "image": "https://www.pexels.com/photo/photo-of-laptop-near-camera-210241/",
                    "rating": 4.5,
                    "ratedBy": 1200,
                    "duration": "2 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Software Testing and Quality Assurance",
                    "image": "https://www.pexels.com/photo/person-using-laptop-computer-1585325/",
                    "rating": 4.8,
                    "ratedBy": 1950,
                    "duration": "3 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Secure Coding Practices",
                    "image": "https://www.pexels.com/photo/person-working-on-laptop-computer-1181263/",
                    "rating": 4.6,
                    "ratedBy": 1300,
                    "duration": "2 Months",
                    "level": "Advanced"
                },
                {
                    "title": "Full Stack Web Development",
                    "image": "https://www.pexels.com/photo/person-using-laptop-computer-574071/",
                    "rating": 4.9,
                    "ratedBy": 2200,
                    "duration": "6 Months",
                    "level": "Intermediate"
                },
                {
                    "title": "Mobile App Development with Flutter",
                    "image": "https://www.pexels.com/photo/person-holding-smartphone-4476633/",
                    "rating": 4.7,
                    "ratedBy": 1450,
                    "duration": "4 Months",
                    "level": "Beginner"
                }
            ]
        }
    ]
  return (
    <div>
      {allCourses.map((item, index) => (
        <section key={index} className="px-14 py-10">
          <CourseSection category={item} />
        </section>
      ))}
    </div>
  )
}

export default CourseSections
