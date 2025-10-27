import Header from '@/components/Header'
import Hero from '@/components/Hero'
import CyberDefense from '@/components/CyberDefense'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CyberDefense />
      <Services />
      <Industries />
      <Contact />
      <Footer />
    </main>
  )
}

