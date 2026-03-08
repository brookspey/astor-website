import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import HowItWorksContent from './HowItWorksContent'

export const metadata: Metadata = {
  title: 'How It Works — Astor',
  description: 'Our 5-step process to get your local business found online. From strategy call to ongoing growth.',
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
