import { skillCategories } from '@/data/skills'

export default function SkillsGrid() {
  return (
    <div data-cy="skills-grid" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map(group => (
        <div
          key={group.category}
          data-cy="skill-category"
          className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-green-800/50 transition-colors duration-150"
        >
          <h3 className="text-sm font-mono uppercase tracking-widest text-green-500 mb-3">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <li key={skill} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
