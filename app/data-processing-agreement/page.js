import Header from '@/components/Header'
import DataProcessingAgreement from '@/components/DataProcessingAgreement'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Data Processing Agreement - SentriMorph',
  description: 'Data Protection & Responsible Disclosure Policy for SentriMorph cybersecurity services.',
}

export default function DataProcessingAgreementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <DataProcessingAgreement />
      <Footer />
    </main>
  )
}

