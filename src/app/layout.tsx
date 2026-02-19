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
    default: 'Lorem Ipsum | Dolor Sit Amet',
    template: '%s | Lorem Ipsum',
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  openGraph: {
    title: 'Lorem Ipsum | Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    type: 'website',
    url: 'https://uphoffjs.github.io',
    siteName: 'Lorem Ipsum',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lorem Ipsum | Dolor Sit Amet',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lorem Ipsum',
  jobTitle: 'Dolor Sit Amet',
  url: 'https://uphoffjs.github.io',
  sameAs: ['https://github.com/uphoffjs', 'https://linkedin.com/in/uphoffjs'],
  knowsAbout: ['Ipsum', 'Dolor', 'Consectetur', 'Adipiscing', 'Tempor', 'Incididunt', 'Labore'],
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
