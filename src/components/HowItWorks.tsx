'use client'

import Link from 'next/link'
import { PROCESS_STEPS_MINI } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function HowItWorks() {
  const { ref, isVisible } = useInView()

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            Replace your agency in 3 steps
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No 6-month onboarding. No &ldquo;ramp-up period.&rdquo; Your AI expert starts working on day one and never stops.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROCESS_STEPS_MINI.map((step) => (
            <div
              key={step.step}
              className="relative bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg mb-5">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="text-brand-600 hover:text-brand-700 font-semibold transition-all duration-300"
          >
            See the full process &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
