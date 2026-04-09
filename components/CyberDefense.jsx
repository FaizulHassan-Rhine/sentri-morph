'use client'

import { Bug, FileSearch, Lock } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function CyberDefense() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  const features = [
    {
      icon: Lock,
      title: 'Penetration Testing & Exploitation',
      description: 'Simulate real-world attacks to uncover hidden vulnerabilities before adversaries do.',
    },
    {
      icon: FileSearch,
      title: 'Threat Response & Intelligence',
      description: 'Detect, contain, and recover from active threats with precision.',
    },
    {
      icon: Bug,
      title: 'Emerging & Specialized Security',
      description: 'Go beyond standard protection with advanced, specialized audits.',
    },
  ]

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.22 }
    )

    observer.observe(sectionEl)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-black px-6 py-6 md:py-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-[-280px] md:top-[0px] h-[720px] z-0 overflow-hidden">
        {/* Mobile frame */}
        <div className="relative h-full w-full md:hidden">
          <Image
            src="/images/frame-mobile.png"
            alt="Mobile frame background"
            fill
            priority
            className="object-contain object-top"
          />
        </div>
        {/* Desktop frame */}
        <div className="relative hidden h-full w-full md:block scale-[1.14]">
          <Image
            src="/images/frame.png"
            alt="Desktop frame background"
            fill
            priority
            className="object-contain object-top"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(117,31,48,0.14)_0%,rgba(0,0,0,0)_62%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-3xl text-center pt-16 md:pt-48">
          <h2 className="text-lg md:text-[3.35rem] font-medium leading-tight text-white tracking-tight">
            <span className="text-[#DC3A5B]">SentriMorph</span> as Your Advanced
            <br />
            Cyber Defense Partner
          </h2>
          <p className="mx-auto mt-4 w-[75%] md:max-w-xl text-[12px] md:text-[15px] leading-relaxed text-gray-400">
            Protect your business with intelligent, adaptive security. SentriMorph identifies,
            responds, and strengthens - turning every threat into an opportunity for resilience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`mx-auto w-full max-w-[280px] text-left transition-all duration-1000 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 220}ms` }}
              >
                <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.03]">
                  <Icon className="h-4.5 w-4.5 text-white/90" strokeWidth={1.75} />
                </div>
                <h3 className="text-[20px] md:text-[26px] leading-[1.08] font-medium tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-gray-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

