'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative py-16 lg:py-60 flex items-center justify-center  px-6 overflow-hidden bg-[#000000]">
      {/* Background gradient - subtle black to dark red/burgundy */}
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#000000] to-[#1a0000]">
        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
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
      </div>

      {/* Main Container - Two Column Layout */}
      <div className="relative z-10 container  mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Content - Left Side */}
          <div className="w-full md:w-2/5 lg:w-2/4">
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-4 md:mb-6 leading-tight text-left">
              <span className="text-white">Every click is an entry point</span>
              <br />
              <span className="text-[#DC2626]">We close every one of them</span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed font-light text-left max-w-2xl">
              In today&apos;s connected world, every organization faces invisible risks. 
              SentriMorph delivers intelligent protection that shields your data, infrastructure, 
              and reputation — so you can focus on growth while we guard every digital doorway.
            </p>
            
            <div className="text-left">
              <Link 
                href="#contact"
                className="inline-block px-8 py-3 bg-black border border-white text-white text-sm font-medium hover:bg-[#DC2626]  transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Globe Graphic - Right Side - Full Size */}
          <div className="w-full md:w-3/5 lg:w-2/4 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer glow effect */}
              <div className="absolute inset-0 bg-[#DC2626]/10 rounded-full blur-3xl" />
              
              {/* Globe sphere with grid structure */}
              <div className="relative w-full h-full">
                <img src="/images/Every-click2.png" alt="Globe" className="w-full h-full " />
              </div>
            </div>
          </div>
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

