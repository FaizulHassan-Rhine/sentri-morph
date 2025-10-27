'use client'

import { useState, useEffect } from 'react'
import { Mail } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    // Initialize EmailJS - replace with your actual public key
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY')
  }, [])

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
      // Replace with your EmailJS service ID, template ID, and public key
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
        {
          from_name: formData.username,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        setFormData({ username: '', email: '', message: '' })
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
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Mail className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Contact Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in touch
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Please feel free to send us any questions, feedback or suggestions you might have.
            </p>
            
            <p className="text-gray-300 leading-relaxed">
              Each sector faces different threat vectors - but all demand one thing: trust. 
              SentriMorph builds that trust through intelligent automation, adaptive security, 
              and constant vigilance - keeping your business, your data, and your customers protected.
            </p>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-900/50 border border-white/10 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition-colors"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#DC2626] transition-colors"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
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
                className="w-full bg-[#DC2626] hover:bg-[#EF4444] text-white font-medium py-3 px-6 rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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

