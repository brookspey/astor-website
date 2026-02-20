const stats = [
  { value: '40+', label: 'Businesses helped', icon: '🏪' },
  { value: '18hrs', label: 'Avg. weekly time saved', icon: '⏰' },
  { value: '5–8x', label: 'Average first-year ROI', icon: '📈' },
  { value: '97%', label: 'Client retention', icon: '🤝' },
]

export default function Stats() {
  return (
    <section className="py-20 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-display text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-slate-500 text-sm leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
