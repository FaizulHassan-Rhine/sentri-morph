import Header from '@/components/Header'
import PrivacyPolicy from '@/components/PrivacyPolicy'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - SentriMorph',
  description: 'Privacy Policy for SentriMorph cybersecurity services.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </main>
  )
}

