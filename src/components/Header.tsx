'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight">
          Astor
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            Case Studies
          </Link>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 space-y-4">
          <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block text-gray-600 hover:text-gray-900 font-medium">
            Case Studies
          </Link>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  )
}
