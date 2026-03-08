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
            Hire your AI expert. Fire your agency.
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything a $5k/month agency does — except it actually works, constantly evolves, and costs a fraction of the price.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {Object.values(PACKAGES).map((pkg) => (
            <div
              key={pkg.name}
              className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <p className="text-slate-500 mb-6">{pkg.tagline}</p>
              <ul className="space-y-3 mb-8">
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
