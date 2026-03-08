import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import ResultsContent from './ResultsContent'

export const metadata: Metadata = {
  title: 'Results — Astor',
  description: 'Your agency promised these numbers. We actually deliver them. See real results from businesses that switched to AI-powered marketing.',
}

export default function ResultsPage() {
  return (
    <main>
      <Navbar />
      <ResultsContent />
      <CTA headline="Want results like these? Hire Astor." subtext="Stop waiting for your agency to figure it out. Book a free strategy call and see what Astor would do for your business on day one." />
      <Footer />
    </main>
  )
}
