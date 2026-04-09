'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      slug: 'what-is-vapt-cybersecurity-guide-2026',
      image: '/images/blog/blog-vapt.webp',
      category: 'Blogging',
      date: 'Nov 7, 2023',
      readTime: '17 min read',
      title: 'What is VAPT? Complete Cybersecurity Guide for 2026',
      description:
        'Learn what VAPT is, how it works, types, process, benefits, and why it\'s crucial for cybersecurity to you.',
    },
  ]

  return (
    <section className="relative bg-black pt-28 pb-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Blogs
          </h1>
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            Read our latest blogs on Cyber Security
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:gap-12">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`} className="block group max-w-xl">
              <article className="h-full flex flex-col rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/[0.06] hover:border-white/15 transition-colors">
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#111]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6 md:p-7">
                  <p className="text-sm text-gray-500 font-light">
                    <span>{post.category}</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2 text-gray-600">•</span>
                    <span>{post.readTime}</span>
                  </p>

                  <h2 className="text-xl md:text-[1.35rem] font-bold text-white mt-4 leading-snug group-hover:text-[#DC2626] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 font-light leading-relaxed mt-3 flex-1 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center gap-2.5 mt-8 pt-2">
                    <img
                      src="/images/logo.png"
                      alt=""
                      className="h-6 w-auto opacity-90"
                      width={120}
                      height={24}
                    />
                    <span className="text-sm text-gray-500 font-light">SentriMorph</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
