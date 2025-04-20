
import React from 'react'

const Navbar = ()=>{

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white text-black">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-[#00C7B7]">Private Server App</span>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-[#00C7B7]">Platform</a>
            <a href="#" className="hover:text-[#00C7B7]">Features</a>
            <a href="#" className="hover:text-[#00C7B7]">Pricing</a>
            <a href="/About" className="hover:text-[#00C7B7]">About Us</a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log in</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </nav>
    )
}

export default Navbar;