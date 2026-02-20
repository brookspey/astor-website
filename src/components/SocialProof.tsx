export default function SocialProof() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-display text-slate-900 mb-4">
          You didn&apos;t start your business to do data entry.
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
          Between scheduling, follow-ups, invoices, and a hundred little tasks that eat your day —
          there&apos;s barely time left to do what you&apos;re actually good at.
          That&apos;s where we come in.
        </p>
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
          {[
            { emoji: '😩', before: 'Hours on repetitive tasks', after: 'Done automatically' },
            { emoji: '📱', before: 'Leads slipping through cracks', after: 'Instant follow-up' },
            { emoji: '📋', before: 'Manual scheduling chaos', after: 'Smart & optimized' },
          ].map((item) => (
            <div key={item.before} className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
              <div className="text-slate-400 text-sm line-through mb-1">{item.before}</div>
              <div className="text-brand-700 font-semibold text-sm">{item.after}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
