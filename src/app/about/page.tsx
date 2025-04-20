import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaUsers, FaGlobeAmericas } from 'react-icons/fa';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function AboutNetlify() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Navbar />

      <div className="px-6 md:px-20 py-16 space-y-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Netlify</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2">
            <div className="rounded-full overflow-hidden w-full aspect-square shadow-xl">
              <Image
                src="/netlify-team.jpg"
                alt="Netlify team"
                width={500}
                height={500}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">We want the web to win</h2>
            <p>
              Netlify is the platform developers love for building highly-performant and dynamic websites, e-commerce stores and web applications.
            </p>
            <p>
              By uniting an extensive ecosystem of technologies, services and APIs into one workflow, Netlify unlocks new levels of team productivity, while saving time and money.
            </p>
            <p>
              Our bet on <a href="#" className="text-blue-600 underline">Jamstack</a> is quickly coming true. The web is rapidly changing away from monolithic to decoupled apps, and web developers are storming ahead with more power than ever. Netlify is built to cater to that movement, and in just a few years we’ve on-boarded millions of developers and businesses, and are building and serving millions of web projects daily around the globe.
            </p>
            <p>
              Fun fact: An estimated 16% of the internet population visits a website or web app on Netlify each month.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-semibold">A company is as good as its team</h2>
              <p>
                At Netlify, we have a distributed culture rather than just being "remote-friendly." Simply put, we strive to be a workplace where you can work from home and have an equal opportunity to influence decisions and culture across the organization. We tackle complex problems, in a remote-first environment while caring deeply about what we do and having fun.
              </p>
            </div>
            <div className="md:w-1/3 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/netlify-video-call.jpg"
                alt="Netlify video call"
                width={400}
                height={300}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <FaUsers className="text-gray-600" />
                <span>Culture</span>
              </div>
              <p>
                If a company is as good as the team of people who work there, then a team is as good as its culture. We aim to be as intentional as we can in how we scale both our organization and culture.
              </p>
              <a href="#" className="font-semibold underline hover:text-blue-600">Read all about our philosophy and values →</a>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-semibold">
                <FaGlobeAmericas className="text-gray-600" />
                <span>Distribution</span>
              </div>
              <p>
                Netlify is a distributed company. We work remotely and bring team members together on occasion around the world and in our home base in San Francisco. We’ve structured Netlify to support this and we pride ourselves on having a distributed culture.
              </p>
              <a href="#" className="font-semibold underline hover:text-blue-600">Read more about the things we do to support it →</a>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 rounded-[50%] overflow-hidden shadow-xl">
            <Image
              src="/netlify-careers.jpg"
              alt="Netlify careers meeting"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Careers</h2>
            <p>
              We're a tightly knit team of driven, mission-focused people. We’re growing rapidly while still nurturing our culture by carefully adding passionate and empathetic people.
            </p>
            <p>
              We have lots of open positions. That said, we hire people, not roles. Together we will carve out the right fit that gives you maximum joy and sets you up for success, while making sure it’s what we need to keep taking strides in creating a better web. For all of us.
            </p>
            <p>Can you find yourself in the above? Join us.</p>
            <a href="#" className="inline-block bg-teal-400 text-white font-semibold py-2 px-4 rounded hover:bg-teal-500 transition">Check open positions</a>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
