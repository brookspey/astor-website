'use client'

import { TRADES } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

const icons: Record<string, JSX.Element> = {
  door: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="6" y="3" width="12" height="18" rx="0.5" />
      <path strokeLinecap="round" d="M9 6h6M9 10h6M9 14h6" />
      <circle cx="15" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  window: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path strokeLinecap="round" d="M12 3v18M3 12h18" />
    </svg>
  ),
  plumbing: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v6a5 5 0 0 0 5 5h0a5 5 0 0 1 5 5v0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h6M14 20h6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 18l3 2-3 2" />
    </svg>
  ),
  electrical: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
    </svg>
  ),
  hvac: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10c0-4 1-6 3-6s2 3-1 5M14 12c4 0 6 1 6 3s-3 2-5-1M12 14c0 4-1 6-3 6s-2-3 1-5M10 12c-4 0-6-1-6-3s3-2 5 1" />
    </svg>
  ),
}

export default function WhoWeHelp() {
  const { ref, isVisible } = useInView()

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Who We Build For
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            Supplier-installer subs in finish and mechanical trades
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Private, owner-run shops that visit each lot 3–5 times across the build cycle — rough, trim, install, and punch. With 50–200 active lots running production-builder tracts, the office PM and field super carry the operation — and the pain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRADES.map((trade) => (
            <div
              key={trade.name}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                {icons[trade.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{trade.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{trade.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
