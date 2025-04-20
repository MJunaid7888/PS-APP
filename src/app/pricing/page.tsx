import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

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
      <Navbar />

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
      <Footer />
    </div>
  );
}
