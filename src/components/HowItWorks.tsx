const phases = [
  {
    step: '1',
    title: 'Discovery Call',
    tag: 'Free · 30 min',
    description: 'A quick, casual conversation about your business. We\'ll ask about your biggest time sinks and figure out if AI is a good fit. No sales pitch.',
    color: 'bg-brand-50 border-brand-200 text-brand-700',
  },
  {
    step: '2',
    title: 'AI Assessment',
    tag: '$999 · 2 weeks',
    description: 'We shadow your operations, talk to your team, and map every opportunity for AI. You get a custom report with clear recommendations and projected savings.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
  },
  {
    step: '3',
    title: 'Implementation',
    tag: 'Custom scope',
    description: 'We build and deploy solutions tailored to how you actually work — automating follow-ups, scheduling, data entry, whatever\'s eating your time.',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
  },
  {
    step: '4',
    title: 'Ongoing Support',
    tag: 'Monthly',
    description: 'We don\'t disappear after launch. We monitor everything, optimize as you grow, and help you expand AI into new areas when you\'re ready.',
    color: 'bg-purple-50 border-purple-200 text-purple-700',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-600 text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-slate-900 mt-3 mb-5">
            Simple process, real results
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            No six-month timelines. No confusing contracts.
            Just a clear path from &ldquo;curious&rdquo; to &ldquo;optimized.&rdquo;
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.step}
              className="relative bg-white border border-slate-100 rounded-2xl md:rounded-3xl p-5 md:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 bg-slate-900 text-white rounded-xl md:rounded-2xl flex items-center justify-center font-display text-base md:text-lg">
                  {phase.step}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl font-display text-slate-900 mb-1">
                    {phase.title}
                    <span className={`ml-2 text-xs font-semibold px-2.5 py-0.5 rounded-full border ${phase.color} inline-block align-middle`}>
                      {phase.tag}
                    </span>
                  </h3>
                  <p className="text-sm md:text-base text-slate-500 leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://calendly.com/peytonbrooks6"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto min-h-[44px] flex items-center justify-center"
          >
            Start with a Free Call →
          </a>
        </div>
      </div>
    </section>
  )
}
