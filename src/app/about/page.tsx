import type { Metadata } from 'next'
import SkillsGrid from '@/components/SkillsGrid'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  openGraph: {
    title: 'About | Lorem Ipsum',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
          Lorem Ipsum
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="text-gray-400 leading-relaxed mb-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.
        </p>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 2 — QA Philosophy */}
      <section data-cy="about-philosophy" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Dolor Sit Amet
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
          nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
          quo voluptas nulla pariatur.
        </p>
        <p className="text-gray-400 leading-relaxed">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi id
          est laborum et dolorum fuga.
        </p>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 3 — Skills */}
      <section data-cy="about-skills" className="mb-0">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-6">
          Consectetur &amp; Adipiscing
        </h2>
        <SkillsGrid />
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent my-16" />

      {/* Section 4 — Interests */}
      <section data-cy="about-interests" className="mb-16">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
          Tempor Incididunt
        </h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
          est qui dolorem ipsum quia dolor sit amet.
        </p>
      </section>
    </div>
  )
}
