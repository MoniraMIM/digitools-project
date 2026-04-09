import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const NextCard = () => {
  return (
    
    <div className="mb-10">
        <h2 className="font-bold text-3xl text-center mb-10">Simple, Transparent Pricing</h2>
    <p className="text-center mb-5">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7">
            <div className="border-2 border-r-black rounded-3xl p-10 text-center">
   <h2 className="font-bold text-2xl">Starter</h2>
   <p>Perfect for getting started</p>
   <p className="m-10">$0/Month</p>
   <ul>
<li>
Access to 10 free tools</li>
<li>
Basic templates</li>
<li>
Community support</li>
<li>
1 project per month</li>
   </ul>
   <button className="btn btn-block bg-blue-500 m-5">Get Started Free</button>
        </div>
        
<div className="border-2 border-r-black p-10 rounded-3xl bg-blue-600 text-white text-center">
   <h2 className="font-bold text-2xl">PRO</h2>
   <p>Best for professionals</p>
   <p className="m-10">$29/Month</p>
   <ul className="space-y-2 mt-4 text-center">
<li>Access to all premium tools
</li>
<li>Unlimited templates
</li>
<li>Priority support
</li>
<li>Unlimited projects
</li>
<li>Cloud sync</li>
<li>Advanced analytics</li>
   </ul>
   <button className="btn btn-block m-5">Start Pro Trial</button>
        </div>
<div className="border-2 border-black p-10 rounded-3xl text-center ">
<h2 className="font-bold text-2xl">Enterprise</h2>
   <p>For teams and businesses</p>
   <p className="m-10">$99/Month</p>
   <ul>
<li>Everything in Pro
</li>
<li>Team collaboration
</li>
<li>Custom integrations
</li>
<li>Dedicated support
</li>
<li>SLA guarantee</li>
<li>Custom branding</li>
   </ul>
   <button className="btn btn-block m-5 bg-blue-500">Contact Sales</button>
        </div>
        </div>
    </div>
    
  )
}

export default NextCard

