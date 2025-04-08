import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the Scene component with no SSR to avoid Three.js server-side issues
const TeamScene = dynamic(() => import('../components/TeamScene'), { ssr: false });

export default function WhoWeArePage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-green-700 to-green-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
              <p className="text-xl mb-8 leading-relaxed">
                Meet the passionate team behind FlorAI who are committed to revolutionizing 
                plant care through technology and making gardening accessible to everyone.
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
                  Our Product
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <TeamScene />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600">
              FlorAI began with a simple question: "Why is it so hard to keep plants alive?"
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">The Beginning</h3>
                <p className="text-gray-700 mb-4">
                  Our founder, Alex Chen, was a software engineer with a passion for plants but a 
                  notorious "black thumb." After killing his tenth houseplant despite his best efforts 
                  to follow care instructions, he realized there was a fundamental problem: generic 
                  plant care advice doesn't account for each home's unique conditions.
                </p>
                <p className="text-gray-700">
                  In 2020, Alex teamed up with plant scientist Maria Garcia and ML engineer David Kim 
                  to create a solution that would bridge the gap between technology and nature.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 p-8 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 bg-green-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-700 text-center p-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h4 className="text-xl font-semibold mb-2">Our Origins</h4>
                      <p>Founded in 2020 by plant enthusiasts and technologists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Growth</h3>
                <p className="text-gray-700 mb-4">
                  What started as a small prototype quickly expanded as we saw the impact our technology 
                  had on helping people successfully care for their plants. We expanded our team, bringing 
                  on Priya Shah as CTO to build out our AI capabilities, James Wilson to create our intuitive 
                  design, and Sofia Johnson to lead operations.
                </p>
                <p className="text-gray-700">
                  Today, we're a team of twenty passionate individuals across engineering, design, plant science, 
                  and customer support, all united by our love for plants and technology.
                </p>
              </div>
              <div className="md:w-1/2 bg-green-50 p-8 rounded-xl">
                <div className="aspect-w-16 aspect-h-9 bg-green-100 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-700 text-center p-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <h4 className="text-xl font-semibold mb-2">Company Expansion</h4>
                      <p>Growing from 3 founders to a team of 20+ passionate plant-tech enthusiasts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600">
              Our diverse team brings together expertise in technology, plant science, 
              design, and business to create an exceptional product.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Alex Chen</h3>
                <p className="text-gray-500 mb-4">CEO & Founder</p>
                <p className="text-gray-700">
                  Former software engineer at Google with a passion for making technology accessible.
                  Alex combines his technical background with entrepreneurial vision.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Priya Shah</h3>
                <p className="text-gray-500 mb-4">Chief Technology Officer</p>
                <p className="text-gray-700">
                  AI specialist with a PhD in Computer Science from MIT. Priya leads our
                  engineering team and drives the development of our machine learning algorithms.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Maria Garcia</h3>
                <p className="text-gray-500 mb-4">Lead Plant Scientist</p>
                <p className="text-gray-700">
                  Botanist with 10+ years in plant research. Maria brings deep scientific knowledge
                  about plant physiology and optimal growing conditions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-300"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">James Wilson</h3>
                <p className="text-gray-500 mb-4">Head of Design</p>
                <p className="text-gray-700">
                  Former design lead at Apple with expertise in creating intuitive, beautiful interfaces.
                  James ensures our technology is accessible to users of all skill levels.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">David Kim</h3>
                <p className="text-gray-500 mb-4">Machine Learning Engineer</p>
                <p className="text-gray-700">
                  Specialist in sensor-based ML systems with experience at Tesla. David leads
                  the development of our smart algorithms for analyzing plant data.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-green-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-800">Sofia Johnson</h3>
                <p className="text-gray-500 mb-4">Head of Operations</p>
                <p className="text-gray-700">
                  Former operations director with extensive experience scaling hardware startups.
                  Sofia ensures smooth delivery and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide us in building FlorAI and serving our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Trust & Transparency</h3>
                <p className="text-gray-700">
                  We believe in building trust through transparency with our customers, partners, 
                  and team members. We're open about how our technology works, how we use data, 
                  and the limitations of our system.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Innovation with Purpose</h3>
                <p className="text-gray-700">
                  We develop technology to solve real problems, not just for innovation's sake. 
                  Every feature we build addresses specific challenges in plant care and is designed 
                  to make our users' lives better and their plants healthier.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Environmental Responsibility</h3>
                <p className="text-gray-700">
                  We're committed to sustainability in everything we do. Our devices are designed 
                  for longevity and energy efficiency, and we work to minimize water waste through 
                  precision recommendations. We believe technology should be a force for environmental good.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">Community Building</h3>
                <p className="text-gray-700">
                  We see FlorAI as more than just a product—it's a community of plant lovers. 
                  We foster connections between our users through knowledge sharing, support, 
                  and celebration of plant care successes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working at FlorAI */}
      <section className="w-full py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Working at FlorAI</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're always looking for passionate people to join our team and help us 
                revolutionize the way people care for plants.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                At FlorAI, you'll work in a collaborative environment with people who are 
                passionate about both technology and nature. We offer competitive benefits, 
                flexible working arrangements, and a culture that values work-life balance.
              </p>
              <div>
                <Link 
                  href="/careers" 
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="font-semibold text-gray-800 mb-2">Flexible Hours</h3>
                  <p className="text-gray-600 text-sm">Work when you're most productive</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <h3 className="font-semibold text-gray-800 mb-2">Remote Options</h3>
                  <p className="text-gray-600 text-sm">Work from anywhere in the world</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="font-semibold text-gray-800 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600 text-sm">Professional development budget</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <h3 className="font-semibold text-gray-800 mb-2">Plant Perks</h3>
                  <p className="text-gray-600 text-sm">Free plant for every employee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have questions about our team or interested in joining us? We'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-green-100 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
} 