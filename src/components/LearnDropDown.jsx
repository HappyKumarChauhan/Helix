import React from 'react'
import { Link } from 'react-router-dom'

const LearnDropDown = () => {
  return (
    <div className="learn-dropdown fixed top-16 left-20 bg-white shadow-lg rounded p-4 z-50">
          <div className="relative">
            <div
              className="absolute -top-6 left-10 w-6 h-6 bg-white rotate-45 transform -translate-y-1/2"
              style={{ boxShadow: '-1px -1px 0px 0 rgba(0,0,0,0.1)' }}
            ></div>
            <div className="mt-2 px-5">
              <div className="flex justify-between">
                <ul>
                  <li className="font-bold my-4">Schools</li>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                    <li>
                      <Link className="text-blue-500 underline" to='/school'>Artificial Intelligence</Link>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
  )
}

export default LearnDropDown
