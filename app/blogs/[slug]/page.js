import Header from '@/components/Header'
import BlogDetail from '@/components/BlogDetail'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  // In a real app, you'd fetch this from a CMS or API
  const slugs = [
    'figma-collaboration-reinvented-nexus-ai-integration-guide',
    'a-guide-to-ai-driven-design-with-nexus',
    'enhancing-shopify-stores-with-nexus-ai',
    'mobile-app-support-and-nexus-ai',
    'optimizing-design-workflow-nexus-ai-and-framer-integration',
    'this-is-a-post',
  ]
  
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

