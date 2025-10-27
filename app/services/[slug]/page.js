import Header from '@/components/Header'
import ServiceDetail from '@/components/ServiceDetail'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return [
    { slug: 'penetration-testing-exploitation' },
    { slug: 'threat-response-intelligence' },
    { slug: 'emerging-specialized-security' },
  ]
}

export default function ServicePage({ params }) {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail slug={params.slug} />
      <Footer />
    </main>
  )
}

