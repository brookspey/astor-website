import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Astor',
  description: 'Schedule a free 30-minute consult. Trace one lot with us — we\'ll show you where the gap between the job site and the office costs you most. Built for door and window subs.',
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
