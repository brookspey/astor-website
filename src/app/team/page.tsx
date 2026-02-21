import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Meet the Team — Astor',
  description: 'Meet Peyton Brooks, founder of Astor. Product leader turned AI consultant helping small businesses work smarter.',
}

export default function Team() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Meet the Team
          </span>
          <h1 className="text-4xl md:text-5xl font-display text-slate-900 mt-3 mb-4">
            The people behind Astor
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We&apos;re not a giant agency. We&apos;re a small, focused team that actually understands
            your business — because we&apos;ve been in your shoes.
          </p>
        </div>
      </section>

      {/* Peyton's Profile */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="md:flex">
              {/* Photo */}
              <div className="md:w-2/5 bg-gradient-to-br from-brand-50 to-slate-50 flex items-center justify-center p-10 md:p-12">
                <div className="relative">
                  <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/peyton.jpg"
                      alt="Peyton Brooks, Founder of Astor"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Decorative accent */}
                  <div className="absolute -bottom-3 -right-3 w-56 h-56 md:w-64 md:h-64 rounded-2xl border-2 border-brand-200 -z-10" />
                </div>
              </div>

              {/* Bio */}
              <div className="md:w-3/5 p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-3 py-1 mb-4">
                  <span className="w-2 h-2 bg-brand-500 rounded-full" />
                  <span className="text-brand-700 text-xs font-semibold">Founder & Lead Consultant</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-2">
                  Peyton Brooks
                </h2>

                <p className="text-brand-600 font-medium text-sm mb-6">
                  Palm Beach Gardens, Florida
                </p>

                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    Before starting Astor, Peyton spent over four years as a Senior Product Manager at
                    Informed.IQ, where he built software for some of the largest banks in the U.S. —
                    including JPMorgan Chase, Wells Fargo, Capital One, and Ally Financial — leading
                    AI-powered products from automated loan origination to fraud detection systems
                    processing millions of documents.
                  </p>
                  <p>
                    He saw firsthand how AI could transform operations at scale. But he also noticed
                    something: the businesses that needed AI the most — local shops, service companies,
                    small agencies — were the ones being completely ignored by the tech industry.
                  </p>
                  <p>
                    That&apos;s why he started Astor. Not to sell &ldquo;digital transformation&rdquo; or
                    fancy dashboards, but to give small business owners the same practical AI tools that
                    Fortune 500 companies use — without the enterprise price tag or the confusing jargon.
                  </p>
                  <p>
                    Peyton holds an MBA from Duke University&apos;s Fuqua School of Business and has a background
                    in risk strategy from American Express. When he&apos;s not helping businesses automate
                    their operations, you&apos;ll find him exploring South Florida or diving into the latest
                    AI research.
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href="https://www.linkedin.com/in/peytondbrooks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                  <a
                    href="mailto:peytonbrooks6@gmail.com"
                    className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </a>
                  <a
                    href="https://calendly.com/peytonbrooks6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🎓</div>
              <div className="font-display text-lg text-slate-900 mb-1">Duke University</div>
              <div className="text-slate-500 text-sm">MBA, Fuqua School of Business</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🤖</div>
              <div className="font-display text-lg text-slate-900 mb-1">4+ Years in AI</div>
              <div className="text-slate-500 text-sm">Building AI products at Informed.IQ</div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">📍</div>
              <div className="font-display text-lg text-slate-900 mb-1">South Florida</div>
              <div className="text-slate-500 text-sm">Based in Palm Beach Gardens</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-50 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-3xl mb-4 block">👋</span>
          <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-6">
            Want to work together?
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Book a free 30-minute call. No pitch, no pressure — just an honest
            conversation about whether AI can help your business.
          </p>
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:-translate-y-0.5"
          >
            Book Your Free Call
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
