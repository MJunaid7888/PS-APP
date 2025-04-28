import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Navbar */}
      <Navbar/>

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 flex flex-col md:flex-row justify-center items-center p-6 gap-6">
        <div className="max-w-md text-white">
          <h2 className="text-lg font-bold mb-2">Ready to deploy with Private Server App?</h2>
          <p className="mb-4 text-sm">
            Learn how to scale your company effortlessly with the Private Server App Composable Web Platform or get a demo to see it in action.
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
              By submitting this form, you agree to Private Server App’s <a href="#" className="underline">Privacy Policy</a>, and that Private Server App can send you communications about its products and services.
            </p>
            <button type="submit" className="bg-cyan-400 text-white hover:bg-cyan-500 px-4 py-2 rounded-md">Talk to Private Server App</button>
          </form>
        </div>
      </div>

    <Footer/>
    </div>
  );
}
