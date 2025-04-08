export default function Features() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Features</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Advanced technology for smarter plant care
          </p>
        </div>
      </div>

      {/* Features list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Feature 1: Plant Sensing */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Core Technology</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Plant Sensing</h2>
              <p className="text-gray-600 mb-6">
                Our sophisticated sensors monitor all critical environmental factors that affect your plant's health:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Light Levels:</span>
                    <p className="text-gray-600">Precise monitoring of light intensity and duration to ensure your plant gets optimal exposure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Temperature:</span>
                    <p className="text-gray-600">Constant temperature tracking to prevent heat stress or cold damage to your plants.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Humidity:</span>
                    <p className="text-gray-600">Ambient humidity monitoring to create the ideal environment for various plant species.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Soil pH:</span>
                    <p className="text-gray-600">Advanced pH sensing to ensure your soil maintains the correct acidity for optimal plant growth.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow-inner">
              <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-800 font-semibold">Image: FlorAI sensor technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: AI Suggestions */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-8 shadow-inner">
              <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-800 font-semibold">Image: AI suggestions interface</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Smart Assistant</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Auto Suggestions + Notifications</h2>
              <p className="text-gray-600 mb-6">
                FlorAI's intelligent system provides personalized care recommendations based on real-time data:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Watering Schedule:</span>
                    <p className="text-gray-600">Receive precise watering recommendations based on soil moisture, plant type, and environmental conditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Light Adjustment:</span>
                    <p className="text-gray-600">Get alerts when your plant needs to be moved to optimize light exposure.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Fertilization Tips:</span>
                    <p className="text-gray-600">Timely reminders for fertilizing based on your plant's growth stage and nutrient needs.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Emergency Alerts:</span>
                    <p className="text-gray-600">Immediate notifications for critical conditions like extreme temperatures or pest detection.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 3: Health Predictions */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Predictive AI</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Plant Health Predictions & Metrics</h2>
              <p className="text-gray-600 mb-6">
                Our advanced AI algorithms analyze trends in your plant's data to provide:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Early Disease Detection:</span>
                    <p className="text-gray-600">Identify potential health issues before visible symptoms appear.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Growth Forecasting:</span>
                    <p className="text-gray-600">Predict your plant's growth rate and development stages based on current conditions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Health Score:</span>
                    <p className="text-gray-600">A comprehensive rating of your plant's overall well-being, updated in real-time.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Seasonal Adaptation:</span>
                    <p className="text-gray-600">Recommendations that adjust automatically to changing seasons and environmental conditions.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow-inner">
              <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-800 font-semibold">Image: Plant health metrics dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4: AI Plant Detection */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-8 shadow-inner">
              <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-800 font-semibold">Image: AI plant recognition in action</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Computer Vision</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">AI Plant Detection Through Images</h2>
              <p className="text-gray-600 mb-6">
                Our powerful image recognition system can:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Plant Identification:</span>
                    <p className="text-gray-600">Instantly identify plant species from photos to provide tailored care instructions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Disease Diagnosis:</span>
                    <p className="text-gray-600">Detect diseases, pests, and nutritional deficiencies from leaf images.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Growth Tracking:</span>
                    <p className="text-gray-600">Document your plant's development over time with visual progress reports.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Visual Care Instructions:</span>
                    <p className="text-gray-600">Receive illustrated guides for plant-specific care tasks like pruning or repotting.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 5: Leaderboards */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">Community Feature</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">CO₂ Capture Leaderboards</h2>
              <p className="text-gray-600 mb-6">
                Join a community of plant enthusiasts making a difference:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Environmental Impact:</span>
                    <p className="text-gray-600">Track the estimated CO₂ absorbed by your plants based on species and growth.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Community Rankings:</span>
                    <p className="text-gray-600">Compete with friends and other users to create the most eco-friendly plant collection.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Achievement Badges:</span>
                    <p className="text-gray-600">Earn rewards for reaching carbon capture milestones and plant care excellence.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-800">Global Impact Visualization:</span>
                    <p className="text-gray-600">See the collective environmental contribution of the entire FlorAI community.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 shadow-inner">
              <div className="h-80 bg-green-200 rounded-lg flex items-center justify-center">
                <p className="text-green-800 font-semibold">Image: CO₂ capture leaderboard interface</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to transform your plant care?</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Get started with FlorAI today and experience the future of intelligent gardening.
          </p>
          <a 
            href="/install" 
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Get FlorAI Now
          </a>
        </div>
      </div>
    </div>
  );
} 