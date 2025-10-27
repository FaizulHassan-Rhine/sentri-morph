'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Blogs() {
  const blogPosts = [
   
    {
      id: 2,
      slug: 'a-guide-to-ai-driven-design-with-nexus',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
      category: 'Blogging',
      date: 'Nov 22, 2023',
      readTime: '7 min read',
      title: 'A Guide to AI-Driven Design with Nexus',
      description: 'Explore the impact of AI on design creativity. This blog post will delve into how Nexus AI.',
      author: {
        name: 'Olena Kucherenko',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      },
    },
    {
      id: 3,
      slug: 'enhancing-shopify-stores-with-nexus-ai',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      category: 'Blogging',
      date: 'Dec 27, 2023',
      readTime: '5 min read',
      title: 'Enhancing Shopify Stores with Nexus AI',
      description: 'In the dynamic world of e-commerce, standing out from the crowd is crucial.',
      author: {
        name: 'David Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      },
    },
    {
      id: 4,
      slug: 'mobile-app-support-and-nexus-ai',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
      category: 'ChatGPT',
      date: 'Dec 6, 2023',
      readTime: '6 min read',
      title: 'Mobile App Support and Nexus AI',
      description: 'In a world where creativity knows no bounds, the ability to design and generate.',
      author: {
        name: 'Olena Kucherenko',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
      },
    },
    {
      id: 5,
      slug: 'figma-collaboration-reinvented-nexus-ai-integration-guide',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      category: 'PhotoNexus',
      date: 'Nov 3, 2023',
      readTime: '6 min read',
      title: 'Figma Collaboration Reinvented: Nexus AI Integration Guide',
      description: 'In the realm of collaborative design, Figma stands as a powerful platform that facilitates teamwork.',
      author: {
        name: 'Anastasia Solovyova',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      },
    },
    {
      id: 6,
      slug: 'optimizing-design-workflow-nexus-ai-and-framer-integration',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      category: 'Blogging',
      date: 'Sep 23, 2023',
      readTime: '8 min read',
      title: 'Optimizing Design Workflow: Nexus AI and Framer Integration',
      description: 'In the dynamic world of design, efficiency is key. Every creative journey is a delicate.',
      author: {
        name: 'David Johnson',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      },
    },
  ]

  return (
    <section className="relative py-24 px-6 bg-[#000000]">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blogs
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Upgrade for extra features and collaboration with your team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blogs/${post.slug}`}>
              <article className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                {/* Image */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden bg-gray-900">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 mb-3 font-light">
                    <span>{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 leading-tight group-hover:text-[#DC2626] transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-4 font-light leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full overflow-hidden ring-1 ring-white/10">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs md:text-sm text-gray-400 font-light">
                      {post.author.name}
                    </span>
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

