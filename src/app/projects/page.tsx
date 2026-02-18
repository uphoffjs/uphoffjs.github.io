import type { Metadata } from 'next'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'QA engineering project case studies: end-to-end test automation with Cypress, API contract testing with Playwright, and legacy regression harness with Selenium.',
  openGraph: {
    title: 'Projects | Jacob Uphoff',
    description:
      'QA engineering project case studies: end-to-end test automation with Cypress, API contract testing with Playwright, and legacy regression harness with Selenium.',
    url: 'https://uphoffjs.github.io/projects',
  },
}

export default function ProjectsPage() {
  return (
    <div data-cy="projects-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        data-cy="page-heading"
        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4"
      >
        Projects
      </h1>
      <p className="text-gray-400 mb-12 max-w-lg">
        A collection of projects where I built applications and practiced automation skills.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}
