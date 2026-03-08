'use client'

import { SCENARIOS } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function TrustSection() {
  const { ref, isVisible } = useInView()

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            What Happens When You Switch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            Businesses that fired their agency and hired Astor
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Same businesses. Same markets. Wildly different results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SCENARIOS.map((scenario) => (
            <div
              key={scenario.business}
              className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">{scenario.business}</h3>
              <p className="text-slate-400 text-sm mb-4">{scenario.challenge}</p>
              <div className="border-t border-slate-100 pt-4">
                <ul className="space-y-2">
                  {scenario.results.map((result) => (
                    <li key={result} className="flex items-start gap-2 text-sm">
                      <span className="text-brand-500 font-bold mt-0.5">&uarr;</span>
                      <span className="text-slate-700 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
