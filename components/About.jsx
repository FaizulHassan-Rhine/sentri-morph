'use client'

import { ArrowRight, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
    question: 'Is there a limit on API usage for free accounts?',
    answer: 'Yes, free accounts have usage limits. Please check our pricing page for detailed information on API limits and upgrade options.',
  },
  {
    question: 'Can Nexus AI integrate with my existing tools?',
    answer: 'Absolutely! Nexus AI offers extensive integration options with popular design and development tools. Check our documentation for available integrations.',
  },
  {
    question: 'How does Nexus AI ensure the security of my data?',
    answer: 'Nexus AI follows industry-standard security practices including encryption, secure data transmission, and compliance with data protection regulations.',
  },
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="bg-[#000000] pt-24">
      {/* About Us Section */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex-1 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About Us
            </h1>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-base md:text-lg">
                SentriMorph is a Bangladesh-based cybersecurity company committed to securing 
                the digital future. We leverage AI, real-time threat analytics, and deep security 
                intelligence to identify, contain, and neutralize threats before they can cause damage.
              </p>
              
              <p className="text-base md:text-lg">
                Our mission is to empower organizations with proactive, adaptive, and scalable 
                defense mechanisms. From vulnerability assessments and penetration testing to 
                endpoint protection and incident response, we deliver enterprise-grade security 
                frameworks tailored to your unique needs.
              </p>
              
              <p className="text-base md:text-lg">
                Guided by global standards such as <strong className="text-white">NIST</strong>, 
                {' '}<strong className="text-white">ISO 27001</strong>, and{' '}
                <strong className="text-white">OWASP</strong>, we align technology, strategy, 
                and human expertise to ensure data confidentiality, integrity, and availability.
              </p>
            </div>
            
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black border border-white text-white hover:bg-[#DC2626]  transition-colors rounded-sm"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 lg:w-1/2">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="SentriMorph Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Title */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Right Column - FAQ List */}
          <div className="lg:w-2/3">
            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-0 py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                  >
                    <span className="text-white font-medium text-lg pr-4">
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-white flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-white flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="pb-6">
                      <p className="text-gray-400 leading-relaxed pr-16">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

