'use client'

import { Calendar, User, Tag, ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const blogData = {
  'figma-collaboration-reinvented-nexus-ai-integration-guide': {
    title: 'Figma Collaboration Reinvented: Nexus AI Integration Guide',
    author: 'Annette Robertson',
    category: 'Productivity',
    date: 'November 2, 2023',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    content: `
      In the realm of collaborative design, Figma stands as a powerful platform that facilitates teamwork and streamlines the design process. With the integration of Nexus AI, teams can now take their collaborative efforts to new heights, leveraging artificial intelligence to enhance productivity and creativity.

      ## The Nexus Advantage in Figma Collaboration

      ### 1. Real-time Content Generation in Figma
      Nexus AI enables designers to generate content directly within Figma, creating text, images, and UI elements in real-time. This eliminates the need to switch between multiple tools and keeps the entire design workflow within Figma's collaborative environment.

      ### 2. Intelligent Design Suggestions for Cohesion
      The AI analyzes your design patterns and suggests cohesive elements that match your existing style. This ensures consistency across all team members' contributions, reducing the need for extensive revision cycles.

      ## Setting Up Nexus AI In Your Figma Workspace

      ### 1. Installing the Nexus AI Figma Plugin
      Installing Nexus AI is straightforward. Simply navigate to the Figma Community, search for "Nexus AI," and click install. The plugin will appear in your Figma plugins menu, ready to enhance your workflow.

      ### 2. Configuring Integration Settings
      Once installed, configure Nexus AI according to your team's needs. Set up design preferences, content guidelines, and collaboration rules to ensure the AI aligns with your project requirements.

      ## Collaborative Success Stories: Nexus AI in Figma Projects

      ### 1. Streamlining Team Collaboration
      Teams using Nexus AI report significant improvements in collaboration efficiency. Design iterations happen faster, and team members can focus on creativity rather than repetitive tasks.

      ### 2. Effective Design Review and Feedback
      Nexus AI facilitates smoother design reviews by generating comprehensive documentation and suggestions automatically, making it easier for stakeholders to provide actionable feedback.

      ## Why Choose AI for Figma Collaboration?

      ### 1. Unified Design Environment
      Nexus AI keeps everything within Figma, eliminating context switching and maintaining focus on design work.

      ### 2. Enhanced Productivity and Design Quality
      By automating routine tasks, Nexus AI allows designers to concentrate on strategic thinking and creative problem-solving, resulting in higher-quality designs.

      ## Future Innovations: Nexus AI and Figma's Collaborative Horizon

      ### 1. Continuous Updates and User-Driven Improvements
      Nexus AI continuously evolves based on user feedback and emerging design trends, ensuring teams always have access to cutting-edge collaborative tools.

      ### 2. Community Engagement: Shaping the Future of Figma Collaboration
      The Nexus AI community actively contributes to feature development, creating a tool that truly serves the needs of modern design teams.

      ## Conclusion: Elevate Your Collaborative Design Experience

      Integrating Nexus AI with Figma transforms the collaborative design process, enabling teams to work more efficiently and produce exceptional results. Whether you're a solo designer or part of a large team, Nexus AI's intelligent features will enhance your Figma workflow and help you achieve your design goals faster.
    `,
  },
}

const relatedBlogs = [
  {
    id: 1,
    slug: 'this-is-a-post',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80',
    category: 'Blogging',
    date: 'Nov 23, 2023',
    readTime: '0 min read',
    title: 'This is a post',
    author: {
      name: 'Ivy Shiny',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    },
  },
  {
    id: 2,
    slug: 'a-guide-to-ai-driven-design-with-nexus',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80',
    category: 'Blogging',
    date: 'Nov 22, 2023',
    readTime: '7 min read',
    title: 'A Guide to AI-Driven Design with Nexus',
    author: {
      name: 'Clara Carter',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
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
    author: {
      name: 'David Jensen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    },
  },
]

const faqs = [
  {
    question: 'How do I get started with Nexus AI?',
    answer: 'Getting started with Nexus AI is simple. Install the plugin from the Figma Community, configure your preferences, and start collaborating with AI-powered features.',
  },
  {
    question: 'What types of content can Nexus AI generate?',
    answer: 'Nexus AI can generate text, images, UI elements, and design suggestions that align with your project\'s style and requirements.',
  },
  {
    question: 'Is Nexus AI compatible with all Figma plans?',
    answer: 'Yes, Nexus AI works with all Figma plans, including free, professional, and enterprise tiers.',
  },
  {
    question: 'How does Nexus AI ensure design consistency?',
    answer: 'Nexus AI analyzes your existing design patterns and suggests elements that match your style, ensuring consistency across all team contributions.',
  },
  {
    question: 'Can I customize Nexus AI for my team\'s needs?',
    answer: 'Absolutely! Nexus AI offers extensive customization options, allowing you to configure design preferences, content guidelines, and collaboration rules.',
  },
]

export default function BlogDetail({ slug }) {
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  
  const post = blogData[slug] || blogData['figma-collaboration-reinvented-nexus-ai-integration-guide']

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY')
  }, [])

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-[#000000] pt-24">
      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/blogs" className="hover:text-white transition-colors">
            Blog
          </Link>
          <span>&gt;</span>
          <span className="text-white">{post.title}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Article Content - Left Column */}
          <div className="flex-1 lg:w-2/3">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span className="text-sm">{post.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{post.date}</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-96 md:h-[500px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    )
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-white mt-6 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    )
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />
                  }
                  return (
                    <p key={index} className="text-base text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column - Contact Form */}
          <div className="lg:w-1/3">
            <div className="bg-gray-900/50 border border-white/10 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4">Get In Touch</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition-colors text-sm"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition-colors text-sm"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition-colors resize-none text-sm"
                  />
                </div>
                
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-900/30 border border-green-600/50 rounded-lg text-green-400 text-sm">
                    Message sent successfully!
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-900/30 border border-red-600/50 rounded-lg text-red-400 text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DC2626] hover:bg-[#EF4444] text-white font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Related Blogs */}
      <div className="container mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-4">
          <span className="text-xs text-gray-500 uppercase tracking-wider">RELATED BLOGS</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our latest news and articles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedBlogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.slug}`}>
              <article className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer group">
                <div className="relative w-full h-48 overflow-hidden bg-gray-900">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
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
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#DC2626] transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden ring-1 ring-white/10">
                      <Image
                        src={blog.author.avatar}
                        alt={blog.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs text-gray-400 font-light">
                      {blog.author.name}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openFaq === index ? (
                  <Minus className="w-5 h-5 text-white" />
                ) : (
                  <Plus className="w-5 h-5 text-white" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 py-4 border-t border-white/10">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

