import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Astor',
  description: 'Schedule a free 30-minute consult. Walk us through one lot and we\'ll show you where software fixes the rework — built for cabinet, countertop, door, and flooring subs.',
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
