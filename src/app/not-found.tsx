import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      data-cy="not-found"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <p data-cy="not-found-code" className="text-6xl font-bold text-green-500 mb-4">
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-100 mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-8">This page doesn&apos;t exist yet or has moved.</p>
      <Link
        data-cy="not-found-home-link"
        href="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors font-medium"
      >
        Back to Home
      </Link>
    </div>
  )
}
