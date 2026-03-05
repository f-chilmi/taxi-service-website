/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true
  },

  // Configure base path for GitHub Pages (only in production)
  basePath: process.env.NODE_ENV === 'production' ? '/taxi-service-website' : '',

  // Configure asset prefix for GitHub Pages (only in production)
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taxi-service-website/' : ''

  // Disable server-side features for static export
  // Server Actions are enabled by default in Next.js 14+
}

module.exports = nextConfig