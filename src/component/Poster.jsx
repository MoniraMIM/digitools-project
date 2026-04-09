import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegCircleDot } from "react-icons/fa6";



const Poster = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse gap-30">
    <img
     src="/assets/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <div className="badge badge-accent bg-slate-300"><FaRegCircleDot />
 New: AI-Powered Tools Available</div>
      <h1 className="text-5xl font-bold leading-15">Supercharge Your<br /> Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity<br />
software—all in one place. Start creating faster today.

Explore Products

      </p>
      <button className="badge badge-primary py-5 mr-5">Explore Products</button>
      <button className="badge badge-neutral badge-outline py-5 text-violet-600"> <FaArrowAltCircleRight />
 Watch Demo</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Poster