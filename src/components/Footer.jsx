import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-screen bg-indigo-950 p-20 flex flex-col justify-center items-center gap-4">
        <p className='text-white text-md'>Get Started Today</p>
        <h1 className='text-white text-3xl'>Prove Your Potential</h1>
        <button className='bg-[#20eec1] py-3 px-10 hover:bg-[#24927a] hover:text-white rounded-sm my-2 text-black font-semibold'>Start For Free</button>
      </div>
      <div className="w-full mx-auto p-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" aria-label="Link to home page">
              <h1 className='text-3xl font-bold'>HELIX</h1>
            </Link>
          </div>
        <div className="flex flex-wrap justify-center">
          {/* Navigation Links Section */}
          <div className="flex w-full justify-between gap-4 mt-10 flex-wrap">
            <div>
              <h2 className="font-semibold text-2xl text-gray-800">Company</h2>
              <nav className="mt-4">
                <Link to="/about-us" className="block text-lg text-black py-2 hover:underline">About Us</Link>
                <Link to="/why-helix" className="block text-lg text-black py-2 hover:underline">Why HELIX?</Link>
                <Link to="/blog" className="block text-lg text-black py-2 hover:underline">Blog</Link>
                <Link to="/news" className="block text-lg text-black py-2 hover:underline">In the News</Link>
                <Link to="/jobs" className="block text-lg text-black py-2 hover:underline">Jobs at HELIX</Link>
                <Link to="/become-a-mentor" className="block text-lg text-black py-2 hover:underline">Become a Mentor</Link>
                <Link to="/partnerships" className="block text-lg text-black py-2 hover:underline">Partner with HELIX</Link>
              </nav>
            </div>
            <div>
              <h2 className="font-semibold text-2xl text-gray-800">Company</h2>
              <nav className="mt-4">
                <Link to="/about-us" className="block text-lg text-black py-2 hover:underline">About Us</Link>
                <Link to="/why-helix" className="block text-lg text-black py-2 hover:underline">Why HELIX?</Link>
                <Link to="/blog" className="block text-lg text-black py-2 hover:underline">Blog</Link>
                <Link to="/news" className="block text-lg text-black py-2 hover:underline">In the News</Link>
                <Link to="/jobs" className="block text-lg text-black py-2 hover:underline">Jobs at HELIX</Link>
                <Link to="/become-a-mentor" className="block text-lg text-black py-2 hover:underline">Become a Mentor</Link>
                <Link to="/partnerships" className="block text-lg text-black py-2 hover:underline">Partner with HELIX</Link>
              </nav>
            </div>
            <div>
              <h2 className="font-semibold text-2xl text-gray-800">Company</h2>
              <nav className="mt-4">
                <Link to="/about-us" className="block text-lg text-black py-2 hover:underline">About Us</Link>
                <Link to="/why-helix" className="block text-lg text-black py-2 hover:underline">Why HELIX?</Link>
                <Link to="/blog" className="block text-lg text-black py-2 hover:underline">Blog</Link>
                <Link to="/news" className="block text-lg text-black py-2 hover:underline">In the News</Link>
                <Link to="/jobs" className="block text-lg text-black py-2 hover:underline">Jobs at HELIX</Link>
                <Link to="/become-a-mentor" className="block text-lg text-black py-2 hover:underline">Become a Mentor</Link>
                <Link to="/partnerships" className="block text-lg text-black py-2 hover:underline">Partner with HELIX</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-6 text-center">
          <form>
            <label htmlFor="email" className="block text-sm text-gray-600">Submit your email to stay updated on the latest in technology</label>
            <div className="mt-2 flex justify-center items-center">
              <input
                type="email"
                id="email"
                className="w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your Email"
                required
              />
              <button
                type="submit"
                className="ml-4 py-2 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
