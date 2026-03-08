import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import WhoWeHelp from '@/components/WhoWeHelp'
import HowItWorks from '@/components/HowItWorks'
import PackageOverview from '@/components/PackageOverview'
import TrustSection from '@/components/TrustSection'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoWeHelp />
      <HowItWorks />
      <PackageOverview />
      <TrustSection />
      <CTA />
      <Footer />
    </main>
  )
}
