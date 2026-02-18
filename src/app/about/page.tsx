import type { Metadata } from 'next'
import SkillsGrid from '@/components/SkillsGrid'

export const metadata: Metadata = {
  title: 'About | Jacob Uphoff',
}

export default function AboutPage() {
  return (
    <div data-cy="about-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        data-cy="page-heading"
        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-12"
      >
        About
      </h1>

      {/* Section 1 — Bio */}
      <section data-cy="about-bio" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          My Story
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          I&apos;m a Software Quality Assurance Engineer focused on building confidence in every
          release through strategic test automation and quality-first thinking. My path into QA grew
          from a genuine curiosity about how software breaks — and how to make it harder for it to
          do so. I enjoy the challenge of designing test strategies that catch real bugs before
          users do.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Over the course of my career I&apos;ve worked across the full testing spectrum — from
          exploratory testing and test case design to building scalable end-to-end automation
          frameworks with Cypress, Playwright, and Selenium. I hold an ISTQB Foundation
          certification and believe strongly in applying the right testing technique to the right
          problem.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I gravitate toward teams that treat quality as a shared responsibility rather than a final
          gate. Whether it&apos;s pairing with developers to write testable code from the start or
          reviewing requirements to catch ambiguity early, I aim to shift quality as far left as
          possible.
        </p>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 2 — QA Philosophy */}
      <section data-cy="about-philosophy" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Approach to Quality
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Quality isn&apos;t a phase at the end of a sprint — it&apos;s a practice woven into every
          stage of development. My approach starts with understanding the risk: what are the
          highest-impact areas if something fails? From there I build test coverage that prioritizes
          confidence in critical paths over chasing 100% line coverage.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I favor automation that is fast, reliable, and maintainable. Flaky tests erode trust in
          the suite, so I invest time upfront in proper selectors, meaningful assertions, and stable
          test data patterns. I complement automation with targeted exploratory testing — because
          automated tests can only verify what you thought to write, and exploratory testing finds
          what you didn&apos;t.
        </p>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 3 — Skills */}
      <section data-cy="about-skills" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
          Skills &amp; Tools
        </h2>
        <SkillsGrid />
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 4 — Interests */}
      <section data-cy="about-interests" className="mb-16">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Beyond Work
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Outside of work, I spend a lot of time reading — mostly non-fiction on systems thinking,
          software craftsmanship, and the occasional deep-dive into how large-scale engineering
          organizations work. I find that the same principles that make software reliable tend to
          show up in other complex systems too.
        </p>
        <p className="text-gray-400 leading-relaxed">
          When I&apos;m not in front of a screen, I enjoy hiking, strategy games, and tinkering with
          home automation projects. I&apos;m also an avid coffee drinker and firmly believe that a
          good testing strategy and a well-dialed espresso shot have more in common than people
          think.
        </p>
      </section>
    </div>
  )
}
