import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const MissionScene = dynamic(() => import('../components/MissionScene'), { ssr: false });

export default function MissionPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-600 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
              <p className="text-xl mb-8 leading-relaxed">
                We're on a mission to revolutionize plant care through 
                advanced technology, making it accessible to everyone 
                while promoting sustainability and a deeper connection 
                with nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/features" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  See How We Do It
                </Link>
                <Link 
                  href="/who-we-are" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <MissionScene />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Details Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Core Objectives</h2>
            <p className="text-lg text-gray-600">
              At FlorAI, we've set ambitious goals to transform the way people interact with their plants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Democratize Plant Expertise</h3>
              <p className="text-gray-700 mb-4">
                We're breaking down barriers between people and their plants by packaging expert knowledge 
                into accessible technology. Our AI-powered monitoring system brings professional-level 
                insights to everyone, regardless of their gardening experience.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Expert plant care knowledge made accessible</li>
                <li>AI-driven personalized recommendations</li>
                <li>Simple, intuitive interface for all skill levels</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Promote Resource Efficiency</h3>
              <p className="text-gray-700 mb-4">
                By precisely measuring plant needs, we help reduce water waste and optimize 
                resource usage. Our technology ensures plants get exactly what they need—no more, 
                no less—promoting sustainable gardening practices.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Reduce water waste through precision monitoring</li>
                <li>Optimize light exposure and resource usage</li>
                <li>Extend plant lifespan with preventative care</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Foster a Deeper Connection with Nature</h3>
              <p className="text-gray-700 mb-4">
                Through technology, we aim to strengthen the bond between people and their plants. 
                By understanding plant needs and seeing their responses to care, users develop a 
                deeper appreciation for the natural world.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Interactive feedback on plant care efforts</li>
                <li>Educational insights about different plant species</li>
                <li>Celebrating the joy of watching plants thrive</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Advance Plant Science Research</h3>
              <p className="text-gray-700 mb-4">
                With user permission, our platform collects anonymized data that can contribute to 
                plant science research. We're building a knowledge base that can help advance 
                understanding of plant care and adaptation.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contribute to botanical research initiatives</li>
                <li>Improve plant care recommendations over time</li>
                <li>Develop insights for sustainable agriculture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="w-full py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light italic">
            "A world where technology enhances our connection with nature, 
            where everyone can experience the joy of nurturing plants, 
            and where data-driven care leads to a greener, more sustainable planet."
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to revolutionize how you care for your plants? Learn more about our products
            and become part of our community dedicated to smarter plant care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/features" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Explore Our Features
            </Link>
            <Link 
              href="/install" 
              className="bg-white text-green-700 border border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 