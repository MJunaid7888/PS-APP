import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

const frameworks = [
  {
    name: "Astro",
    imgSrc: "https://astro.build/assets/brand/logo.svg",
  },
  {
    name: "TanStack",
    imgSrc: "https://tanstack.com/logo.svg",
  },
  {
    name: "Next.JS",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  {
    name: "Remix",
    imgSrc: "https://remix.run/images/logo-light.svg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0d17] text-white">
      <Head>
        <title>Private Server App</title>
      </Head>

      
<Navbar/>

      
      <section className="flex flex-col items-center justify-center text-center px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Push your ideas <br /> to the web</h1>
        <p className="text-lg max-w-2xl mb-8 text-gray-300">
          Deploy any modern frontend stack, from marketing sites to AI apps. <br />
          Join millions of developers and teams shipping faster on Netlify.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button className="bg-[#00C7B7] hover:bg-[#00b2a6] text-black font-semibold px-6 py-3 rounded">Get started</button>
          <button className="underline text-white hover:text-[#00C7B7]">Request a demo</button>
        </div>
      </section>

      <section className="px-4 py-16 flex justify-center bg-[#0b0d17]">
        <div className="max-w-5xl w-full rounded-xl overflow-hidden border border-[#00C7B7] shadow-xl">
          <Image 
            src="/dashboard-preview.png" 
            alt="Dashboard Preview" 
            width={1200} 
            height={500} 
            className="rounded-xl"
          />
        </div>
      </section>

    
      <main className="flex flex-col items-center px-4 py-20 space-y-10 bg-[#0b0d17]">
        <div className="flex flex-wrap justify-center items-center gap-10">
          {['contentful', 'unilever', 'stackoverflow', 'riotgames', 'nike', 'kubernetes'].map((logo) => (
            <img key={logo} src={`/logos/${logo}.svg`} alt={logo} className="h-8" />
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center">One platform. All your sites, stores, & apps.</h1>
        <p className="text-center max-w-2xl text-gray-400 text-lg">
          A developer experience that just works—optimized builds, collaborative previews, and instant rollbacks on a global edge network.
        </p>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {[
            {
              title: "Experiment faster",
              subtitle: "Build & integrate",
              text: "Build any frontend app with your favorite stack and more flexible serverless infrastructure than anywhere else.",
              color: "#00C7B7"
            },
            {
              title: "Iterate together",
              subtitle: "Deploy & collaborate",
              text: "Turn every Git push into a production-ready release. Instant deploy previews and config-free sync.",
              color: "#3B82F6"
            },
            {
              title: "Scale automatically",
              subtitle: "Run & scale",
              text: "Deliver sub-second experiences globally with cache and routing controls. Secure and scalable.",
              color: "#FACC15"
            }
          ].map(({ title, subtitle, text, color }) => (
            <div key={title} className="bg-white text-black rounded-xl p-6 shadow-md">
              <span className="text-sm font-semibold" style={{ color }}>{subtitle}</span>
              <h3 className="text-xl font-bold mt-2">{title}</h3>
              <p className="mt-2 text-sm">{text}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
          Explore the platform
        </button>
      </main>

    
      <section className="bg-[#0b0d17] text-center py-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div><h2 className="text-3xl font-bold">35M+</h2><p className="text-sm">Websites deployed</p></div>
          <div><h2 className="text-3xl font-bold">5M+</h2><p className="text-sm">Developers</p></div>
          <div><h2 className="text-3xl font-bold">99.99%</h2><p className="text-sm">Uptime SLA</p></div>
        </div>
      </section>

     
      <section className="bg-[#0b0d17] py-16 text-center">
        <h3 className="text-sm font-semibold text-[#00C7B7] uppercase mb-2">Get Started</h3>
        <h2 className="text-3xl font-bold mb-10">
          Here’s <span className="text-white">freedom</span> to <span className="text-white">framework</span> how you want to
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {frameworks.map(({ name, imgSrc }) => (
            <div key={name} className="bg-white text-black rounded-2xl shadow p-6 flex flex-col items-center hover:scale-105 transition-transform">
              <img src={imgSrc} alt={name} className="h-16 mb-4" />
              <p className="text-xs uppercase text-gray-500 mb-1">Deploy with</p>
              <h3 className="text-xl font-semibold">{name}</h3>
            </div>
          ))}
        </div>
      </section>

      
   <Footer/>
    </div>
  );
}
