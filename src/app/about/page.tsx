import type { Metadata } from 'next'
import SkillsGrid from '@/components/SkillsGrid'

export const metadata: Metadata = {
  title: 'About | Jacob Uphoff',
}

export default function AboutPage() {
  return (
    <div
      data-cy="about-page"
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <h1
        data-cy="page-heading"
        className="text-4xl font-bold text-gray-100 mb-12"
      >
        About
      </h1>

      {/* Section 1 — Bio */}
      <section data-cy="about-bio" className="mb-16">
        <h2 className="text-xl font-semibold text-green-400 mb-4">My Story</h2>
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
          est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
      </section>

      {/* Section 2 — QA Philosophy */}
      <section data-cy="about-philosophy" className="mb-16">
        <h2 className="text-xl font-semibold text-green-400 mb-4">Approach to Quality</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
          nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
          possimus, omnis voluptas assumenda est, omnis dolor repellendus temporibusque autem
          quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
        </p>
      </section>

      {/* Section 3 — Skills */}
      <section data-cy="about-skills" className="mb-16">
        <h2 className="text-xl font-semibold text-green-400 mb-6">Skills &amp; Tools</h2>
        <SkillsGrid />
      </section>

      {/* Section 4 — Interests */}
      <section data-cy="about-interests" className="mb-16">
        <h2 className="text-xl font-semibold text-green-400 mb-4">Beyond Work</h2>
        <p className="text-gray-400 leading-relaxed mb-4">
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
          nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.
        </p>
      </section>
    </div>
  )
}
