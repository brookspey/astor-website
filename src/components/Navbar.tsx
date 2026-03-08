'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { NAV_LINKS, CTA_TEXT } from '@/lib/constants'

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
          <img src="/logo.png" alt="Astor" className="w-8 h-8" />
          <span className="text-xl font-bold text-slate-900">Astor</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.filter(l => l.label !== 'Home').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-600 hover:text-slate-900 transition-all duration-300 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            {CTA_TEXT}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-all duration-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-slate-600 hover:text-slate-900 text-sm font-medium py-2 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-full text-sm font-semibold text-center transition-all duration-300 min-h-[44px]"
            onClick={() => setMobileOpen(false)}
          >
            {CTA_TEXT}
          </Link>
        </div>
      )}
    </nav>
  )
}
