'use client'

import { Lock, FileSearch, Bug, User } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

// Custom icon component for padlock with person silhouette
const LockWithUser = ({ className }) => (
  <div className={className} style={{ position: 'relative', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Lock className="w-full h-full text-white" strokeWidth={1.5} />
    <User className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-5 text-white" strokeWidth={2.5} fill="white" />
  </div>
)

export default function CyberDefense() {
  const [visibleCards, setVisibleCards] = useState([false, false, false])
  const cardRefs = useRef([])

  const features = [
    {
      icon: LockWithUser,
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
    const observers = []

    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate in when entering viewport
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            } else {
              // Reset animation when leaving viewport
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = false
                return newState
              })
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px',
        }
      )

      observer.observe(cardRef)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#000000]">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Frame background graphic - positioned behind title and description */}
      <div className="absolute top-0 left-0 w-full h-[700px] md:h-[900px] z-0 pointer-events-none overflow-hidden">
        {/* Mobile Frame */}
        <div className="relative w-full h-full md:hidden">
          <Image
            src="/images/frame-mobile.png"
            alt="Cyber Defense Frame Mobile"
            fill
            className="object-contain object-top"
            priority
            style={{ objectPosition: 'top center' }}
          />
        </div>
        {/* Desktop Frame */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/images/frame.png"
            alt="Cyber Defense Frame"
            fill
            className="object-contain object-top"
            priority
            style={{ objectPosition: 'top center' }}
          />
        </div>
      </div>

      {/* Background glow - elliptical shape from top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[800px] bg-[#DC2626]/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 z-0" />
      
      <div className=" container pt-32 mx-auto max-w-7xl relative z-10">
        <div className=" mb-16 relative z-20">
          <h2 className="text-3xl md:text-4xl text-center  font-bold mb-4">
            <span className="text-white ">SentriMorph as Your Advanced</span>
            <br />
            <span className="text-[#DC2626]">Cyber Defense Partner</span>
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-400 leading-relaxed font-light">
            Protect your business with intelligent, adaptive security. SentriMorph identifies, 
            responds, and strengthens — turning every threat into an opportunity for resilience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 justify-center items-center mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isCustomIcon = index === 0 // First icon is custom LockWithUser
            const isVisible = visibleCards[index]
            
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`flex flex-col items-start transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon with circular background */}
                <div className="relative mb-6">
                  <div className="w-10 h-10 rounded-full bg-black border-2 border-white flex items-center justify-center">
                    {isCustomIcon ? (
                      <Icon className="text-white" />
                    ) : (
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    )}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-wrap text-start leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}

