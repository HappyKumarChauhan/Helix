import React from 'react'

const Business = () => {
  return (
    <div>
      {/* Main Content Section */}
<div className="bg-white py-10 px-5">
  <h2 className="text-black text-3xl font-semibold text-center mb-6">
    Learn the Most In-Demand Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">Data Science</h3>
      <p className="text-gray-700 mb-3">
        Learn to analyze data, make predictions, and improve business processes with data science techniques.
      </p>
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Learn More</button>
    </div>
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">Artificial Intelligence</h3>
      <p className="text-gray-700 mb-3">
        Understand AI principles and how to build and deploy AI systems to solve real-world problems.
      </p>
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Learn More</button>
    </div>
    <div className="bg-gray-100 p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">Cloud Computing</h3>
      <p className="text-gray-700 mb-3">
        Gain hands-on experience with cloud platforms and learn to manage scalable infrastructure.
      </p>
      <button className="bg-blue-900 text-white px-4 py-2 rounded-md font-semibold">Learn More</button>
    </div>
  </div>
</div>

{/* Call to Action Section */}
<div className="bg-blue-900 text-white py-10 text-center">
  <h2 className="text-3xl font-semibold mb-4">
    Ready to Upskill and Advance Your Career?
  </h2>
  <p className="text-lg mb-6">
    Start learning today with our flexible and affordable programs tailored to your needs.
  </p>
  <button className="bg-green-500 px-6 py-3 rounded-md text-white font-semibold">
    Get Started
  </button>
</div>
 
    </div>
  )
}

export default Business
