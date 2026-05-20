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
            Door and window supplier-installer subs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Private, owner-run shops with 50–200 active lots running production-builder tracts. Office PM and field super carry the operation — and the pain.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
