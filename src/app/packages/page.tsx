import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import PackagesContent from './PackagesContent'

export const metadata: Metadata = {
  title: 'Packages — Astor',
  description: 'Everything your marketing agency does — except it actually works. AI-powered SEO that constantly researches, monitors, and evolves.',
}

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      <PackagesContent />
      <CTA headline="Ready to stop subsidizing your agency's overhead?" subtext="Book a free strategy call. We'll show you exactly what your current agency is (and isn't) doing — and what Astor would do differently." />
      <Footer />
    </main>
  )
}
