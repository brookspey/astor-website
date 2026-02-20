import type { Metadata } from 'next'
import { caseStudies } from '@/lib/caseStudies'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies — Astor',
  description: 'See how Astor has helped real small businesses save time, cut costs, and grow with AI. Real results for real businesses.',
  openGraph: {
    title: 'Case Studies — Astor',
    description: 'Real results for real businesses. See how we\'ve helped small businesses work smarter with AI.',
  },
}

export default function CaseStudies() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Case Studies
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-slate-900 mt-3 mb-5 tracking-tight">
            Real results for real businesses
          </h1>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Here&apos;s how we&apos;ve helped small businesses like yours work smarter with AI. Save time, cut costs, and grow revenue.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {caseStudies.map((cs, index) => (
            <article 
              key={cs.slug} 
              id={cs.slug} 
              className={`scroll-mt-24 rounded-3xl p-8 md:p-12 mb-8 transition-all duration-300 ${
                index % 2 === 0 ? 'bg-white shadow-sm' : 'bg-slate-50'
              }`}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cs.emoji}</span>
                    <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {cs.industry}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display text-slate-900 mb-2">{cs.title}</h2>
                  <p className="text-sm text-slate-400 font-medium">{cs.location}</p>
                </div>
                
                {/* Prominent stat */}
                <div className="text-center md:text-right bg-gradient-to-br from-brand-500 to-brand-600 text-white rounded-2xl p-6 md:min-w-[200px] shadow-lg">
                  <div className="text-3xl md:text-4xl font-display mb-1">{cs.highlight}</div>
                  <div className="text-sm font-medium opacity-90">{cs.highlightLabel}</div>
                </div>
              </div>

              {/* Content sections */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Problem */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    The Problem
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{cs.problem}</p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    What We Built
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    The Results
                  </h3>
                  <ul className="space-y-2">
                    {cs.results.map((result, i) => (
                      <li key={i} className="flex gap-3 text-slate-600 text-sm">
                        <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 bg-slate-900 rounded-2xl p-6 md:p-8">
                <p className="text-slate-100 text-lg leading-relaxed italic mb-4">
                  &ldquo;{cs.quote}&rdquo;
                </p>
                <footer className="text-sm font-semibold text-brand-400">
                  — {cs.quoteAuthor}
                </footer>
              </blockquote>

              {/* Visual separator (except last item) */}
              {index < caseStudies.length - 1 && (
                <div className="mt-16 flex justify-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-brand-400 to-brand-600 rounded-full"></div>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-brand-600 to-brand-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-5">
            Want results like these?
          </h2>
          <p className="mt-4 text-brand-100 text-lg leading-relaxed max-w-xl mx-auto">
            Let&apos;s talk about what AI can do for your business. The first call is free.
          </p>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-brand-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-50 hover:shadow-lg transition-all duration-300 shadow-xl w-full sm:w-auto"
          >
            Book Your Free Call
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
