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
            See what Astor can do <span className="text-brand-600">for your business</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call. We&apos;ll walk through your online presence, show you where the biggest opportunities are, and demo exactly what Astor would do for your business. No pitch deck. No pressure.
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
                  We&apos;ll pull up your website, your rankings, and your competitors — live. You&apos;ll see exactly what&apos;s holding your business back online and what Astor would do about it.
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
                    <p className="text-slate-700 font-medium">Where you stand</p>
                    <p className="text-slate-500 text-sm">Tell us about your business, your current marketing, and what&apos;s not working</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <p className="text-slate-700 font-medium">Live teardown</p>
                    <p className="text-slate-500 text-sm">We&apos;ll pull up your site, your competitors, and your rankings — and show you what&apos;s broken</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brand-50 rounded-lg flex items-center justify-center text-brand-600 font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <p className="text-slate-700 font-medium">The honest truth</p>
                    <p className="text-slate-500 text-sm">You&apos;ll leave knowing exactly what&apos;s holding your business back online — and what to do about it</p>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">15–20 minutes &middot; Free &middot; No obligation</p>
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
                      placeholder="john@smithsplumbing.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your business and what you're looking for..."
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
