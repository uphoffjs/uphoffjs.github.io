export interface SiteLink {
  label: string
  href: string
  type: 'github' | 'linkedin' | 'email' | 'resume'
  description: string
  dataCy: string
}

export const siteLinks: SiteLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/uphoffjs',
    type: 'github',
    description: 'View my code and projects',
    dataCy: 'link-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/uphoffjs',
    type: 'linkedin',
    description: 'Connect professionally',
    dataCy: 'link-linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:jacob@uphoffjs.dev',
    type: 'email',
    description: 'Send me a message',
    dataCy: 'link-email',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
    type: 'resume',
    description: 'Download or view my resume',
    dataCy: 'link-resume',
  },
]
