import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import CaseStudiesPreview from '@/components/CaseStudiesPreview'
import BigStat from '@/components/BigStat'
import WhyAstor from '@/components/WhyAstor'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <SocialProof />
      <HowItWorks />
      <CaseStudiesPreview />
      <BigStat />
      <WhyAstor />
      <CTA />
      <Footer />
    </main>
  )
}
