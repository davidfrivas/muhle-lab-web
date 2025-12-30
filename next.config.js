/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure static export works with GitHub Pages
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig
