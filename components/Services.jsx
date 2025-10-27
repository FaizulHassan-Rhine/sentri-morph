'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      slug: 'penetration-testing-exploitation',
      title: 'Penetration Testing & Exploitation',
      description: 'We don\'t just look for weaknesses - we think like attackers to expose them. From web apps to cloud infrastructure, we leverage different attack techniques across your web apps, mobile apps, cloud infrastructure, and internal networks. Every test delivers actionable insights helping you strengthen defenses and close gaps before they turn into breaches.',
      imageUrl: '/images/Penetration.png',
      imageLeft: true,
    },
    {
      slug: 'threat-response-intelligence',
      title: 'Threat Response & Intelligence',
      description: 'When an incident occurs, every second matters. SentriMorph helps you quickly detect, contain, and eliminate threats, minimizing the impact and restoring systems with precision. Through forensic investigation and deep malware analysis, we uncover how attacks happened and ensure they never happen again.',
      imageUrl: '/images/Threat.png',
      imageLeft: false,
    },
    {
      slug: 'emerging-specialized-security',
      title: 'Emerging & Specialized Security',
      description: 'As technology advances, so do the risks. Our specialized division tackles complex areas like IoT, firmware, and hardware vulnerabilities - ensuring even your most advanced systems stay secure. Through red team simulations and adversary exercises, we prepare your organization for what\'s next - not just what\'s known.',
      imageUrl: '/images/Emerging.png',
      imageLeft: true,
    },
  ]

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Here is our list of services
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative h-96 rounded-lg overflow-hidden">
                <div className="absolute inset-0  z-10" />
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className={`text-3xl font-bold mb-6 text-white`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg font-light mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black border border-white text-white hover:bg-[#DC2626] transition-colors text-sm font-medium"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

