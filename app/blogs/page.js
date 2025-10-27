import Header from '@/components/Header'
import Blogs from '@/components/Blogs'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blogs - SentriMorph',
  description: 'Read our latest cybersecurity insights, guides, and industry updates.',
}

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Blogs />
      <Footer />
    </main>
  )
}

