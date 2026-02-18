import Link from 'next/link'
import type { Project } from '@/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-cy="project-card"
      className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex flex-col gap-4 hover:border-green-800 transition-colors"
    >
      <h2 className="text-xl font-semibold text-gray-100">{project.title}</h2>
      <p className="text-gray-400 text-sm leading-relaxed flex-1">{project.shortDescription}</p>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <li
            key={tag}
            data-cy="project-tag"
            className="px-2 py-0.5 bg-gray-800 text-green-400 text-xs rounded font-mono"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Link
        href={`/projects/${project.slug}`}
        className="text-green-400 hover:text-green-300 text-sm font-medium transition-colors self-start"
      >
        Read case study →
      </Link>
    </article>
  )
}
