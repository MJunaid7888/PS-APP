import React from 'react';

export default function ServiceFeaturePage() {
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
