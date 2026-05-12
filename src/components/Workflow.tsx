'use client'

import { BREAKS, DISCONNECTED_STACK } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

const FLOW = [
  'PO arrives',
  'Office reviews vs. master',
  'Supervisor walks lot',
  'Handwritten takeoff',
  'Shop ticket retype',
  'Install',
  'Punch-out',
  'Draw filed',
  'QuickBooks',
]

export default function Workflow() {
  const { ref, isVisible } = useInView()
  const { ref: stackRef, isVisible: stackVisible } = useInView()

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-12 fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            What breaks today
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            From PO to QuickBooks, the work bleeds out at every step
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            We&apos;ve sat with the office PM and the field super. Headcount keeps growing to babysit the process, not to take on more lots. Here&apos;s where it actually breaks.
          </p>
        </div>

        {/* Flow strip */}
        <div className="mb-14 overflow-x-auto -mx-6 px-6">
          <div className="flex items-center gap-2 min-w-max">
            {FLOW.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-xs md:text-sm font-medium text-slate-700 whitespace-nowrap">
                  {step}
                </div>
                {i < FLOW.length - 1 && (
                  <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Breaks grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {BREAKS.map((br) => (
            <div
              key={br.title}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-1">
                    {br.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{br.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{br.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disconnected stack */}
        <div
          ref={stackRef}
          className={`bg-white border border-slate-100 rounded-2xl p-8 md:p-10 fade-in-up ${stackVisible ? 'visible' : ''}`}
        >
          <div className="md:flex md:items-center md:justify-between gap-8">
            <div className="mb-6 md:mb-0 md:max-w-md">
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wider mb-2">
                Nothing talks to anything
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Seven systems, one operation
              </h3>
              <p className="text-slate-500 leading-relaxed">
                A lot lives across all of these on the same day. The office, the supervisor, the fab shop, and AP each work from a different copy of the truth.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-md">
              {DISCONNECTED_STACK.map((tool) => (
                <span
                  key={tool}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm px-3 py-1.5 rounded-lg font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
