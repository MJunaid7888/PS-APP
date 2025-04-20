import React from 'react';

export default function WebPlatformPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Log in</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </nav>

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
