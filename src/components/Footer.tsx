import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.jpg" alt="Astor" className="w-7 h-7" />
              <span className="text-lg font-display text-slate-900">Astor</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI consulting for small businesses.<br />
              South Florida&apos;s partner for working smarter.
            </p>
          </div>
          <div>
            <div className="text-slate-900 font-semibold text-sm mb-3">Navigate</div>
            <div className="space-y-2">
              <Link href="/#how-it-works" className="block text-slate-400 hover:text-slate-600 text-sm transition">
                How It Works
              </Link>
              <Link href="/case-studies" className="block text-slate-400 hover:text-slate-600 text-sm transition">
                Case Studies
              </Link>
              <a
                href="https://calendly.com/peytonbrooks6"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-slate-600 text-sm transition"
              >
                Book a Call
              </a>
            </div>
          </div>
          <div>
            <div className="text-slate-900 font-semibold text-sm mb-3">Contact</div>
            <div className="space-y-2 text-slate-400 text-sm">
              <a href="mailto:peytonbrooks6@gmail.com" className="block hover:text-slate-600 transition">
                peytonbrooks6@gmail.com
              </a>
              <p>Palm Beach County, FL</p>
              <p>Serving all of South Florida</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Astor. All rights reserved.
          </p>
          <p className="text-slate-300 text-xs">
            Palm Beach · Martin · Broward · Miami-Dade
          </p>
        </div>
      </div>
    </footer>
  )
}
