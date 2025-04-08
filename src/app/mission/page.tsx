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
                At FlorAI, we believe everyone deserves to experience the joy of successful gardening. Our mission is to take the uncertainty and frustration out of plant care by creating technology that makes gardening accessible to everyone.
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
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why We Created FlorAI</h2>
            <p className="text-lg text-gray-600">
              Too many plants end up withered because their caretakers didn't know exactly what they needed. We're changing that with affordable, effective monitoring technology that gives your plants a voice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Removing Uncertainty</h3>
              <p className="text-gray-700 mb-4">
                Many people feel intimidated by plant care because they don't know exactly what their plants need to thrive. FlorAI removes this uncertainty by providing clear, data-driven guidance.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Real-time monitoring of plant conditions</li>
                <li>Clear recommendations based on actual data</li>
                <li>Personalized care instructions for your specific plants</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Making Plant Care Accessible</h3>
              <p className="text-gray-700 mb-4">
                We believe everyone should be able to enjoy the benefits of living with plants, regardless of their previous gardening experience or how busy their lifestyle is.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Technology designed for beginners and experts alike</li>
                <li>Low-maintenance solutions for busy people</li>
                <li>Affordable hardware and intuitive software</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Turning Plant Killers into Plant Nurturers</h3>
              <p className="text-gray-700 mb-4">
                We're committed to developing consumer-friendly products that make plant care straightforward and rewarding, turning plant killers into plant nurturers one sensor at a time.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Building confidence through successful plant care</li>
                <li>Creating a rewarding experience with visible results</li>
                <li>Transforming frustration into gardening enjoyment</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Giving Plants a Voice</h3>
              <p className="text-gray-700 mb-4">
                Our monitoring technology essentially gives your plants a voice, letting them tell you exactly what they need to thrive, removing the guesswork from plant care.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Clear indicators of plant needs</li>
                <li>Early warnings for potential problems</li>
                <li>Data-driven insights for optimal care</li>
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
            "A world where everyone can experience the joy of successful gardening, where plant care is straightforward and rewarding, and where technology helps create a deeper connection with nature."
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your relationship with your plants? Discover how FlorAI can help you become a successful plant parent with our simple, effective technology.
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