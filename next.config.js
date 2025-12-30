/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'
const basePath = isGitHubPages ? '/muhle-lab-web' : ''

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' ? { output: 'export' } : {}),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Set basePath for GitHub Pages (repo is not at root domain)
  basePath: isGitHubPages ? '/muhle-lab-web' : '',
  assetPrefix: isGitHubPages ? '/muhle-lab-web' : '',
  // Rewrites for development mode (to serve admin panel)
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}

module.exports = nextConfig
