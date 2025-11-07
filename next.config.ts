import type { NextConfig } from "next";

// PWA configuration that works with static export
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  buildExcludes: [/middleware-manifest\.json$/],
  publicExcludes: ['!robots.txt', '!sitemap.xml'],
  // Use webpack instead of Turbopack for PWA compatibility
  runtimeCaching: [
    {
      urlPattern: /^https?.*/, 
      handler: 'NetworkFirst',
      options: {
        cacheName: 'offlineCache',
        expiration: {
          maxEntries: 200,
        },
      },
    },
  ],
});

const nextConfig: NextConfig = {
  // Static export configuration
  output: 'export',
  
  // Add empty turbopack config to silence the error but force webpack usage
  turbopack: {},
  
  // Image optimization settings for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Ensure trailing slashes for static hosting
  trailingSlash: true,
  
  // Generate static files in 'out' folder
  distDir: '.next',
  
  // Experimental features for better PWA support
  experimental: {
    optimizeCss: true,
  },
  
  // Custom webpack config for PWA (handled by next-pwa)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Client-side optimizations
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

// Use module.exports for compatibility with next-pwa
module.exports = withPWA(nextConfig);
