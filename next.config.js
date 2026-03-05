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

  // Configure base path for GitHub Pages (will be updated with repo name)
  // basePath: '/taxi-service-website', // Uncomment and update when deploying to GitHub Pages

  // Configure asset prefix for GitHub Pages
  // assetPrefix: '/taxi-service-website/', // Uncomment and update when deploying to GitHub Pages

  // Disable server-side features for static export
  // Server Actions are enabled by default in Next.js 14+
}

module.exports = nextConfig