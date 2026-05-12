import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhoWeHelp from '@/components/WhoWeHelp'
import Workflow from '@/components/Workflow'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <Workflow />
      <CTA />
      <Footer />
    </main>
  )
}
