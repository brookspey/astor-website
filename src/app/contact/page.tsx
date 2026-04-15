import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Astor',
  description: 'Schedule a free consultation. We\'ll learn how your business runs and show you what custom software could look like for your operation.',
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
