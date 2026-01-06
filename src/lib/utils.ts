// Get the base path for assets (used for GitHub Pages deployment)
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || ''
}

// Prepend base path to image/asset URLs
export function withBasePath(path: string): string {
  if (!path) return path
  // Don't modify external URLs or data URLs
  if (path.startsWith('http') || path.startsWith('data:')) return path
  // Don't double-add the base path
  const basePath = getBasePath()
  if (basePath && path.startsWith(basePath)) return path
  // Add base path to absolute paths
  if (path.startsWith('/')) {
    return `${basePath}${path}`
  }
  return path
}
