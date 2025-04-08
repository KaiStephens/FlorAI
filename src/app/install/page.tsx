import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const InstallScene = dynamic(() => import('../components/InstallScene'), { ssr: false });

export default function InstallPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-700 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Started with FlorAI</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Setting up your FlorAI system is quick and easy. 
                Follow our simple installation process and start monitoring 
                your plants in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#purchase" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors text-center"
                >
                  Purchase Now
                </Link>
                <Link 
                  href="/how-it-works" 
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  How It Works
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <InstallScene />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Easy 5-Step Installation</h2>
            <p className="text-lg text-gray-600">
              Get up and running with FlorAI in minutes with our straightforward setup process.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">1</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Unbox Your FlorAI Device</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Your FlorAI package contains everything you need to get started:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>FlorAI Hub - The central processing unit</li>
                  <li>Plant sensors (quantity based on your purchase)</li>
                  <li>USB-C charging cable</li>
                  <li>Quick start guide</li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8 flex justify-center">
                <div className="max-w-sm">
                  <div className="aspect-w-16 aspect-h-9 bg-green-100 rounded-lg flex items-center justify-center">
                    <div className="text-green-700 text-center p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                      </svg>
                      <p>Unboxing video coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">2</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Download the FlorAI App</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Install our free app to control and monitor your FlorAI system:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Available for iOS and Android devices</li>
                  <li>Creates your personal plant care dashboard</li>
                  <li>Enables real-time monitoring and notifications</li>
                  <li>Provides access to our plant database</li>
                </ul>
                <div className="flex space-x-4 mt-6">
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    App Store
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3l9 12h-6l-3-4m3 4H3" />
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8 flex justify-center">
                <div className="max-w-[240px]">
                  <div className="aspect-w-9 aspect-h-16 bg-green-100 rounded-3xl overflow-hidden border-4 border-green-700 shadow-xl">
                    <div className="flex items-center justify-center bg-green-800 p-6">
                      <div className="text-white text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">FlorAI App UI</p>
                        <p className="text-xs mt-1">Screenshot coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">3</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Sync Your FlorAI Hub</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Connect your FlorAI Hub to your home network and mobile app:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Plug in your FlorAI Hub to power it on</li>
                  <li>Open the FlorAI app and select "Add Device"</li>
                  <li>Follow the in-app instructions to connect to your WiFi</li>
                  <li>The Hub will automatically update with the latest firmware</li>
                </ol>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8 flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">WiFi Connection</h4>
                      <p className="text-sm text-gray-600">FlorAI Hub connecting...</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Syncing with cloud</span>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">4</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Insert Sensors Into Plant Soil</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Properly place the sensors to get accurate readings:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Insert the sensor probe into the soil near the plant roots</li>
                  <li>Make sure the top portion remains above the soil</li>
                  <li>Ensure the sensor is within 30 feet of the Hub</li>
                  <li>Add plants in the app and assign sensors to them</li>
                </ul>
                <p className="text-gray-600 mt-4 text-sm italic">
                  Tip: For best results, place the sensor at least 2 inches deep in the soil.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8 flex justify-center">
                <div className="relative w-full max-w-sm">
                  <div className="aspect-w-4 aspect-h-3 bg-green-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-green-700 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>Sensor placement illustration coming soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl mr-4">5</div>
                  <h3 className="text-2xl font-semibold text-gray-800">Start Monitoring Your Plants</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  You're all set! Now you can monitor your plants and receive care recommendations:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>View real-time data on the dashboard</li>
                  <li>Receive notifications when your plants need attention</li>
                  <li>Track plant health history and progress</li>
                  <li>Get AI-powered care recommendations</li>
                </ul>
                <div className="mt-6">
                  <Link 
                    href="/features" 
                    className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
                  >
                    Explore all features
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 bg-green-50 rounded-xl p-8 flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-semibold text-gray-800">Plants Dashboard</h4>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Live</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex-shrink-0 mr-3"></div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-700">Fiddle Leaf Fig</p>
                          <p className="text-sm text-green-600">Healthy</p>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full w-4/5"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex-shrink-0 mr-3"></div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-700">Snake Plant</p>
                          <p className="text-sm text-yellow-600">Needs water</p>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-yellow-500 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex-shrink-0 mr-3"></div>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium text-gray-700">Peace Lily</p>
                          <p className="text-sm text-green-600">Healthy</p>
                        </div>
                        <div className="h-1.5 bg-gray-200 rounded-full mt-1 overflow-hidden">
                          <div className="h-full bg-green-500 rounded-full w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="w-full py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Troubleshooting & Support</h2>
            
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">What if my device won't connect to WiFi?</h4>
                  <p className="text-gray-700">
                    Try resetting your Hub by pressing the reset button for 5 seconds. 
                    Ensure your WiFi network is 2.4GHz (5GHz networks are not supported) 
                    and your router is within 30 feet of the Hub.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">How long does the battery last?</h4>
                  <p className="text-gray-700">
                    FlorAI sensors typically last 6 months on a single charge. 
                    Battery life may vary based on environmental conditions and 
                    frequency of data transmission.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Can I use FlorAI outdoors?</h4>
                  <p className="text-gray-700">
                    FlorAI is designed primarily for indoor use, but the sensors are 
                    water-resistant (IP67 rated) and can be used in covered outdoor areas 
                    as long as they remain within range of your Hub.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Our support team is available to help with any questions or issues.
                </p>
                <a href="mailto:support@florai.com" className="text-green-600 font-medium hover:text-green-700">
                  support@florai.com
                </a>
              </div>
              
              <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Knowledge Base</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Find detailed guides, tutorials, and FAQs in our knowledge base.
                </p>
                <Link href="/help" className="text-green-600 font-medium hover:text-green-700">
                  Visit Help Center
                </Link>
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
            Get your FlorAI system today and join thousands of plant enthusiasts 
            who have revolutionized their gardening experience.
          </p>
          <Link 
            href="/#purchase" 
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition-colors inline-block"
          >
            Buy Now
          </Link>
        </div>
      </section>
    </div>
  );
} 