'use client'

import Link from 'next/link'
import CtaOutlineButton from '@/components/CtaOutlineButton'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()
  
  useEffect(() => {
    // Set active section based on current pathname
    if (pathname === '/blogs' || pathname.startsWith('/blogs/')) {
      setActiveSection('blogs')
    } else if (pathname === '/about') {
      setActiveSection('about')
    } else if (pathname.startsWith('/services/')) {
      setActiveSection('services')
    } else if (pathname === '/') {
      // Only use scroll detection on homepage
      const handleScroll = () => {
        const sections = ['home', 'services', 'industries', 'contact']
        const scrollPosition = window.scrollY + 100
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
      }
      
      // Handle hash links when page loads
      const handleHashLink = () => {
        if (window.location.hash) {
          const hash = window.location.hash.substring(1)
          setActiveSection(hash)
          setTimeout(() => {
            const element = document.getElementById(hash)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 100)
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      handleHashLink()
      
      return () => window.removeEventListener('scroll', handleScroll)
    } else {
      // For other pages, set default
      setActiveSection('home')
    }
  }, [pathname])
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-hidden border-b border-white/10 bg-[#030102]/75 backdrop-blur-md">
      {/* Maroon glow — matches hero */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 140% 200% at 50% 0%, rgba(125, 44, 62, 0.5) 0%, rgba(70, 22, 34, 0.22) 42%, transparent 68%),
            linear-gradient(to bottom, rgba(90, 30, 45, 0.38) 0%, rgba(3, 1, 2, 0.15) 55%, transparent 100%)
          `,
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(rgba(175, 65, 85, 0.45) 1px, transparent 1px),
            radial-gradient(rgba(120, 45, 60, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '14px 14px, 14px 14px',
          backgroundPosition: '0 0, 7px 7px',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
        }}
      />
      <nav className="container relative z-10 mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="SentriMorph" className="w-40 h-8" />
         
        </Link>
        
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === 'home'
                ? 'text-white'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70" />
            )}
          </Link>
          <Link
            href="/#services"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === 'services'
                ? 'text-white'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Services
            {activeSection === 'services' && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70" />
            )}
          </Link>
          <Link
            href="/#industries"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === 'industries'
                ? 'text-white'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Industries
            {activeSection === 'industries' && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70" />
            )}
          </Link>
          <Link
            href="/blogs"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === 'blogs'
                ? 'text-white'
                : 'text-white/80 hover:text-white'
            }`}
          >
            Blogs
            {activeSection === 'blogs' && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70" />
            )}
          </Link>
          <Link
            href="/about"
            className={`relative text-sm font-medium transition-colors ${
              activeSection === 'about'
                ? 'text-white'
                : 'text-white/80 hover:text-white'
            }`}
          >
            About Us
            {activeSection === 'about' && (
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-white/70" />
            )}
          </Link>
        </div>

        <CtaOutlineButton href="/#contact" size="compact">
          Get In Touch
        </CtaOutlineButton>
      </nav>
    </header>
  )
}

