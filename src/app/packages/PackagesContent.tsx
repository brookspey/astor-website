'use client'

import Link from 'next/link'
import { PACKAGES, CTA_TEXT } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function PackagesContent() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50 pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-10" />
        <div
          ref={ref}
          className={`max-w-4xl mx-auto px-6 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Meet Astor.{' '}
            <span className="text-brand-600">Your AI marketing agent.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            When you hire Astor, you get an AI marketing agent that&apos;s constantly researching best practices, monitoring your competitors, and tracking every KPI that matters — dedicated 100% to growing your business.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{PACKAGES.foundation.name}</h2>
              <p className="text-slate-500 mb-8">{PACKAGES.foundation.tagline}</p>
              <ul className="space-y-4 mb-10">
                {PACKAGES.foundation.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md"
              >
                {CTA_TEXT}
              </Link>
            </div>

            {/* Growth */}
            <div className="relative bg-white border-2 border-brand-200 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 left-8 bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Most Popular
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{PACKAGES.growth.name}</h2>
              <p className="text-slate-500 mb-8">{PACKAGES.growth.tagline}</p>
              <ul className="space-y-4 mb-10">
                {PACKAGES.growth.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-brand-600 hover:bg-brand-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl"
              >
                {CTA_TEXT}
              </Link>
            </div>
          </div>

          {/* Agency comparison callout */}
          <div className="mt-16 bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">What makes Astor different</h3>
            <p className="text-slate-500 max-w-2xl mx-auto mb-6">
              Astor works on your business every single day — researching SEO best practices, optimizing your content, monitoring competitors, and adapting to every algorithm change in real time. It never takes PTO. It never forgets about you. And it gets smarter every week.
            </p>
            <p className="text-brand-600 font-semibold">Always learning. Always optimizing. Always on.</p>
          </div>
        </div>
      </section>
    </>
  )
}
