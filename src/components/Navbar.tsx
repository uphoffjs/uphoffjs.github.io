'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Github, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/links', label: 'Links' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            href="/"
            className="font-semibold text-lg text-white hover:text-green-400 transition-colors"
          >
            Jacob Uphoff
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/uphoffjs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-green-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-800 bg-gray-950/95">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/uphoffjs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-medium"
              onClick={() => setIsOpen(false)}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
