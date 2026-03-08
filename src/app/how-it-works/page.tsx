import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import HowItWorksContent from './HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works — Astor',
  description: 'Your agency takes months to ramp up. We start day one. See our 5-step process to replace your marketing agency with AI that actually delivers.',
}

export default function HowItWorksPage() {
  return (
    <main>
      <Navbar />
      <HowItWorksContent />
      <CTA />
      <Footer />
    </main>
  )
}
