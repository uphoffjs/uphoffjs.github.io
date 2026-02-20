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
    description: 'Check out my projects and contributions',
    dataCy: 'link-github',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/uphoffjs',
    type: 'linkedin',
    description: 'Connect with me professionally',
    dataCy: 'link-linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:uphoffjs@gmail.com',
    type: 'email',
    description: 'Send me a message',
    dataCy: 'link-email',
  },
  {
    label: 'Resume',
    href: '/jacob-uphoff-resume.docx',
    type: 'resume',
    description: 'Download my resume',
    dataCy: 'link-resume',
  },
]
