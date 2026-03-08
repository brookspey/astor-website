'use client'

import { METRICS, SCENARIOS } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function ResultsContent() {
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
            Real results.{' '}
            <span className="text-brand-600">Real businesses. Powered by Astor.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Here&apos;s what happens when local businesses put Astor to work.
          </p>
        </div>
      </section>

      {/* Metric Cards */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((metric) => (
              <div
                key={metric.label}
                className="bg-white border border-slate-100 rounded-2xl p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-brand-600 mb-3">{metric.value}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
              Astor In Action
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
              Same business. Different approach. Real results.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SCENARIOS.map((scenario) => (
              <div
                key={scenario.business}
                className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{scenario.business}</h3>
                <p className="text-slate-400 text-sm mb-3 font-medium">The agency problem</p>
                <p className="text-slate-500 text-sm mb-5">{scenario.challenge}</p>
                <p className="text-slate-400 text-sm mb-3 font-medium">What Astor did</p>
                <p className="text-slate-500 text-sm mb-5">{scenario.solution}</p>
                <div className="border-t border-slate-100 pt-5">
                  <p className="text-slate-400 text-sm mb-3 font-medium">Results</p>
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

      {/* Testimonial Placeholder */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            What our clients say
          </h2>
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-12">
            <p className="text-slate-400 text-lg italic">
              Client testimonials coming soon. Astor lets results do the talking — not a slideshow of logos.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
