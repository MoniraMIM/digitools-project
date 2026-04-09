import React from 'react'

const Stats = () => {
  return (
    <div className="flex justify-center items-center  bg-blue-700 h-54 mb-20">
        <div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        
      </svg>
    </div>
    
        <div className="stat-title font-bold text-6xl text-white">50K+</div>
    <div className=" text-white">Active Users</div>
    
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        
      </svg>
    </div>
    <div className="stat-title text-6xl text-white">200+</div>
    <div className=" text-white">Premium Tools</div>
    
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary"> 
      <div className="avatar avatar-online">
        <div className="w-16 rounded-full">
          
        </div>
      </div>
    </div>
    <div className="stat-value font-bold text-6xl text-white">4.9</div>
    <div className="stat-title text-white text-xl">Rating</div>
    
  </div>

    </div>
    </div>
  )
}

export default Stats