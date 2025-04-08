import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'FlorAI - AI-Powered Plant Monitor',
  description: 'Making home plants more accessible by taking the guesswork out of gardening',
};

function Navigation() {
  return (
    <nav className="fixed w-full bg-green-700 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 text-2xl font-bold">
              FlorAI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Home
              </Link>
              <Link href="/mission" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Our Mission
              </Link>
              <Link href="/features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Features
              </Link>
              <Link href="/how-it-works" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                How It Works
              </Link>
              <Link href="/install" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Install
              </Link>
              <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600">
                Who We Are
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button - in real app would implement toggle functionality */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <footer className="bg-green-800 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-xl font-bold">FlorAI</p>
                <p className="text-sm">Making plant care smarter with AI</p>
              </div>
              <div className="flex space-x-6">
                <Link href="/mission" className="hover:text-green-300">Our Mission</Link>
                <Link href="/features" className="hover:text-green-300">Features</Link>
                <Link href="/about" className="hover:text-green-300">About Us</Link>
              </div>
            </div>
            <div className="mt-8 border-t border-green-600 pt-4 text-center text-sm">
              <p>© {new Date().getFullYear()} FlorAI - All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 