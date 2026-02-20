export default function BigStat() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-400/10 rounded-full blur-3xl" />

          <div className="relative">
            <p className="text-brand-400 text-sm font-semibold tracking-wider uppercase mb-4">
              The bottom line
            </p>
            <div className="text-5xl md:text-7xl font-display text-white mb-4">
              $2.1M+
            </div>
            <p className="text-xl md:text-2xl text-slate-300 max-w-lg mx-auto leading-relaxed mb-2">
              saved by our clients in the last year
            </p>
            <p className="text-slate-500 text-sm">
              Through smarter operations, fewer manual tasks, and workflows that run themselves.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
