import type { Metadata } from 'next'
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'
import { siteLinks, SiteLink } from '@/data/links'

export const metadata: Metadata = {
  title: 'Links',
  description:
    'Connect with Jacob Uphoff — GitHub, LinkedIn, email, and resume download. Software Quality Assurance Engineer open to opportunities.',
  openGraph: {
    title: 'Links | Jacob Uphoff',
    description:
      'Connect with Jacob Uphoff — GitHub, LinkedIn, email, and resume download. Software Quality Assurance Engineer open to opportunities.',
    url: 'https://uphoffjs.github.io/links',
  },
}

function getLinkIcon(type: SiteLink['type']) {
  switch (type) {
    case 'github':
      return (
        <Github size={20} className="text-gray-400 group-hover:text-green-400 transition-colors" />
      )
    case 'linkedin':
      return (
        <Linkedin
          size={20}
          className="text-gray-400 group-hover:text-green-400 transition-colors"
        />
      )
    case 'email':
      return (
        <Mail size={20} className="text-gray-400 group-hover:text-green-400 transition-colors" />
      )
    case 'resume':
      return (
        <Download
          size={20}
          className="text-gray-400 group-hover:text-green-400 transition-colors"
        />
      )
  }
}

export default function LinksPage() {
  return (
    <div data-cy="links-page" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1
        data-cy="page-heading"
        className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4"
      >
        Links
      </h1>
      <p className="text-gray-400 mb-12 max-w-lg">
        Find me online, connect professionally, or grab a copy of my resume.
      </p>

      <div className="flex flex-col gap-4 max-w-md">
        {siteLinks.map(link => {
          const isExternal = link.type === 'github' || link.type === 'linkedin'
          const isResume = link.type === 'resume'

          return (
            <a
              key={link.dataCy}
              data-cy={link.dataCy}
              href={link.href}
              {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(isResume ? { download: 'jacob-uphoff-resume.docx' } : {})}
              className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-800 rounded-lg hover:shadow-[0_0_0_1px_rgba(34,197,94,0.5),0_0_16px_2px_rgba(34,197,94,0.12)] transition-shadow duration-150 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              {getLinkIcon(link.type)}
              <div>
                <div className="text-gray-100 font-medium">{link.label}</div>
                <div className="text-gray-400 text-sm">{link.description}</div>
              </div>
              {isExternal && <ExternalLink size={16} className="text-gray-600 ml-auto" />}
            </a>
          )
        })}
      </div>
    </div>
  )
}
