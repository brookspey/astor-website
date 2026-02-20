import type { Metadata } from 'next'
import { caseStudies } from '@/lib/caseStudies'

export const metadata: Metadata = {
  title: 'Case Studies — Astor',
  description: 'See how Astor has helped real small businesses save time, cut costs, and grow with AI.',
}

export default function CaseStudies() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Case Studies
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Real results for real businesses. Here&apos;s how we&apos;ve helped small businesses like yours work smarter with AI.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {caseStudies.map((cs) => (
            <article key={cs.slug} id={cs.slug} className="scroll-mt-24">
              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full flex items-center gap-1 w-fit">
                <span>{cs.emoji}</span>
                <span>{cs.industry}</span>
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">{cs.title}</h2>
              <p className="mt-2 text-sm text-gray-400">{cs.location}</p>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-500 leading-relaxed">{cs.problem}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What We Built</h3>
                  <p className="text-gray-500 leading-relaxed">{cs.solution}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">The Results</h3>
                  <ul className="space-y-2 mb-4">
                    {cs.results.map((result, i) => (
                      <li key={i} className="flex gap-3 text-gray-500">
                        <span className="text-teal-500 mt-1 flex-shrink-0">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-teal-50 rounded-xl p-6 text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-1">{cs.highlight}</div>
                    <div className="text-sm text-gray-600 font-medium">{cs.highlightLabel}</div>
                  </div>
                </div>

                <blockquote className="border-l-4 border-teal-200 pl-6 py-2">
                  <p className="text-gray-600 italic leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
                  <footer className="mt-3 text-sm font-semibold text-gray-900">
                    {cs.quoteAuthor}
                  </footer>
                </blockquote>
              </div>

              <hr className="mt-16 border-gray-100" />
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-teal-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Want results like these?
          </h2>
          <p className="mt-4 text-teal-100 text-lg">
            Let&apos;s talk about what AI can do for your business. The first call is free.
          </p>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-teal-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg"
          >
            Book Your Free Call
          </a>
        </div>
      </section>
    </>
  )
}
