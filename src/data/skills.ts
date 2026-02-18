export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Automation',
    skills: ['Cypress', 'Playwright', 'Selenium', 'TypeScript'],
  },
  {
    category: 'Manual Testing',
    skills: ['Exploratory Testing', 'Test Case Design', 'Bug Reporting', 'ISTQB'],
  },
  {
    category: 'Tools & Frameworks',
    skills: ['GitHub Actions', 'Postman', 'Jira', 'VS Code'],
  },
]

// Flat list for homepage preview (top 4-6 recognizable QA tools)
export const skillsPreview: string[] = [
  'Cypress',
  'TypeScript',
  'GitHub Actions',
  'Playwright',
  'Postman',
]
