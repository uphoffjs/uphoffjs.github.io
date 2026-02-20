import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      data-cy="not-found"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
    >
      <p
        data-cy="not-found-code"
        className="text-8xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4"
      >
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-100 mb-4">
        Looks like this page didn&apos;t pass QA
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        We ran our tests and this URL returned a 404. Maybe it was deprecated, maybe it never
        existed &mdash; either way, it&apos;s been flagged.
      </p>
      <Link
        data-cy="not-found-home-link"
        href="/"
        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
      >
        Back to Home
      </Link>
    </div>
  )
}
