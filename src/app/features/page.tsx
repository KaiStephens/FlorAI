import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const FeaturesScene = dynamic(() => import('../components/FeaturesScene'), { ssr: false });

export default function FeaturesPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-600 to-green-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Features</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Discover how FlorAI's innovative features combine AI technology 
                with precise sensors to revolutionize the way you care for your plants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/how-it-works" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  How It Works
                </Link>
                <Link 
                  href="/install" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <FeaturesScene />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Key Features</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of features works together to provide an unparalleled plant care experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {/* Feature 1 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Real-time Monitoring</h3>
                <p className="text-gray-700 mb-4">
                  Our advanced sensors continuously monitor key plant health indicators including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Soil moisture levels with precision accuracy</li>
                  <li>Light exposure and quality measurements</li>
                  <li>Temperature and humidity conditions</li>
                  <li>Soil pH and nutrient levels</li>
                </ul>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">AI-Powered Recommendations</h3>
                <p className="text-gray-700 mb-4">
                  Our machine learning algorithms analyze plant data to deliver personalized care guidance:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Customized watering schedules based on plant species and conditions</li>
                  <li>Light optimization suggestions for optimal growth</li>
                  <li>Early detection of potential health issues</li>
                  <li>Seasonal care adjustments based on environmental changes</li>
                </ul>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Smart Care Scheduling</h3>
                <p className="text-gray-700 mb-4">
                  Never forget to care for your plants with our intuitive scheduling system:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Automated reminders for watering, fertilizing, and repotting</li>
                  <li>Intelligent scheduling that adapts to changing plant needs</li>
                  <li>Progress tracking of plant growth and health over time</li>
                  <li>Synchronization with your calendar and smart home devices</li>
                </ul>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Comprehensive Plant Database</h3>
                <p className="text-gray-700 mb-4">
                  Access detailed information on thousands of plant species:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Detailed care instructions specific to each plant variety</li>
                  <li>Visual identification to help diagnose common issues</li>
                  <li>Growth expectations and seasonal variations</li>
                  <li>Compatibility suggestions for companion planting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Advanced Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Mobile Application</h3>
              <p className="text-gray-700">
                Access your plant data anywhere with our intuitive mobile app. 
                Receive notifications, view detailed analytics, and control smart 
                integrations remotely.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Smart Home Integration</h3>
              <p className="text-gray-700">
                Connect with popular smart home systems to automate plant care. 
                Control grow lights, humidifiers, and irrigation systems based on 
                real-time data.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Data Analytics</h3>
              <p className="text-gray-700">
                Gain valuable insights from comprehensive data analytics. 
                Track trends over time, compare plant performance, and 
                continuously improve your plant care practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specs */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Hardware Specifications</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our cutting-edge hardware combines reliability with precision to deliver 
                accurate plant monitoring in a sleek, energy-efficient package.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Battery Life:</span> Up to 6 months on a single charge</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Connectivity:</span> WiFi and Bluetooth 5.0 for seamless connection</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Sensors:</span> High-precision moisture, light, temperature, and pH sensors</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-green-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Water Resistance:</span> IP67 rated for durability in humid environments</p>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 bg-green-50 p-8 rounded-2xl">
              <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-xl bg-green-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-4 rounded-lg text-center shadow-lg">
                    <h3 className="text-lg font-semibold text-green-700 mb-1">FlorAI Sensor</h3>
                    <p className="text-gray-600">Product visualization coming soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Plant Care?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of plant enthusiasts who have revolutionized their gardening experience with FlorAI's innovative features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/install" 
              className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/how-it-works" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 