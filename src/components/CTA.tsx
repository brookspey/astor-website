'use client'

import Link from 'next/link'
import { CTA_TEXT, EMAIL } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function CTA() {
  const { ref, isVisible } = useInView()

  return (
    <section className="bg-brand-50 py-24">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
          Let&apos;s talk about what you need built.
        </h2>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Schedule a free consultation. We&apos;ll learn how your business runs, identify the biggest bottlenecks, and show you what custom software could look like.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:-translate-y-0.5"
        >
          {CTA_TEXT}
        </Link>
        <p className="text-slate-400 text-sm mt-6">
          Or email us at{' '}
          <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:text-brand-700 transition-all duration-300 font-medium">
            {EMAIL}
          </a>
        </p>
      </div>
    </section>
  )
}
