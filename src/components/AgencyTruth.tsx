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
            You know marketing matters — you just haven&apos;t had a real option
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A website alone isn&apos;t a strategy. If nobody finds it, it doesn&apos;t matter. And hiring an agency? That&apos;s $3–5k/month for something you can&apos;t even measure. Until now, there hasn&apos;t been a middle ground.
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

        {/* Three-column Comparison */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Doing It Yourself */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
              <div className="text-amber-400 text-sm font-semibold tracking-wider uppercase mb-4">Doing It Yourself</div>
              <ul className="space-y-4">
                {[
                  'You\'re busy running your business',
                  'No time to learn SEO, ads, and social',
                  'Posting when you remember (maybe monthly)',
                  'No idea what\'s working or what\'s not',
                  'Competitors are pulling ahead',
                  'Free — but costing you customers',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hiring an Agency */}
            <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8">
              <div className="text-red-400 text-sm font-semibold tracking-wider uppercase mb-4">Hiring an Agency</div>
              <ul className="space-y-4">
                {[
                  'Account manager juggles 40+ clients',
                  'Touches your account once a month (maybe)',
                  'Same playbook for every client',
                  'Reports vanity metrics to justify the bill',
                  'Slow to adapt when platforms change',
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
                  'Dedicated 100% to your business',
                  'Monitors and optimizes every single day',
                  'Strategy built from your competitors\' actual data',
                  'Tracks what matters: calls, leads, revenue',
                  'Adapts to platform changes in real time',
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
