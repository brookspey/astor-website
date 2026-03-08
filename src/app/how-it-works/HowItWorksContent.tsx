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
            Give Astor the keys.{' '}
            <span className="text-brand-600">Watch it go to work.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Astor audits you against your competitors, you connect your accounts, and Astor executes everything — then keeps optimizing forever. No 6-month ramp-up. No waiting around.
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

      {/* Why AI — reframed as agency killer */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-400 text-sm font-semibold tracking-wider uppercase">
            Why AI Beats Your Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-6">
            Your agency can&apos;t keep up. Astor can.
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Google&apos;s algorithm changes thousands of times a year. Your agency&apos;s playbook changes once. Astor doesn&apos;t sleep, doesn&apos;t take PTO, and doesn&apos;t spend half its time in status meetings about other clients.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-400 mb-2">Daily</div>
              <p className="text-slate-400 text-sm">Astor monitors competitors and adjusts strategy — not once a month</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-400 mb-2">Real-time</div>
              <p className="text-slate-400 text-sm">Astor detects and adapts to algorithm changes before your agency even notices</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6">
              <div className="text-3xl font-bold text-brand-400 mb-2">Every KPI</div>
              <p className="text-slate-400 text-sm">Calls, leads, revenue — not impressions, clicks, and other vanity metrics</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
