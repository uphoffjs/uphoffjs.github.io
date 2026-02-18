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
    default: 'Jacob Uphoff | Software Quality Assurance Engineer',
    template: '%s | Jacob Uphoff',
  },
  description:
    'Portfolio of Jacob Uphoff — Software Quality Assurance Engineer specializing in test automation with Cypress, Playwright, and Selenium.',
  openGraph: {
    title: 'Jacob Uphoff | Software Quality Assurance Engineer',
    description:
      'Portfolio of Jacob Uphoff — Software Quality Assurance Engineer specializing in test automation with Cypress, Playwright, and Selenium.',
    type: 'website',
    url: 'https://uphoffjs.github.io',
    siteName: 'Jacob Uphoff',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jacob Uphoff | Software Quality Assurance Engineer',
    description:
      'Portfolio of Jacob Uphoff — Software Quality Assurance Engineer specializing in test automation with Cypress, Playwright, and Selenium.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jacob Uphoff',
  jobTitle: 'Software Quality Assurance Engineer',
  url: 'https://uphoffjs.github.io',
  sameAs: ['https://github.com/uphoffjs', 'https://linkedin.com/in/uphoffjs'],
  knowsAbout: [
    'Test Automation',
    'Cypress',
    'Playwright',
    'Selenium',
    'Quality Assurance',
    'Software Testing',
    'WCAG Accessibility',
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
