'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Industries() {
  const [openIndex, setOpenIndex] = useState(null)

  const industries = [
    'Healthcare & Life Sciences',
    'Finance & FinTech',
    'Manufacturing & Industrial Systems',
    'Technology & SaaS Providers',
    'Telecom & Digital Services',
    'Retail & eCommerce',
    'Government & Public Sector',
    'Energy, Logistics & Infrastructure',
    'Education & Research Institutions',
  ]

  const toggleIndustry = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="industries" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Left side - Text */}
          <div className='mb-16'>
            <h2 className="text-4xl md:text-5xl text-center font-bold text-white mb-6">
              We Secure Businesses
            </h2>
            <p className="text-base max-w-3xl mx-auto text-gray-300 text-center leading-relaxed">
              Every business operates in a unique digital ecosystem - and so do its threats. 
              SentriMorph provides adaptive, AI-powered cybersecurity designed to fit the needs, 
              risks, and compliance requirements of diverse sectors worldwide.
            </p>
          </div>

          {/* Right side - Accordion */}
          <div className="space-y-2">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleIndustry(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                >
                  <span className="text-white font-medium">{industry}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t border-white/10">
                    <p className="text-gray-400">
                      Detailed information about how SentriMorph secures {industry.toLowerCase()} 
                      through specialized solutions tailored to industry-specific threats and compliance requirements.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

