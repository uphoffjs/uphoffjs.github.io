import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jacob Uphoff | Software Quality Assurance Engineer',
}

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Name */}
        <h1 className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-bold tracking-tight">
          Jacob Uphoff
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-gray-400 mt-4 font-medium">
          Software Quality Assurance Engineer
        </p>

        {/* Philosophy */}
        <p className="text-gray-500 mt-6 max-w-lg mx-auto leading-relaxed">
          Building confidence in every release through strategic test automation
          and quality-first thinking.
        </p>

        {/* CTA */}
        <Link
          href="/projects"
          className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-lg transition-all font-medium mt-8"
        >
          See My Work
        </Link>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center gap-4 justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-green-500/50" />
          <div className="h-1.5 w-1.5 rounded-full bg-green-500/60" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-green-500/50" />
        </div>
      </div>
    </section>
  )
}
