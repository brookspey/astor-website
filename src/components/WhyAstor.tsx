const reasons = [
  {
    icon: '💬',
    title: 'Plain English, Always',
    description: 'We explain everything in words you\'d actually use. If it sounds like a TED talk, we\'re doing it wrong.',
  },
  {
    icon: '🎯',
    title: 'Built for Your Size',
    description: 'We work with businesses that have 2–50 employees. We know your world because it\'s the only world we work in.',
  },
  {
    icon: '📍',
    title: 'Local to South Florida',
    description: 'Based in Palm Beach County. We\'re down the road, not in some call center. When you need us, we\'re here.',
  },
  {
    icon: '💵',
    title: 'No Surprises',
    description: 'Our AI Assessment is $999. That\'s it. You\'ll know what everything costs before we start — always.',
  },
]

export default function WhyAstor() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="md:grid md:grid-cols-5 md:gap-16 items-start">
          <div className="md:col-span-2 mb-12 md:mb-0 md:sticky md:top-32">
            <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
              Why Astor
            </span>
            <h2 className="text-3xl md:text-4xl font-display text-slate-900 mt-3 mb-5">
              We&apos;re not like other tech consultants
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Most AI consultants chase enterprise deals. We&apos;d rather help
              the restaurant owner who&apos;s tired of doing schedules at midnight.
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-5 p-6 rounded-2xl hover:bg-slate-50 transition">
                <div className="text-2xl flex-shrink-0 mt-0.5">{r.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                    {r.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
