import React, { useEffect, useState } from 'react'

const ProgressBar = ({ percentage }) => {
    const radius = 35; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState(circumference);
    useEffect(() => {
        setOffset(circumference - (percentage / 100) * circumference)

    }, [percentage]);

    return (
        <div className="relative w-32 h-32">
            <svg
                className="absolute transform -rotate-90"
                width="120"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background Circle */}
                <circle
                    className="stroke-gray-300"
                    strokeWidth="4"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                />
                {/* Progress Circle */}
                <circle
                    className="stroke-[#d0f306] border transition-all duration-1000"
                    strokeWidth="4"
                    fill="transparent"
                    r={radius}
                    cx="60"
                    cy="60"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <span className="absolute top-1/3 left-1/3 text-xl font-bold text-blue-500">{percentage}%</span>
        </div>
    )
}

export default ProgressBar
