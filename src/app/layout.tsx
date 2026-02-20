import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://uphoffjs.github.io'),
  title: {
    default: 'Jacob Uphoff | Software QA Engineer',
    template: '%s | Jacob Uphoff',
  },
  description:
    'Portfolio of Jacob Uphoff — Software QA Engineer building better testing processes, not just running more tests.',
  openGraph: {
    title: 'Jacob Uphoff | Software QA Engineer',
    description:
      'Portfolio of Jacob Uphoff — Software QA Engineer building better testing processes, not just running more tests.',
    type: 'website',
    url: 'https://uphoffjs.github.io',
    siteName: 'Jacob Uphoff',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Uphoff | Software QA Engineer',
    description:
      'Portfolio of Jacob Uphoff — Software QA Engineer building better testing processes, not just running more tests.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Uphoff',
  jobTitle: 'Software QA Engineer',
  url: 'https://uphoffjs.github.io',
  sameAs: ['https://github.com/uphoffjs', 'https://linkedin.com/in/uphoffjs'],
  knowsAbout: [
    'Test Automation',
    'E2E Testing',
    'API Testing',
    'CI/CD',
    'Shift-Left Testing',
    'Accessibility',
    'BDD',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-gray-950 text-gray-100 font-sans min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, '\\u003c'),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
