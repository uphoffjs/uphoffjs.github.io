export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Test Automation',
    skills: ['E2E Testing', 'Integration Testing', 'Cross-Browser Testing'],
  },
  {
    category: 'API Testing',
    skills: ['REST API Validation', 'Test Data Generation'],
  },
  {
    category: 'CI/CD & Source Control',
    skills: ['Pipeline Management', 'Flaky Test Triage', 'Version Control'],
  },
  {
    category: 'Testing Methodologies',
    skills: [
      'Risk-Based Prioritization',
      'Shift-Left Testing',
      'BDD',
      'Manual Testing',
      'Accessibility',
      'AI-Assisted Test Generation',
    ],
  },
  {
    category: 'Documentation & Process',
    skills: ['Test Plans', 'QA Playbooks', 'Test Case Management', 'Bug Reporting'],
  },
]

// Flat list for homepage preview
export const skillsPreview: string[] = [
  'E2E Testing',
  'API Testing',
  'CI/CD',
  'Shift-Left Testing',
  'Accessibility',
]
