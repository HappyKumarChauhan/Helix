import React from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'

const CourseCard = () => {
  return (
    <div>
      <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md overflow-hidden w-44 cursor-pointer">
        <div className="relative h-24">
          <img
            src="https://video.udacity-data.com/topher/2024/October/6709874d_nd030/nd030.jpg"
            alt="Data Product Manager"
            className="absolute inset-0 w-full object-cover p-2 rounded-xl"
          />
        </div>

        <div className="p-3">
          <h2 className="font-semibold h-14">Card Title</h2>
          <div className="flex items-center mt-2 space-x-2">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3.3 1.4-6L0 7l6-.6L10 1l3.6 5.4 6 .6-4.9 5.3 1.4 6L10 15z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3.3 1.4-6L0 7l6-.6L10 1l3.6 5.4 6 .6-4.9 5.3 1.4 6L10 15z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3.3 1.4-6L0 7l6-.6L10 1l3.6 5.4 6 .6-4.9 5.3 1.4 6L10 15z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3.3 1.4-6L0 7l6-.6L10 1l3.6 5.4 6 .6-4.9 5.3 1.4 6L10 15z"></path>
              </svg>
              <svg
                className="w-4 h-4 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.5 3.3 1.4-6L0 7l6-.6L10 1l3.6 5.4 6 .6-4.9 5.3 1.4 6L10 15z"></path>
              </svg>
            </div>
            <p className="text-sm text-gray-500">(195)</p>
          </div>

          <div className="items-center justify-between mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <ScheduleIcon style={{ fontSize: '0.8rem' }} />
              <p>2 months</p>
            </div>
            <div className="flex items-center space-x-1">
              <SignalCellularAltIcon style={{ fontSize: '0.8rem' }} />
              <p>Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
