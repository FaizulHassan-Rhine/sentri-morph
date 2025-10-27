'use client'

import { Shield } from 'lucide-react'
import Link from 'next/link'
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="SentriMorph" className="w-40 h-8" />
         
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors relative ${
              activeSection === 'home' 
                ? 'text-[#DC2626]' 
                : 'text-white hover:text-[#DC2626]'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DC2626]"></span>
            )}
          </Link>
          <Link 
            href="/#services" 
            className={`text-sm font-medium transition-colors ${
              activeSection === 'services' 
                ? 'text-[#DC2626] border-b-2 border-[#DC2626]' 
                : 'text-white hover:text-[#DC2626] border-b-2 border-transparent'
            }`}
          >
            Services
           
          </Link>
          <Link 
            href="/#industries" 
            className={`text-sm font-medium transition-colors ${
              activeSection === 'industries' 
                ? 'text-[#DC2626] border-b-2 border-[#DC2626]' 
                : 'text-white hover:text-[#DC2626] border-b-2 border-transparent'
            }`}
          >
            Industries
          </Link>
          <Link 
            href="/blogs" 
            className={`text-sm font-medium transition-colors ${
              activeSection === 'blogs' 
                ? 'text-[#DC2626] border-b-2 border-[#DC2626]' 
                : 'text-white hover:text-[#DC2626] border-b-2 border-transparent'
            }`}
          >
            Blogs
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors ${
              activeSection === 'about' 
                ? 'text-[#DC2626] border-b-2 border-[#DC2626]' 
                : 'text-white hover:text-[#DC2626] border-b-2 border-transparent'
            }`}
          >
            About Us
          </Link>
        </div>
        
        <Link 
          href="/#contact" 
          className="px-6 py-2 bg-black border border-white text-white text-sm font-medium hover:bg-[#DC2626]  transition-colors"
        >
          Get In Touch
        </Link>
      </nav>
    </header>
  )
}

