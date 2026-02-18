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
    <nav
      data-cy="navbar"
      className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link
            data-cy="nav-logo"
            href="/"
            className="font-semibold text-lg text-white hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            Jacob Uphoff
          </Link>

          {/* Desktop nav links */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                data-cy={`nav-link-${link.label.toLowerCase()}`}
                className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              >
                {link.label}
              </Link>
            ))}
            <a
              data-cy="nav-github"
              href="https://github.com/uphoffjs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            data-cy="nav-menu-button"
            id="nav-menu-button"
            className="sm:hidden text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="nav-drawer"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Side drawer */}
      <div
        id="nav-drawer"
        data-cy="nav-drawer"
        role="dialog"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-64 bg-gray-950 border-l border-gray-800 transform transition-transform duration-200 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close button */}
        <div className="flex items-center justify-end p-4">
          <button
            data-cy="nav-drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer nav links */}
        <div className="flex flex-col gap-4 px-6 py-4">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              data-cy={`nav-mobile-link-${link.label.toLowerCase()}`}
              className="text-gray-300 hover:text-green-400 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            data-cy="nav-mobile-github"
            href="https://github.com/uphoffjs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-colors text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
            onClick={() => setIsOpen(false)}
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
