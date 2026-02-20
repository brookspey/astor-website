export default function CTA() {
  return (
    <section className="bg-brand-50 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-3xl mb-4 block">👋</span>
        <h2 className="text-3xl md:text-5xl font-display text-slate-900 mb-6">
          Curious if AI makes sense for your business?
        </h2>
        <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
          Book a free 15-minute call. We&apos;ll ask a few questions about your
          business and tell you honestly whether AI can help — and where.
          No pitch. No pressure.
        </p>
        <a
          href="https://calendly.com/peytonbrooks6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto min-h-[44px] flex items-center justify-center"
        >
          Book Your Free Call
        </a>
        <p className="text-slate-400 text-sm mt-6">
          Or email us at{' '}
          <a href="mailto:hello@tryastor.com" className="text-brand-600 hover:text-brand-700 transition-all duration-300 font-medium">
            hello@tryastor.com
          </a>
        </p>
      </div>
    </section>
  )
}
