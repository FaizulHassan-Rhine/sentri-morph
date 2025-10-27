import Header from '@/components/Header'
import TermsOfService from '@/components/TermsOfService'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - SentriMorph',
  description: 'Terms of Service for SentriMorph cybersecurity services.',
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TermsOfService />
      <Footer />
    </main>
  )
}

