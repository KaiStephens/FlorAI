import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const NameScene = dynamic(() => import('../components/NameScene'), { ssr: false });

export default function NamePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-500 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">FlorAI</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Your Intelligent Plant Companion</h2>
              <p className="text-lg mb-8">
                Advanced AI technology to monitor and nurture your plants with precision. 
                Smart sensors, real-time data, personalized recommendations, 
                and a gorgeous interface to make plant care effortless.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/mission" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  Our Mission
                </Link>
                <Link 
                  href="/features" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Explore Features
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <NameScene />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What FlorAI Stands For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-700">Pioneering AI technology that reimagines how we care for plants and interact with nature.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Sustainability</h3>
              <p className="text-gray-700">Creating technology that promotes plant health, reduces resource waste, and fosters a greener world.</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Accessibility</h3>
              <p className="text-gray-700">Making plant care knowledge and expertise available to everyone, regardless of experience level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="w-full py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Brand Identity</h2>
              <p className="text-lg text-gray-700 mb-6">
                The name "FlorAI" combines "Flora" - the plant world - with "AI" - artificial intelligence. 
                It represents our mission to bridge technology with nature for a greener future.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our vibrant green color palette symbolizes growth, renewal, and the natural world, 
                while our modern design reflects our innovative approach to plant care.
              </p>
              <Link 
                href="/mission" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn About Our Mission
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md">
                <div className="flex items-center mb-8">
                  <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">F</div>
                  <h3 className="text-4xl font-bold text-green-700">FlorAI</h3>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-green-600"></div>
                  <div className="h-10 w-10 rounded-full bg-green-500"></div>
                  <div className="h-10 w-10 rounded-full bg-green-400"></div>
                  <div className="h-10 w-10 rounded-full bg-green-300"></div>
                  <div className="h-10 w-10 rounded-full bg-green-200"></div>
                </div>
                <p className="italic text-gray-600">
                  "Technology nurturing nature, for a better tomorrow."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 