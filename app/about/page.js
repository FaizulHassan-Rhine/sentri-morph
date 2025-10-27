import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us - SentriMorph',
  description: 'Learn about SentriMorph, a Bangladesh-based cybersecurity company committed to securing the digital future.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <About />
      <Footer />
    </main>
  )
}

