import Link from 'next/link'
import { NAV_LINKS, CTA_TEXT, EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt="Astor" className="w-7 h-7" />
              <span className="text-lg font-bold text-slate-900">Astor</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Software for production-home finish trades.<br />
              One queue from PO to draw.
            </p>
          </div>
          <div>
            <div className="text-slate-900 font-semibold text-sm mb-3">Navigate</div>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-slate-400 hover:text-slate-600 text-sm transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-900 font-semibold text-sm mb-3">Contact</div>
            <div className="space-y-2 text-slate-400 text-sm">
              <a href={`mailto:${EMAIL}`} className="block hover:text-slate-600 transition">
                {EMAIL}
              </a>
              <p>Palm Beach County, FL</p>
            </div>
          </div>
        </div>

        {/* Mini CTA */}
        <div className="border-t border-slate-100 pt-8 mb-8 text-center">
          <Link
            href="/contact"
            className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
          >
            {CTA_TEXT}
          </Link>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Astor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
