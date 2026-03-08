import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import ResultsContent from './ResultsContent'

export const metadata: Metadata = {
  title: 'Results — Astor',
  description: 'See the results local businesses get when they start showing up online. Real scenarios, real numbers.',
}

export default function ResultsPage() {
  return (
    <main>
      <Navbar />
      <ResultsContent />
      <CTA headline="Want results like these?" subtext="Let's talk about your business. We'll show you exactly what's possible." />
      <Footer />
    </main>
  )
}
