import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Lorem Ipsum`,
      description: project.shortDescription,
      url: `https://uphoffjs.github.io/projects/${slug}`,
    },
  }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) notFound()

  return (
    <article data-cy="case-study" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/projects"
        className="text-green-400 hover:text-green-300 text-sm mb-8 inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
      >
        ← Back to Projects
      </Link>

      <header data-cy="case-study-header" className="mb-12">
        <h1
          data-cy="case-study-title"
          className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4"
        >
          {project.title}
        </h1>
        <p data-cy="case-study-role" className="text-gray-400 text-sm">
          {project.role}
        </p>
      </header>

      <section data-cy="case-study-problem" className="mb-10">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Problem
        </h2>
        <p className="text-gray-300 leading-relaxed">{project.content.problem}</p>
      </section>

      <section data-cy="case-study-approach" className="mb-10">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Approach
        </h2>
        <p className="text-gray-300 leading-relaxed">{project.content.approach}</p>
      </section>

      <section data-cy="case-study-tools" className="mb-10">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Tools &amp; Technologies
        </h2>
        <ul className="flex flex-wrap gap-2">
          {project.content.tools.map(tool => (
            <li
              key={tool}
              data-cy="case-study-tool"
              className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section data-cy="case-study-results" className="mb-10">
        <h2 className="text-xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-3">
          Results
        </h2>
        <p className="text-gray-300 leading-relaxed">{project.content.results}</p>
      </section>
    </article>
  )
}
