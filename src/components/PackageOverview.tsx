'use client'

import Link from 'next/link'
import { PACKAGES } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function PackageOverview() {
  const { ref, isVisible } = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            One AI agent. Everything your business needs online.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Search, social, ads, reviews, content — Astor handles all of it, and gets smarter over time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(PACKAGES).map(([key, pkg]) => (
            <div
              key={pkg.name}
              className={`bg-white rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
                key === 'fullFunnel'
                  ? 'relative border-2 border-brand-200'
                  : 'border border-slate-100'
              }`}
            >
              {key === 'fullFunnel' && (
                <div className="absolute -top-4 left-8 bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Best Value
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <p className="text-slate-500 mb-6">{pkg.tagline}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-slate-600 text-sm">
                    <svg className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/packages"
                className="text-brand-600 hover:text-brand-700 font-semibold text-sm transition-all duration-300"
              >
                See everything you get &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
