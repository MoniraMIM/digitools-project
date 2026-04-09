import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-[#0B1D36] text-gray-300 pt-16 pb-8">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-6">

        {/* Logo Section */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-4">DigiTools</h2>
          <p className="text-sm leading-relaxed">
            Premium digital tools for creators,<br/>
            professionals, and businesses.<br/> Work smarter
            with our suite of powerful tools.
          </p>
        </div>

        {/* Product */}
        <div>
          <h2 className= "text-white font-semibold mb-4">Product</h2>
          <ul className="space-y-2 text-sm">
            <li></li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-white font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>

          {/* Social */}
          <div className="mt-6">
            <h2 className="text-white font-semibold mb-3">Social Links</h2>
            <div className="flex gap-3 text-xl">
              <FaInstagram />
              <CiFacebook />
              <FaXTwitter />
            </div>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm mt-6 px-6">
        <p>© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>

    </footer>
  );
};


export default Footer