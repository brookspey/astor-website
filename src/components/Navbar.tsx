'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-display text-slate-900">Astor</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#how-it-works" className="text-slate-600 hover:text-slate-900 transition text-sm font-medium">
            How It Works
          </Link>
          <Link href="/case-studies" className="text-slate-600 hover:text-slate-900 transition text-sm font-medium">
            Case Studies
          </Link>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition"
          >
            Free Discovery Call
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
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
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-4 shadow-lg">
          <Link href="/#how-it-works" className="block text-slate-600 hover:text-slate-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/case-studies" className="block text-slate-600 hover:text-slate-900 text-sm font-medium" onClick={() => setMobileOpen(false)}>
            Case Studies
          </Link>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brand-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
          >
            Free Discovery Call
          </a>
        </div>
      )}
    </nav>
  )
}
