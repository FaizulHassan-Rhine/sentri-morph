'use client'

import { useState, useEffect } from 'react'
import { Mail, ChevronDown } from 'lucide-react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_rtyqz4m'
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_v65ewej'
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '2pksZhy_CdsM-h4my'

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    company: '',
    phone: '',
    location: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  useEffect(() => {
    if (!submitStatus) return

    const timeoutId = setTimeout(() => {
      setSubmitStatus(null)
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [submitStatus])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.username,
          from_email: formData.email,
          company: formData.company,
          phone: formData.phone,
          location: formData.location,
          service: formData.service,
          message: `Service: ${formData.service || 'N/A'}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nLocation: ${formData.location || 'N/A'}\n\n${formData.message}`,
        },
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({
          username: '',
          email: '',
          company: '',
          phone: '',
          location: '',
          service: '',
          message: '',
        })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-14 md:gap-16 items-start">
          {/* Left side - Contact Info */}
          <div className="pt-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.02] mb-6">
              <Mail className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Contact us</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-5">
              Get in touch
            </h2>
            
            <p className="text-lg text-gray-300 mb-14 leading-relaxed max-w-xl">
              Please feel free to send us any questions, feedback or suggestions you might have.
            </p>

            <div className="max-w-[420px] border-l border-white/12 pl-5">
              <p className="text-white font-medium text-xl md:text-[1.4rem] leading-tight mb-4">
                Each sector faces different threat vectors - but all demand one thing: trust.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                SentriMorph builds that trust through intelligent automation, adaptive security,
                and constant vigilance - keeping your business, your data, and your customers protected.
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-[#08090c] border border-white/10 rounded-xl p-6 md:p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location (Optional)"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors"
                />
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full appearance-none px-4 pr-12 py-3 bg-[#0a0c10] border border-[#2a2f37] rounded-md text-white font-medium tracking-[0.01em] focus:outline-none focus:border-[#3c4552] focus:ring-1 focus:ring-[#3c4552]/40 transition-all"
                  >
                    <option value="" disabled className="text-gray-500">
                      Select a Service
                    </option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="threat-response">Threat Response & Intelligence</option>
                    <option value="emerging-security">Emerging & Specialized Security</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-300"
                    strokeWidth={1.9}
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full px-4 py-3 bg-black/60 border border-[#2a2f37] rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#3c4552] transition-colors resize-none"
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-900/30 border border-green-600/50 rounded-lg text-green-400">
                  Message sent successfully!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-900/30 border border-red-600/50 rounded-lg text-red-400">
                  Failed to send message. Please try again.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#B81F54] hover:bg-[#C9265F] text-white font-semibold py-3.5 px-6 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

