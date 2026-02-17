import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Jacob Uphoff',
}

export default function LinksPage() {
  return (
    <section data-cy="links-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <span className="text-xs font-mono uppercase tracking-widest text-green-500 mb-4 block">
        Coming Soon
      </span>
      <h1 data-cy="page-heading" className="text-4xl font-bold text-gray-100 mb-4">Links</h1>
      <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
        Professional links, profiles, and ways to connect. Check back soon.
      </p>
    </section>
  )
}
