import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Support — Astor',
  description:
    'Get help with Astor and Astor Field. Contact support for account access, app issues, and invited-team questions.',
}

export default function SupportPage() {
  return (
    <main>
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Support
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            How to get help
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Need help with Astor or the Astor Field app? Email us and we&apos;ll
            get you sorted.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Contact support
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              For account access, login issues, bugs in Astor Field, or questions
              about your team&apos;s setup, reach us at:
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {EMAIL}
            </a>
            <p className="text-slate-400 text-sm mt-4">
              We typically respond within one business day.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <h2 className="text-lg font-bold text-slate-900 mb-2">
              Astor Field is invite-only
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Astor Field is built for invited production-home finish-trade
              teams. If you don&apos;t have an account yet, ask your office
              admin to add you — or{' '}
              <Link
                href="/contact"
                className="text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                get in touch
              </Link>{' '}
              if you&apos;re evaluating Astor for your company.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
