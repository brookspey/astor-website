'use client'

import { PROCESS_STEPS_FULL } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function HowItWorksContent() {
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
            From invisible to <span className="text-brand-600">impossible to miss</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A clear, repeatable process that gets local businesses showing up where their customers are searching.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

            <div className="space-y-12">
              {PROCESS_STEPS_FULL.map((step) => (
                <div key={step.step} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-bold text-lg z-10">
                    {step.step}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${step.color}`}>
                        Step {step.step}
                      </span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why AI */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Why AI?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            AI is the tool. Results are the point.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            We use AI to work faster, smarter, and more efficiently — so you get better results at a lower cost. But we never lose sight of what matters: more customers finding your business.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">10x</div>
              <p className="text-slate-500 text-sm">Faster content creation than traditional agencies</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">24/7</div>
              <p className="text-slate-500 text-sm">Monitoring and optimization that never sleeps</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-600 mb-2">50%</div>
              <p className="text-slate-500 text-sm">Lower cost than hiring a traditional marketing agency</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
