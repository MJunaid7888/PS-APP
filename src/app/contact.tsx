import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar */}
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
          <a href="contact.tsx" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log in</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 flex flex-col md:flex-row justify-center items-center p-6 gap-6">
        <div className="max-w-md text-white">
          <h2 className="text-lg font-bold mb-2">Ready to deploy with Netlify?</h2>
          <p className="mb-4 text-sm">
            Learn how to scale your company effortlessly with the Netlify Composable Web Platform or get a demo to see it in action.
          </p>
          <p className="mb-6 text-sm">
            Please enter your information, and we'll get back to you as soon as possible.
          </p>

          <div className="bg-white text-black rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-2">Partner Programs</h3>
            <p className="text-sm mb-2">Get access to exclusive support, resources, programs, and connections.</p>
            <a href="#" className="text-blue-600 text-sm underline">Agency partners →</a><br />
            <a href="#" className="text-blue-600 text-sm underline">Technology partners →</a>
          </div>

          <div className="bg-white text-black rounded-xl p-4">
            <h3 className="font-semibold mb-2">Looking for support?</h3>
            <p className="text-sm mb-2">Get support at all levels, and browse documentation, guides, and forums.</p>
            <a href="#" className="text-blue-600 text-sm underline">Visit our Support Center →</a>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Get in touch with Sales</h3>
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-medium">Business Email*</label>
              <input type="email" className="w-full border px-3 py-2 rounded-md" required />
            </div>
            <div>
              <label className="text-sm font-medium">Company Size*</label>
              <select className="w-full border px-3 py-2 rounded-md" required>
                <option value="">Please Select</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">How can we help?*</label>
              <textarea className="w-full border px-3 py-2 rounded-md" rows={4} required></textarea>
            </div>
            <p className="text-xs text-gray-500">
              By submitting this form, you agree to Netlify’s <a href="#" className="underline">Privacy Policy</a>, and that Netlify can send you communications about its products and services.
            </p>
            <button type="submit" className="bg-cyan-400 text-white hover:bg-cyan-500 px-4 py-2 rounded-md">Talk to Netlify</button>
          </form>
        </div>
      </div>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-4 h-4 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              <span className="text-lg font-semibold">Private Server App</span>
            </div>
            <p className="text-sm text-gray-400">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>

          {[...Array(4)].map((_, index) => (
            <div key={index}>
              <h2 className="text-sm font-semibold mb-3 uppercase">Categories</h2>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#">First Link</a></li>
                <li><a href="#">Second Link</a></li>
                <li><a href="#">Third Link</a></li>
                <li><a href="#">Fourth Link</a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 text-gray-400 text-sm py-4 px-4 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 PS APP — @M Junaid</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#"><svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 0 0-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h2z" /></svg></a>
            <a href="#"><svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></a>
            <a href="#"><svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2" /><path d="M22 12a9.94 9.94 0 0 0-.2-2H2.2a9.94 9.94 0 0 0 0 4h19.6a9.94 9.94 0 0 0 .2-2z" /></svg></a>
            <a href="#"><svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 0 8m-8 0a6 6 0 0 1 0-8m-3.22 3.78A6 6 0 0 1 6 12m12 0a6 6 0 0 1-1.78 3.78" /></svg></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
