'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import CtaOutlineButton from '@/components/CtaOutlineButton'

export default function Services() {
  const [visibleRows, setVisibleRows] = useState([false, false, false])
  const rowRefs = useRef([])

  const services = [
    {
      slug: 'penetration-testing-exploitation',
      title: 'Penetration Testing & Exploitation',
      description: 'We don\'t just look for weaknesses - we think like attackers to expose them. From web apps to cloud infrastructure, we leverage different attack techniques across your web apps, mobile apps, cloud infrastructure, and internal networks. Every test delivers actionable insights helping you strengthen defenses and close gaps before they turn into breaches.',
      imageUrl: '/images/services/penetration-testing.webp',
      imageLeft: true,
    },
    {
      slug: 'threat-response-intelligence',
      title: 'Threat Response & Intelligence',
      description: 'When an incident occurs, every second matters. SentriMorph helps you quickly detect, contain, and eliminate threats, minimizing the impact and restoring systems with precision. Through forensic investigation and deep malware analysis, we uncover how attacks happened and ensure they never happen again.',
      imageUrl: '/images/services/threat-response-and-intelligence.webp',
      imageLeft: false,
    },
    {
      slug: 'emerging-specialized-security',
      title: 'Emerging & Specialized Security',
      description: 'As technology advances, so do the risks. Our specialized division tackles complex areas like IoT, firmware, and hardware vulnerabilities - ensuring even your most advanced systems stay secure. Through red team simulations and adversary exercises, we prepare your organization for what\'s next - not just what\'s known.',
      imageUrl: '/images/services/emerging-and-specialized-security.webp',
      imageLeft: true,
    },
  ]

  useEffect(() => {
    const observers = []

    rowRefs.current.forEach((row, index) => {
      if (!row) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibleRows((prev) => {
            const next = [...prev]
            next[index] = entry.isIntersecting
            return next
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(row)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  const getRowAnimationClass = (index) => {
    const isVisible = visibleRows[index]
    const fromRight = index === 0 || index === 2
    if (isVisible) return 'opacity-100 translate-x-0'
    return fromRight ? 'opacity-0 translate-x-12' : 'opacity-0 -translate-x-12'
  }

  return (
    <section id="services" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-3">
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
              ref={(el) => (rowRefs.current[index] = el)}
              className={`flex flex-col ${service.imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 transition-all duration-1000 ease-out ${getRowAnimationClass(index)}`}
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
                <h3 className={`text-[2rem] md:text-[24px] font-medium mb-5 text-white`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-[16px] font-light mb-6">
                  {service.description}
                </p>
                <CtaOutlineButton href={`/services/${service.slug}`} size="compact">
                  Learn More
                </CtaOutlineButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

