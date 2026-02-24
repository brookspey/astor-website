export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50 pt-28 pb-20 md:pt-40 md:pb-28">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-warm-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-200 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-brand-500 rounded-full" />
            <span className="text-brand-700 text-sm font-medium">AI consulting built for small business</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-display text-slate-900 leading-[1.1] mb-6">
            hi there
          </h1>

          <p className="text-lg md:text-xl text-slate-500 max-w-xl leading-relaxed mb-10">
            We help small businesses save time and make more money using practical AI systems. 
            Lower labor costs, faster workflows, less chaos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/peytonbrooks6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 text-center hover:shadow-xl hover:-translate-y-0.5 min-h-[44px] flex items-center justify-center"
            >
              Book a Free Discovery Call
            </a>
            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 text-center border border-slate-200 hover:border-slate-300 hover:bg-slate-50 min-h-[44px] flex items-center justify-center"
            >
              See How It Works ↓
            </a>
          </div>

          <p className="text-slate-400 text-sm mt-6">
            30 minutes · No pressure · No jargon
          </p>
        </div>
      </div>
    </section>
  )
}
