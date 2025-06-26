/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure static files are properly handled
  trailingSlash: false,
  
  // Configure static file serving with proper headers
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
    ]
  },

  // Ensure videos are copied to the build output
  async rewrites() {
    return [
      {
        source: '/videos/:path*',
        destination: '/videos/:path*',
      },
    ]
  },

  // Additional configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Ensure public folder is properly copied
  output: 'standalone',
}

export default nextConfig
