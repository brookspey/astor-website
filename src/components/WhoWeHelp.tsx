'use client'

import { BUSINESS_TYPES } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

const icons: Record<string, JSX.Element> = {
  utensils: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v8m0 0a4 4 0 004-4V2m-4 8a4 4 0 01-4-4V2m4 8v12m6-18v6a2 2 0 01-2 2h-1" />
    </svg>
  ),
  tooth: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C9.5 2 7 4 7 7c0 2 .5 3.5-.5 6S4 18 5 21s3 1 4-1 2-4 3-4 2 2 3 4 3 4 4 1-1.5-5-2.5-8S17 9 17 7c0-3-2.5-5-5-5z" />
    </svg>
  ),
  wrench: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
    </svg>
  ),
  scale: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-13.5 0L2.632 15.697c-.122.499.106 1.028.589 1.202a5.989 5.989 0 002.031.352 5.989 5.989 0 002.031-.352c.483-.174.711-.703.59-1.202L5.25 4.971z" />
    </svg>
  ),
  home: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  store: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0V4.125C3 3.504 3.504 3 4.125 3h15.75C20.496 3 21 3.504 21 4.125V9.35" />
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
            Who We Help
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-5">
            Built for local businesses that need to grow
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Whether customers find you on Google or discover you on Instagram, Astor makes sure they choose you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_TYPES.map((biz) => (
            <div
              key={biz.name}
              className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-4 group-hover:bg-brand-100 transition-colors duration-300">
                {icons[biz.icon]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{biz.name}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{biz.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
