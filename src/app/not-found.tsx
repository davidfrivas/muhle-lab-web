import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lab-dark text-white">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg opacity-80 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-outline-white inline-block">
          Return Home
        </Link>
      </div>
    </div>
  )
}
