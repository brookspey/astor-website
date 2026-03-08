'use client'

import { AGENCY_PROBLEMS } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function AgencyTruth() {
  const { ref, isVisible } = useInView()

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-5">
            Your marketing agency is robbing you
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Most local businesses are paying thousands a month for marketing that doesn&apos;t move the needle. Here&apos;s what&apos;s actually happening with your money.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {AGENCY_PROBLEMS.map((item) => (
            <div
              key={item.problem}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">{item.problem}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Traditional Agency */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
              <div className="text-red-400 text-sm font-semibold tracking-wider uppercase mb-4">Traditional Agency</div>
              <ul className="space-y-4">
                {[
                  'Account manager juggles 40+ clients',
                  'Updates your SEO once a month (maybe)',
                  'Uses the same playbook for every client',
                  'Reports vanity metrics to justify the invoice',
                  'Google changes its algorithm? They\'ll get to it... eventually',
                  '$3,000–$5,000+/month',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Astor */}
            <div className="bg-brand-600/10 border border-brand-500/30 rounded-2xl p-8">
              <div className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4">Astor</div>
              <ul className="space-y-4">
                {[
                  'Dedicated 100% to your business — no other clients',
                  'Monitors and optimizes daily — not monthly',
                  'Builds strategy from your competitors\' actual data',
                  'Tracks KPIs that matter: calls, leads, revenue',
                  'Algorithm update? Astor already adapted before you noticed',
                  'A fraction of what agencies charge',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
