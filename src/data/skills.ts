export interface SkillCategory {
  category: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lorem',
    skills: ['Ipsum', 'Dolor', 'Sit', 'Amet'],
  },
  {
    category: 'Consectetur',
    skills: ['Adipiscing', 'Elit', 'Sed', 'Eiusmod'],
  },
  {
    category: 'Tempor',
    skills: ['Incididunt', 'Labore', 'Dolore', 'Magna'],
  },
]

// Flat list for homepage preview
export const skillsPreview: string[] = ['Ipsum', 'Dolor', 'Consectetur', 'Adipiscing', 'Tempor']
