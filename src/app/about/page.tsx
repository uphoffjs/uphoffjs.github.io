import type { Metadata } from 'next'
import SkillsGrid from '@/components/SkillsGrid'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Jacob Uphoff — Software QA Engineer with 6+ years of experience across manual and automated testing. Based in Knoxville, TN.',
  openGraph: {
    title: 'About | Jacob Uphoff',
    description:
      'Jacob Uphoff — Software QA Engineer with 6+ years of experience across manual and automated testing. Based in Knoxville, TN.',
    url: 'https://uphoffjs.github.io/about',
  },
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
          Who I Am
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          I&apos;m Jacob Uphoff, a Software QA Engineer based in Knoxville, TN with 6+ years of
          experience across manual and automated testing. I&apos;ve worked at Apple, Tombras, and
          StoragePug, holding roles in software QA engineering and technical support.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          At Apple, I rotated through multiple Career Experience programs in QA working on CI/CD
          pipelines and manually testing daily builds on the projects I was assigned.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I&apos;m currently pursuing a BS in IT Project Management.
        </p>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 2 — QA Philosophy */}
      <section data-cy="about-philosophy" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          My Approach to QA
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          I&apos;m a QA Engineer, not a QA Tester. The difference matters. Testing for defects is
          part of my job, but not all of it. I focus on improving how teams deliver quality
          software. That means building automation frameworks, designing test strategies, and
          identifying gaps in testing processes that slow teams down. When I find those gaps, I
          propose solutions and build them.
        </p>
        <p className="text-gray-400 leading-relaxed">
          I believe in shift-left testing. Quality shouldn&apos;t be an afterthought bolted on at
          the end. I push for early involvement in requirements, BDD workflows that define
          acceptance criteria upfront, and collaboration with developers on testability. I use AI
          where it adds real value to testing workflows, but manual testing is irreplaceable for the
          things automation can&apos;t catch.
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
        <p className="text-gray-400 leading-relaxed">
          When I&apos;m not testing software, you can find me hiking and camping around East
          Tennessee, playing Magic: The Gathering, or hanging out with my dogs, Titus and Athena.
        </p>
      </section>
    </div>
  )
}
