/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  // Disable React StrictMode for production
  reactStrictMode: false,
  // Configure trailing slashes for compatibility
  trailingSlash: true,
}

module.exports = nextConfig 