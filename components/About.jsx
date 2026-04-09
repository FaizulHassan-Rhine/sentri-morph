'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <div className="relative bg-[#000000] pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-56 w-[85%] -translate-x-1/2 bg-[radial-gradient(circle_at_center,rgba(159,45,69,0.45)_0%,rgba(159,45,69,0.15)_38%,rgba(0,0,0,0)_72%)] blur-2xl"
        aria-hidden
      />
      {/* About Us Section */}
      <section className="container mx-auto max-w-7xl px-6 py-16 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div className="flex-1 lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-7">
              About Us
            </h1>
            
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-base md:text-[1.1rem]">
                SentriMorph is a Bangladesh-based cybersecurity company committed to securing the digital future through intelligence-driven protection. We leverage advanced AI, real-time threat analytics, and deep security intelligence to identify, contain, and neutralize threats before they escalate.
              </p>
              
              <p className="text-base md:text-[1.1rem]">
                Our mission is to empower organizations with proactive, adaptive, and scalable defense mechanisms. From comprehensive vulnerability assessments and penetration testing to endpoint protection and incident response, SentriMorph delivers enterprise-grade security frameworks designed for resilience.
              </p>
              
              <p className="text-base md:text-[1.1rem]">
                Guided by global standards such as <strong className="text-white">NIST</strong>, 
                {' '}<strong className="text-white">ISO 27001</strong>, and{' '}
                <strong className="text-white">OWASP</strong>, we align technology, strategy, and human expertise to ensure zero compromise in data confidentiality, integrity, and availability.
              </p>
            </div>
            
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-black/70 border border-white/25 text-white hover:bg-[#DC2626] transition-colors rounded-full"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 lg:w-1/2">
            <div className="relative w-full h-[270px] md:h-[360px] rounded-xl border border-white/15 overflow-hidden">
              <Image
                src="/images/about-us.webp"
                alt="SentriMorph Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

