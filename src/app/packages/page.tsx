import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import PackagesContent from './PackagesContent'

export const metadata: Metadata = {
  title: 'Packages — Astor',
  description: 'Everything your marketing agency does — except it actually works. AI-powered search and social marketing that constantly researches, monitors, and evolves.',
}

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      <PackagesContent />
      <CTA headline="Ready to put Astor to work?" subtext="Book a free strategy call. We'll show you exactly where your business stands online and what Astor would do on day one." />
      <Footer />
    </main>
  )
}
