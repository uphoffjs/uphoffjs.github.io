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
  title: 'Jacob Uphoff | Software Quality Assurance Engineer',
  description:
    'Portfolio of Jacob Uphoff — Software Quality Assurance Engineer specializing in test automation with Cypress, Playwright, and Selenium.',
  openGraph: {
    title: 'Jacob Uphoff | Software Quality Assurance Engineer',
    description:
      'Portfolio of Jacob Uphoff — Software Quality Assurance Engineer specializing in test automation with Cypress, Playwright, and Selenium.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="bg-gray-950 text-gray-100 font-sans min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
