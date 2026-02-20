import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies — Astor',
  description: 'See how Astor has helped real small businesses save time, cut costs, and grow with AI.',
}

const caseStudies = [
  {
    slug: 'real-estate-brokerage',
    industry: 'Real Estate',
    title: 'Real Estate Brokerage',
    problem:
      'A growing South Florida real estate brokerage was drowning in manual work. Agents spent hours writing listing descriptions, pulling market data for clients, and chasing cold leads through their CRM. The broker knew they were leaving deals on the table but couldn\'t hire fast enough to keep up.',
    built: [
      'AI-powered lead nurturing that engages and qualifies prospects 24/7',
      'Automated weekly market reports customized for each client\'s target neighborhoods',
      'One-click listing description generation from property details and photos',
      'CRM automation that routes hot leads to the right agent instantly',
    ],
    results: [
      { value: '3x', label: 'More leads engaged per month' },
      { value: '15%', label: 'Higher close rate' },
      { value: '12 hrs/week', label: 'Saved per agent on admin' },
    ],
    quote: 'We used to lose leads because we couldn\'t follow up fast enough. Now every lead gets a response in minutes, and my agents focus on what they do best — closing deals.',
    quoteName: 'Michael Torres',
    quoteRole: 'Broker/Owner',
  },
  {
    slug: 'insurance-brokerage',
    industry: 'Insurance',
    title: 'Insurance Brokerage',
    problem:
      'A mid-size insurance brokerage was struggling with policy renewals falling through the cracks. Their team spent most of their week on paperwork — manually tracking renewal dates, following up on claims, onboarding new clients with repetitive data entry, and comparing quotes across carriers by hand.',
    built: [
      'Automated policy renewal tracking with smart reminders sent to clients and agents',
      'Claims follow-up workflows that keep clients informed without manual check-ins',
      'Streamlined client onboarding that pre-fills forms and eliminates duplicate data entry',
      'AI-powered quote comparison across multiple carriers in seconds',
    ],
    results: [
      { value: '40%', label: 'Faster policy renewals' },
      { value: '25%', label: 'Reduction in policy lapses' },
      { value: '20 hrs/week', label: 'Saved on paperwork' },
    ],
    quote: 'Our renewal rate jumped almost overnight. Clients love that we\'re proactive now, and my team finally has time to actually build relationships instead of pushing paper.',
    quoteName: 'Rachel Kim',
    quoteRole: 'Agency Principal',
  },
  {
    slug: 'restaurant-group',
    industry: 'Food & Beverage',
    title: 'Restaurant Group (3 Locations)',
    problem:
      'A restaurant group with three South Florida locations was losing money to food waste, scheduling headaches, and inconsistent customer experiences. The owner was spending nights and weekends juggling inventory orders, staff schedules, and trying to make sense of scattered online reviews.',
    built: [
      'Automated inventory ordering based on historical sales data and upcoming reservations',
      'Smart staff scheduling that accounts for peak hours, availability, and labor costs',
      'AI-powered customer feedback analysis that spots trends across all locations',
      'Centralized reservation management with automated confirmations and waitlist handling',
    ],
    results: [
      { value: '15 hrs/week', label: 'Saved on operations' },
      { value: '20%', label: 'Reduction in food waste' },
      { value: '30%', label: 'Fewer scheduling conflicts' },
    ],
    quote: 'I went from working 80-hour weeks to actually having my weekends back. The inventory system alone paid for itself in the first month.',
    quoteName: 'David Larsen',
    quoteRole: 'Owner/Operator',
  },
  {
    slug: 'accounting-firm',
    industry: 'Accounting',
    title: 'Accounting Firm',
    problem:
      'A local accounting firm was turning away clients every tax season because they simply couldn\'t process the volume. Document intake was a mess — clients emailed, faxed, and dropped off papers with no consistent process. Communication was reactive, and the team spent as much time on admin as they did on actual accounting.',
    built: [
      'Automated document intake portal that organizes, categorizes, and flags missing items',
      'Client communication workflows with status updates and deadline reminders',
      'Tax prep workflow optimization that routes work by complexity and expertise',
      'Automated billing that tracks time, generates invoices, and follows up on payments',
    ],
    results: [
      { value: '25 hrs/week', label: 'Saved in admin time' },
      { value: '40%', label: 'Faster client onboarding' },
      { value: '3x', label: 'More clients served in tax season' },
    ],
    quote: 'Last tax season we served three times the clients without adding a single person to the team. Our clients think we hired a whole new staff — we just got smarter about how we work.',
    quoteName: 'Jennifer Walsh',
    quoteRole: 'Managing Partner',
  },
]

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
              <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
                {cs.industry}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-gray-900">{cs.title}</h2>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">The Problem</h3>
                  <p className="text-gray-500 leading-relaxed">{cs.problem}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">What We Built</h3>
                  <ul className="space-y-2">
                    {cs.built.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-500">
                        <span className="text-teal-500 mt-1 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">The Results</h3>
                  <div className="grid grid-cols-3 gap-4">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-teal-50 rounded-xl p-4 text-center">
                        <div className="text-2xl md:text-3xl font-extrabold text-teal-600">{r.value}</div>
                        <div className="mt-1 text-xs text-gray-500 font-medium">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-4 border-teal-200 pl-6 py-2">
                  <p className="text-gray-600 italic leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
                  <footer className="mt-3 text-sm font-semibold text-gray-900">
                    {cs.quoteName} <span className="text-gray-400 font-normal">— {cs.quoteRole}</span>
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
