import React from 'react'
import { FaDotCircle } from "react-icons/fa";

const Transform = () => {
  return (
    <div className="bg-violet-700 mx-auto justify-center text-center p-14 space-y-5">
        <div>
            <h2 className="text-3xl text-white font-bold mb-3">Ready to Transform Your Workflow?</h2>
            <p className="text-white">Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
        </div>
        <div>
            <div className="">
                <button className="btn btn-primary mr-5 bg-white text-violet-500 rounded-full">Explore Products</button>
            <button className="btn btn-dash btn-primary bg-transparent text-white border-amber-50 rounded-full">View Pricing</button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-5">
                <span className="text-white">14 Day Free Trial</span>
                <FaDotCircle className="text-xs text-white"/>
            <span className="text-white">No Credit Card Required</span><FaDotCircle className="text-xs text-white" />
            <span className="text-white"> Cancel Anytime</span>
            </div>
            
        </div>
    </div>
  )
}

export default Transform
