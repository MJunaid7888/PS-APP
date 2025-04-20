import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function ServiceFeaturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
    <Navbar/>

      {/* Service Feature Section */}
      <section className="py-20 bg-white text-center flex-grow">
        <h2 className="text-3xl font-bold mb-4">Our Service Feature</h2>
        <p className="text-gray-500 mb-10 max-w-xl mx-auto">
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
          {[
            {
              title: 'Direct Backup from NAS',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum.',
              link: '#'
            },
            {
              title: 'Sync with Everywhere',
              description: 'Suspendisse potenti. Morbi mattis, massa sit amet tincidunt laoreet.',
              link: '#',
              featured: true
            },
            {
              title: 'Restore Old Versions',
              description: 'Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla.',
              link: '#'
            },
            {
              title: 'Super Easy to Use',
              description: 'Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.',
              link: '#'
            }
          ].map(({ title, description, link, featured }, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 shadow-md transition transform hover:-translate-y-1 hover:shadow-lg ${
                featured ? 'bg-gradient-to-br from-blue-400 to-blue-600 text-white' : 'bg-white'
              }`}
            >
              <div className="mb-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${
                  featured ? 'bg-white text-blue-600' : 'bg-blue-100 text-blue-500'
                }`}>
                  <span className="text-lg font-bold">✦</span>
                </div>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${featured ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
              <p className={`text-sm mb-4 ${featured ? 'text-white' : 'text-gray-600'}`}>{description}</p>
              <a
                href={link}
                className={`text-sm font-semibold ${featured ? 'text-white underline' : 'text-blue-500 hover:underline'}`}
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Data?</h2>
        <p className="mb-6 text-lg">Sign up today and get started with a secure private server in minutes.</p>
        <a
          href="/signup"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-100 transition"
        >
          Get Started
        </a>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
