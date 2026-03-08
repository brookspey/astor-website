'use client'

import { CALENDLY_URL, EMAIL } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function ContactContent() {
  const { ref, isVisible } = useInView(0.1)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-50 pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-10" />
        <div
          ref={ref}
          className={`max-w-4xl mx-auto px-6 text-center fade-in-up ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Let&apos;s get your business <span className="text-brand-600">found online</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call or send us a message. No pressure, no jargon — just a real conversation about your business.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendly Card */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Book a Strategy Call</h2>
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mb-8">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  The fastest way to get started. We&apos;ll look at your online presence, identify quick wins, and map out a plan to get you more customers.
                </p>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-brand-600/20 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Schedule on Calendly
                </a>
              </div>

              {/* What to Expect */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">What to Expect</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <p className="text-slate-700 font-medium">Quick intro</p>
                    <p className="text-slate-500 text-sm">Tell us about your business and goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="text-slate-700 font-medium">Live audit</p>
                    <p className="text-slate-500 text-sm">We&apos;ll pull up your online presence and show you what&apos;s working (and what isn&apos;t)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="text-slate-700 font-medium">Clear next steps</p>
                    <p className="text-slate-500 text-sm">You&apos;ll leave with a plan, whether we work together or not</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">15–20 minutes &middot; Free &middot; No obligation</p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1.5">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Smith's Plumbing"
                  />
                </div>
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-1.5">Business Type</label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select your business type</option>
                    <option value="restaurant">Restaurant / Food Service</option>
                    <option value="dental">Dental Practice</option>
                    <option value="plumbing">Plumbing / HVAC</option>
                    <option value="legal">Law Firm</option>
                    <option value="home-services">Home Services</option>
                    <option value="retail">Retail / Shop</option>
                    <option value="medical">Medical Practice</option>
                    <option value="automotive">Automotive</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="(561) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@smithsplumbing.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md"
                >
                  Send Message
                </button>
                <p className="text-slate-400 text-xs text-center">
                  Or email us directly at{' '}
                  <a href={`mailto:${EMAIL}`} className="text-brand-600 hover:text-brand-700 transition-colors">
                    {EMAIL}
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
