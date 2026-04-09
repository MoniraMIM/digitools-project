import React from 'react'
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";

const PassCard = () => {
  return (
    <div className="bg-gray-100 py-16 mt-5">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Get Started in 3 Steps</h2>
        <p className="text-gray-600">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">01</div>

          <div className="flex justify-center mb-4">
            <img className="w-16 h-16" src="/assets/user.png" />
          </div>

          <h2 className="font-bold text-xl">Create Account</h2>
          <p className="text-gray-600 mt-2">
            Sign up for free in seconds. No credit card required.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">02</div>

          <div className="flex justify-center mb-4">
            <img className="w-16 h-16" src="/assets/package.png" />
          </div>

          <h2 className="font-bold text-xl">Choose Products</h2>
          <p className="text-gray-600 mt-2">
            Browse our catalog and select tools that fit your needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-8 text-center relative">
          <div className="absolute top-3 right-3 bg-purple-600 text-white text-xs px-2 py-1 rounded">03</div>

          <div className="flex justify-center mb-4">
            <img className="w-16 h-16" src="/assets/rocket.png" />
          </div>

          <h2 className="font-bold text-xl">Start Creating</h2>
          <p className="text-gray-600 mt-2">
            Download and start using your tools immediately.
          </p>
        </div>

      </div>
    </div>
  )
}




export default PassCard