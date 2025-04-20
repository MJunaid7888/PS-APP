import React from 'react';

export default function PricingPage() {
  const plans = [
    {
      name: 'STANDART',
      price: '25$',
      features: [true, true, true, false, false],
      colorFrom: 'from-red-400',
      colorTo: 'to-pink-500',
    },
    {
      name: 'BUSINESS',
      price: '50$',
      features: [true, true, true, true, false],
      colorFrom: 'from-green-400',
      colorTo: 'to-blue-500',
    },
    {
      name: 'PLATINUM',
      price: '99$',
      features: [true, true, true, true, true],
      colorFrom: 'from-purple-500',
      colorTo: 'to-blue-400',
    },
  ];

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

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-100 flex-grow">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-gradient-to-b ${plan.colorFrom} ${plan.colorTo} p-1 shadow-lg`}
              >
                <div className="bg-white rounded-3xl p-6 flex flex-col justify-between h-full">
                  <h3 className="text-center text-xl font-bold text-gray-900 mb-6">{plan.name}</h3>
                  <div className="flex justify-center items-center flex-col mb-4">
                    <div className="bg-black text-white rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm tracking-widest mt-1">MONTH</span>
                    </div>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {plan.features.map((included, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm">
                        <span className="text-black">• Lorem ipsum dolor sit amet.</span>
                        <span className={`text-xl ${included ? 'text-green-500' : 'text-red-500'}`}>
                          {included ? '✔️' : '❌'}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200">
                    BUY NOW
                  </button>
                </div>
              </div>
            ))}
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
