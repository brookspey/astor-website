'use client'

import { useState, FormEvent } from 'react'
import { CALENDLY_URL, EMAIL } from '@/lib/constants'
import { useInView } from '@/lib/useInView'

export default function ContactContent() {
  const { ref, isVisible } = useInView(0.1)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      business: (form.elements.namedItem('business') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error()
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

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
            Walk us through <span className="text-brand-600">one lot</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Bring your office PM or field super. We&apos;ll trace one lot from PO to draw and tell you where software actually fixes the rework — built for cabinet, countertop, door, and flooring subs on production-builder tracts.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Calendly Card */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Schedule a Consultation</h2>
              <div className="bg-brand-50 border border-brand-100 rounded-2xl p-8 mb-8">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Tell us about your builders, your master subs, and how a PO becomes a paid draw today. We&apos;ll point out where the rework lives. No pitch — just a conversation.
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
                    <p className="text-slate-700 font-medium">Trace one lot, PO to draw</p>
                    <p className="text-slate-500 text-sm">Builder portal, master sub, takeoff, shop ticket, install, punch, draw</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="text-slate-700 font-medium">Name the leaks</p>
                    <p className="text-slate-500 text-sm">Where retypes happen, where draws stall, where the supervisor&apos;s knowledge gets stuck</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="text-slate-700 font-medium">An honest answer</p>
                    <p className="text-slate-500 text-sm">If software won&apos;t move the needle on your operation, we&apos;ll tell you. If it will, you&apos;ll see exactly what we&apos;d build first.</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">30 minutes &middot; Free &middot; No obligation</p>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1.5">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                    placeholder="Smith Cabinetry & Countertops"
                  />
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
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200"
                      placeholder="jane@smithcabinetry.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your operation</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Which trade? Which builders? Roughly how many active lots? Where does the most rework happen today?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'sent' && (
                  <p className="text-green-600 text-sm text-center font-medium">Message sent! We&apos;ll be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-sm text-center font-medium">Something went wrong. Please try again or email us directly.</p>
                )}
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
