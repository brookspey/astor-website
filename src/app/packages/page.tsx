import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTA from '@/components/CTA'
import PackagesContent from './PackagesContent'

export const metadata: Metadata = {
  title: 'Packages — Astor',
  description: 'Two clear packages to get your local business found online. No hidden fees, no long contracts.',
}

export default function PackagesPage() {
  return (
    <main>
      <Navbar />
      <PackagesContent />
      <CTA headline="Not sure which package is right?" subtext="Book a free strategy call and we'll recommend the best fit for your business and goals." />
      <Footer />
    </main>
  )
}
