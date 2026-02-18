export interface ProjectSection {
  problem: string
  approach: string
  tools: string[]
  results: string
}

export interface Project {
  slug: string
  title: string
  shortDescription: string
  tags: string[]
  content: ProjectSection
  role: string
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    shortDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tags: ['Cypress', 'TypeScript', 'Next.js'],
    content: {
      problem:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      approach:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      tools: ['Cypress', 'TypeScript', 'Next.js', 'GitHub Actions'],
      results:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    role: 'Solo project — all design, development, and testing by Jacob Uphoff.',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    shortDescription:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tags: ['Playwright', 'Python', 'FastAPI'],
    content: {
      problem:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      approach:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      tools: ['Playwright', 'Python', 'FastAPI', 'Docker'],
      results:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    role: 'Solo project — all design, development, and testing by Jacob Uphoff.',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    shortDescription:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tags: ['Selenium', 'Java', 'Spring Boot'],
    content: {
      problem:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      approach:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      tools: ['Selenium', 'Java', 'Spring Boot', 'Jenkins', 'PostgreSQL'],
      results:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    role: 'Solo project — all design, development, and testing by Jacob Uphoff.',
  },
]
