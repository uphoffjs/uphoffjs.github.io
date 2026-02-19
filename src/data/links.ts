export interface SiteLink {
  label: string
  href: string
  type: 'github' | 'linkedin' | 'email' | 'resume'
  description: string
  dataCy: string
}

export const siteLinks: SiteLink[] = [
  {
    label: 'Lorem',
    href: 'https://github.com/uphoffjs',
    type: 'github',
    description: 'Lorem ipsum dolor sit amet',
    dataCy: 'link-github',
  },
  {
    label: 'Ipsum',
    href: 'https://linkedin.com/in/uphoffjs',
    type: 'linkedin',
    description: 'Consectetur adipiscing elit',
    dataCy: 'link-linkedin',
  },
  {
    label: 'Dolor',
    href: 'mailto:lorem@ipsum.dev',
    type: 'email',
    description: 'Sed do eiusmod tempor',
    dataCy: 'link-email',
  },
  {
    label: 'Sit Amet',
    href: '/jacob-uphoff-resume.docx',
    type: 'resume',
    description: 'Incididunt ut labore et dolore',
    dataCy: 'link-resume',
  },
]
