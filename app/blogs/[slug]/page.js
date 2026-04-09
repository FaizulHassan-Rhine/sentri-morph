import Header from '@/components/Header'
import BlogDetail from '@/components/BlogDetail'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  const slugs = ['what-is-vapt-cybersecurity-guide-2026']
  
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }) {
  return (
    <main className="min-h-screen">
      <Header />
      <BlogDetail slug={params.slug} />
      <Footer />
    </main>
  )
}

