import React, { useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import LearnDropDown from './LearnDropDown'

function Navbar() {
  const location=useLocation();
  const [isLearnDropdownOpen, setisLearnDropdownOpen] = useState(false)
  useEffect(() => {
    setisLearnDropdownOpen(false)
  }, [location])
  
  
  return (
    <>
      <nav className="bg-[#f3ecec] shadow-md sticky top-0 w-full z-40">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gray-800 mr-5">HELIX</h1>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-9 items-center">
              <button
                onClick={() => {
                  setisLearnDropdownOpen(!isLearnDropdownOpen)
                }}
                className="text-black font-semibold"
              >
                Learn{' '}
                <span className="text-sm">
                  {isLearnDropdownOpen ? '▲' : '▼'}
                </span>
              </button>
              <Link to="/catalog" className="text-black font-semibold">
                Catalog
              </Link>
              <Link to="/business" className="text-black font-semibold">
                Business <span className="text-sm">▼</span>
              </Link>
              <Link to="/government" className="text-black font-semibold">
                Government
              </Link>
              <Link to="/outcomes" className="text-black font-semibold">
                Outcomes
              </Link>
            </div>
          </div>

          {/* Search and Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-black font-semibold">
              <SearchIcon />
            </button>
            <Link
              to="/login"
              className="text-blue-600 border border-blue-600 rounded px-4 py-2 hover:bg-blue-600 hover:text-white"
            >
              Log In
            </Link>
            <Link
              to="/join"
              className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
            >
              Join for Free
            </Link>
          </div>
        </div>
      </nav>
      
      {isLearnDropdownOpen && (
        <LearnDropDown/>
      )}
    </>
  )
}

export default Navbar
