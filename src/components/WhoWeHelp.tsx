'use client'

import { TRADES } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

const icons: Record<string, JSX.Element> = {
  cabinet: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path strokeLinecap="round" d="M4 12h16" />
      <circle cx="10.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="13.5" cy="8" r="0.6" fill="currentColor" />
      <circle cx="10.5" cy="16" r="0.6" fill="currentColor" />
      <circle cx="13.5" cy="16" r="0.6" fill="currentColor" />
    </svg>
  ),
  counter: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18l-1 2H4l-1-2z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12v8m14-8v8M5 20h14" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3" />
    </svg>
  ),
  door: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <rect x="6" y="3" width="12" height="18" rx="0.5" />
      <path strokeLinecap="round" d="M9 6h6M9 10h6M9 14h6" />
      <circle cx="15" cy="12" r="0.6" fill="currentColor" />
    </svg>
  ),
  floor: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v5m8-5v5M5 12v5m6-5v5m6-5v5" />
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
            Residential supplier-installer subs in finish trades
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Private, owner-run shops with 50–200 active lots and master subcontracts with 2–4 production builders. Office PM and field super carry the operation — and the pain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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

        {/* Customer signal row */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 md:p-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-1">50–200</div>
              <div className="text-slate-500 text-sm">Active lots at any time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-1">2–4</div>
              <div className="text-slate-500 text-sm">Master subs with national builders</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-1">30–50%</div>
              <div className="text-slate-500 text-sm">Annual growth, demand not the problem</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-600 mb-1">Multi-visit</div>
              <div className="text-slate-500 text-sm">Template, install, punch — every lot</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
