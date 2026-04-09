'use client'

import { Home, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { vaptArticleContent } from '@/data/vaptArticleContent'

function renderRichText(text) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return (
        <strong key={idx} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={idx}>{part}</span>
  })
}

function ArticleContent({ content }) {
  const lines = content.split('\n')
  const blocks = []
  let i = 0
  let key = 0
  let firstTextBlock = true

  while (i < lines.length) {
    const raw = lines[i]
    const line = raw.trimEnd()
    const t = line.trim()

    if (t.startsWith('#### ')) {
      blocks.push(
        <h4
          key={key++}
          className="text-[1.35rem] sm:text-[1.6rem] font-medium text-white mt-10 mb-4 tracking-tight scroll-mt-28"
        >
          {t.slice(5)}
        </h4>
      )
      i++
      continue
    }
    if (t.startsWith('### ')) {
      blocks.push(
        <h3
          key={key++}
          className="text-[1.35rem] sm:text-[1.6rem] font-medium text-white mt-10 mb-4 tracking-tight scroll-mt-28"
        >
          {t.slice(4)}
        </h3>
      )
      i++
      continue
    }
    if (t.startsWith('## ')) {
      blocks.push(
        <h2
          key={key++}
          className="text-[1.35rem] sm:text-[1.6rem] font-medium text-white mt-10 mb-4 tracking-tight scroll-mt-28"
        >
          {t.slice(3)}
        </h2>
      )
      i++
      continue
    }
    if (t.startsWith('- ')) {
      const items = []
      while (i < lines.length) {
        const lt = lines[i].trim()
        if (!lt.startsWith('- ')) break
        items.push(lt.slice(2))
        i++
      }
      blocks.push(
        <ul
          key={key++}
          className="list-disc pl-5 sm:pl-6 space-y-3 my-6 text-[15px] sm:text-base text-gray-400 marker:text-[#DC2626]"
        >
          {items.map((item, idx) => (
            <li key={idx} className="leading-relaxed pl-1">
              {renderRichText(item)}
            </li>
          ))}
        </ul>
      )
      continue
    }
    if (t === '') {
      i++
      continue
    }
    if (firstTextBlock) {
      blocks.push(
        <h3
          key={key++}
          className="text-[1.35rem] sm:text-[1.6rem] font-medium text-white mt-10 mb-4 tracking-tight scroll-mt-28"
        >
          {renderRichText(line)}
        </h3>
      )
      firstTextBlock = false
      i++
      continue
    }
    blocks.push(
      <p key={key++} className="text-[15px] sm:text-base text-gray-400 leading-[1.75]">
        {renderRichText(line)}
      </p>
    )
    firstTextBlock = false
    i++
  }

  return <div className="space-y-5">{blocks}</div>
}

const blogData = {
  'what-is-vapt-cybersecurity-guide-2026': {
    title: 'What is VAPT? Complete Cybersecurity Guide for 2026',
    author: 'SentriMorph',
    category: 'Blogging',
    date: 'November 7, 2023',
    dateDisplay: 'Nov 7, 2023',
    readTime: '17 min read',
    breadcrumbLabel: 'what-is-vapt',
    heroImage: '/images/blog/blog-vapt.webp',
    content: vaptArticleContent,
  },
}

const relatedBlogs = []

const faqs = [
  {
    question: 'What is the difference between Vulnerability Assessment (VA) and Penetration Testing (PT)?',
    answer:
      'VA identifies and lists security weaknesses in a system. And PT is trying to exploit those weaknesses to understand how serious they are and what damage they could cause.',
  },
  {
    question: 'How much does VAPT cost?',
    answer:
      'The cost varies based on how big and complex your systems are. Since every organization has unique needs, there is no fixed price. To find out the cost for your situation, you need to contact them directly.',
  },
  {
    question: 'Can VAPT be done internally?',
    answer:
      'Your team can achieve good results if they have the right skills and tools. Still, many organizations choose to hire outside experts for more detailed insights and unbiased results.',
  },
  {
    question: 'What are VAPT certifications?',
    answer:
      'These are professional credentials that show someone is trained in ethical hacking and security testing. Common ones include CEH, OSCP, and CompTIA Security+.',
  },
  {
    question: 'Does VAPT guarantee 100% security?',
    answer:
      'No. VAPT helps lower risks by finding and fixing known issues, but no system is completely safe. New threats can always appear.',
  },
  {
    question: 'What happens after VAPT?',
    answer:
      'You will get a report that details the vulnerabilities found, shows how severe they are, and suggests ways to fix them. Your team can identify these problems and improve security.',
  },
  {
    question: 'What tools are used in VAPT?',
    answer:
      'Popular tools include Nessus, Burp Suite, Metasploit, Nikto, OWASP ZAP, etc. Each tool serves a different purpose scanning, exploiting, or analyzing.',
  },
  {
    question: 'Can VAPT cause system downtime?',
    answer:
      "It can, especially during aggressive testing. That's why it's usually done in controlled environments or during off-peak hours.",
  },
  {
    question: 'What are the types of VAPT?',
    answer:
      'VAPT can target different areas such as networks, web and mobile applications, cloud platforms, APIs, IoT devices, social engineering, and physical security.',
  },
  {
    question: 'How often should VAPT be performed?',
    answer:
      'At least once a year, or whenever there are major changes to your systems, new applications are launched, or sensitive data is being handled.',
  },
]

export default function BlogDetail({ slug }) {
  const [openFaq, setOpenFaq] = useState(null)

  const post = blogData[slug]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  if (!post) {
    return (
      <div className="bg-[#000000] pt-24 min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-white mb-4">Article not found</h1>
          <p className="text-gray-400 mb-8">This blog post does not exist or has been moved.</p>
          <Link href="/blogs" className="text-[#DC2626] hover:underline font-medium">
            Back to Blogs
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbLast = post.breadcrumbLabel ?? slug
  const dateLine = post.dateDisplay ?? post.date
  const readTimeLine = post.readTime

  return (
    <div className="bg-[#000000] pt-24">
      <div className="container mx-auto max-w-4xl px-6 pt-6 pb-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" strokeWidth={1.75} />
          </Link>
          <span className="text-gray-600 select-none" aria-hidden>
            &gt;
          </span>
          <Link href="/blogs" className="text-gray-400 hover:text-white transition-colors">
            Blog
          </Link>
          <span className="text-gray-600 select-none" aria-hidden>
            &gt;
          </span>
          <span className="text-gray-400 truncate max-w-[min(100%,14rem)]">{breadcrumbLast}</span>
        </nav>
      </div>

      <article className="container mx-auto max-w-4xl px-6 pb-8 md:pb-12">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-bold text-white leading-[1.15] tracking-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt=""
                className="h-5 w-auto"
                width={112}
                height={22}
              />
            </span>
            <span className="text-gray-600">•</span>
            <span>{post.category}</span>
            {readTimeLine && (
              <>
                <span className="text-gray-600">•</span>
                <span>{readTimeLine}</span>
              </>
            )}
            <span className="text-gray-600">•</span>
            <span>{dateLine}</span>
          </div>
        </header>

        <div className="relative w-full aspect-[21/9] min-h-[220px] sm:min-h-[280px] md:min-h-[320px] mb-12 rounded-xl overflow-hidden bg-[#0a0a0a] ring-1 ring-white/[0.06]">
          <Image
            src={post.heroImage}
            alt=""
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="max-w-none">
          <ArticleContent content={post.content} />
        </div>
      </article>

      {relatedBlogs.filter((blog) => blog.slug !== slug).length > 0 && (
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-4">
            <span className="text-xs text-gray-500 uppercase tracking-wider">RELATED BLOGS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Our latest news and articles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedBlogs
              .filter((blog) => blog.slug !== slug)
              .map((blog) => (
                <Link key={blog.id} href={`/blogs/${blog.slug}`}>
                  <article className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                    <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3 font-light">
                        <span>{blog.category}</span>
                        <span>•</span>
                        <span>{blog.date}</span>
                        <span>•</span>
                        <span>{blog.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#DC2626] transition-colors">
                        {blog.title}
                      </h3>
                      <div className="flex items-center gap-2.5">
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="h-5 w-auto opacity-90"
                          width={100}
                          height={20}
                        />
                        <span className="text-xs text-gray-400 font-light">SentriMorph</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      )}

      <section className="border-t border-white/[0.06] bg-black" aria-labelledby="blog-faq-heading">
        <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
            <div
              className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] sm:w-1 bg-gradient-to-b from-[#9f2d45] via-[#5c1a2a] to-[#1a0508] opacity-90"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -left-24 top-1/2 h-[120%] w-48 -translate-y-1/2 rounded-full bg-[#6b2035]/25 blur-3xl"
              aria-hidden
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 pl-8 sm:pl-12">
              <div className="lg:pr-4">
                <h2
                  id="blog-faq-heading"
                  className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight"
                >
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="min-w-0 divide-y divide-white/[0.08]">
                {faqs.map((faq, index) => (
                  <div key={index} className="first:pt-0">
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-white/[0.02] sm:py-[1.125rem]"
                      aria-expanded={openFaq === index}
                    >
                      <span className="text-[15px] sm:text-base font-medium text-white leading-snug pr-2">
                        {faq.question}
                      </span>
                      <span className="shrink-0 pt-0.5 text-white/90">
                        {openFaq === index ? (
                          <Minus className="h-5 w-5" strokeWidth={1.75} />
                        ) : (
                          <Plus className="h-5 w-5" strokeWidth={1.75} />
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="pb-5 pt-0">
                        <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

