'use client'

import Link from 'next/link'
import { CTA_TEXT } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function Hero() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50 pt-28 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div
          ref={ref}
          className={`max-w-3xl fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-brand-500 rounded-full" />
            <span className="text-brand-700 text-sm font-medium">Meet Astor — your AI marketing agent</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-bold text-slate-900 leading-[1.1] mb-6">
            Fire your marketing agency.{' '}
            <span className="text-brand-600">Hire Astor.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
            Astor is an AI marketing agent that does what agencies can&apos;t — constantly researching SEO best practices, monitoring your competitors, tracking your KPIs, and evolving your strategy with every Google update. 24/7. No days off.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 text-center hover:shadow-xl hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center"
            >
              {CTA_TEXT}
            </Link>
            <Link
              href="/packages"
              className="text-slate-600 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 min-h-[44px] flex items-center justify-center"
            >
              See What Astor Does
            </Link>
          </div>

          <p className="text-slate-400 text-sm mt-6">
            Free strategy call &middot; No long-term contracts &middot; Results or you don&apos;t pay
          </p>
        </div>
      </div>
    </section>
  )
}
