import Link from 'next/link'
import { caseStudies } from '@/lib/caseStudies'

export default function CaseStudiesPreview() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-slate-900 mt-3 mb-5">
            Businesses like yours, already ahead
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Here&apos;s what happens when small businesses stop doing everything manually.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies#${cs.slug}`}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group block"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{cs.emoji}</span>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  {cs.industry}
                </span>
              </div>
              <h3 className="text-xl font-display text-slate-900 mb-3 group-hover:text-brand-700 transition-all duration-300">
                {cs.title}
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-display text-brand-600">
                  {cs.highlight}
                </span>
                <span className="text-slate-400 text-sm">
                  {cs.highlightLabel}
                </span>
              </div>
              <ul className="space-y-2">
                {cs.results.slice(0, 2).map((r) => (
                  <li key={r} className="text-sm text-slate-600 flex items-start gap-2">
                    <span className="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-block text-brand-600 hover:text-brand-700 font-semibold text-lg transition-all duration-300"
          >
            See all 6 case studies →
          </Link>
        </div>
      </div>
    </section>
  )
}
