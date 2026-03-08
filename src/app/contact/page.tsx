import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact — Astor',
  description: 'Book a free strategy call or send us a message. We\'ll look at your online presence and show you what\'s possible.',
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
