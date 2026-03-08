import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Astor',
  description: 'Book a free strategy call. We\'ll audit your online presence live and show you what your agency should have been doing all along.',
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  )
}
