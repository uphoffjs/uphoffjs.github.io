import type { Metadata } from 'next'
import Link from 'next/link'
import { skillsPreview } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Jacob Uphoff | Software Quality Assurance Engineer',
  description:
    'QA engineer portfolio — test automation with Cypress, Playwright, and Selenium. Building confidence in every release through strategic quality-first thinking.',
  openGraph: {
    title: 'Jacob Uphoff | Software Quality Assurance Engineer',
    description:
      'QA engineer portfolio — test automation with Cypress, Playwright, and Selenium. Building confidence in every release through strategic quality-first thinking.',
    url: 'https://uphoffjs.github.io',
  },
}

export default function Home() {
  return (
    <>
      <section
        data-cy="home-hero"
        className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-2xl mx-auto">
          {/* Name */}
          <h1
            data-cy="home-heading"
            className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-bold tracking-tight"
          >
            Jacob Uphoff
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl text-gray-400 mt-4 font-medium">
            Software Quality Assurance Engineer
          </p>

          {/* Philosophy */}
          <p className="text-gray-400 mt-6 max-w-lg mx-auto leading-relaxed">
            Building confidence in every release through strategic test automation and quality-first
            thinking.
          </p>

          {/* CTA */}
          <Link
            data-cy="home-cta"
            href="/projects"
            className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white px-8 py-3 rounded-lg transition-all font-medium mt-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
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

      {/* Skills Preview Section */}
      <section
        data-cy="home-skills-preview"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h2 className="text-center text-sm font-mono uppercase tracking-widest bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-8">
          What I Work With
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skillsPreview.map(skill => (
            <li
              key={skill}
              data-cy="home-skill-tag"
              className="px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-gray-300 text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section
        data-cy="home-cta-section"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center"
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Let&apos;s work together
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Looking for a QA engineer who takes quality seriously? Get in touch.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            data-cy="home-cta-projects"
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            View My Work
          </Link>
          <Link
            data-cy="home-cta-links"
            href="/links"
            className="px-6 py-3 border border-gray-700 hover:border-green-500 text-gray-300 hover:text-green-400 rounded-lg transition-all font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
