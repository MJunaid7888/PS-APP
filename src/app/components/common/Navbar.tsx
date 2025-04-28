'use client'; // 👈 Add this at the very top

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Optional: icons for open/close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black relative">
      {/* Left - Logo */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-[#00C7B7]">Private Server App</span>
      </div>

      {/* Center - Desktop Links */}
      <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
        <a href="/platform" className="hover:text-[#00C7B7]">Platform</a>
        <a href="/features" className="hover:text-[#00C7B7]">Features</a>
        <a href="/pricing" className="hover:text-[#00C7B7]">Pricing</a>
        <a href="/about" className="hover:text-[#00C7B7]">About Us</a>
      </div>

      {/* Right - Actions */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex space-x-4">
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log in</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign up</button>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <a href="/platform" className="hover:text-[#00C7B7]">Platform</a>
          <a href="/features" className="hover:text-[#00C7B7]">Features</a>
          <a href="/pricing" className="hover:text-[#00C7B7]">Pricing</a>
          <a href="/about" className="hover:text-[#00C7B7]">About Us</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log in</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
