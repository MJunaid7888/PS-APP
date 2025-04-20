import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function WebPlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar/>


      {/* Web Stack Management Section */}
      <section className="bg-[#1E1EF0] text-white py-20 text-center flex-grow">
        <div className="max-w-4xl mx-auto px-4">
          <img src="/logo.svg" alt="logo" className="mx-auto mb-4 w-6" />
          <h1 className="text-4xl font-extrabold mb-4 tracking-tight">A single platform to manage any web stack</h1>
          <p className="text-base md:text-lg mb-10 text-gray-200">
            Built for Architects, Developers, and Marketers, the Netlify Composable Web Platform is supported by the world-class Netlify Partner Ecosystem, Enterprise services, and Enterprise-grade security.
          </p>

          <div className="bg-[#2A2AF5] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[ 
              {
                title: 'Connect',
                subtitle: 'DATA SOURCE LAYER',
                bullets: ['APIs', 'Abstraction layer', 'Future-proof'],
                button: 'Learn more',
                border: 'border-t-4 border-[#FFB63E]'
              },
              {
                title: 'Core',
                subtitle: 'FRONTEND CLOUD LAYER',
                bullets: ['Build', 'Deploy', 'Run'],
                button: 'Learn more',
                border: 'border-t-4 border-[#00F383]'
              },
              {
                title: 'Create',
                subtitle: 'VISUAL EDITOR LAYER',
                bullets: ['Personalization', 'Visual editing', 'Risk-free updates'],
                button: 'Learn more',
                border: 'border-t-4 border-[#FFCE4E]'
              }
            ].map((item, idx) => (
              <div key={idx} className={`bg-white text-black rounded-lg p-6 shadow-md ${item.border}`}>
                <h4 className="text-xs text-gray-500 mb-1 uppercase tracking-wide">{item.subtitle}</h4>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                  {item.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <button className="text-blue-700 font-semibold underline text-sm">{item.button}</button>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6 text-sm mt-10">
            <span className="bg-[#2F2FFF] text-white px-4 py-1 rounded-full">Scalability</span>
            <span className="bg-[#2F2FFF] text-white px-4 py-1 rounded-full">Security</span>
            <span className="bg-[#2F2FFF] text-white px-4 py-1 rounded-full">Services</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
