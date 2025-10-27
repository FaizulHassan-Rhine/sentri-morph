'use client'

import { Calendar, Mail, Globe, MapPin } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="bg-[#000000] pt-24">
      {/* Header Section */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mb-12">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Nov 1, 2025</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms Of Service
          </h1>
          
          {/* Introduction */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            By accessing or using SentriMorph&apos;s Services, you agree to comply with these Terms. 
            If you do not agree, please refrain from using our Services.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Company Information</h2>
            <p>
              SentriMorph is a cybersecurity company registered in Bangladesh. Our registered office 
              is located in Dhaka, Bangladesh. We provide advanced cybersecurity services including 
              penetration testing, threat response, and specialized security solutions.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Use of Services</h2>
            <p className="mb-3">
              Our Services are provided for legitimate security assessment and protection purposes only. 
              By using our Services, you agree to use them in compliance with all applicable laws and regulations.
            </p>
            <p className="mb-2">You shall not:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use our Services for any illegal or unauthorized purpose</li>
              <li>Attempt to gain unauthorized access to any systems or networks</li>
              <li>Interfere with or disrupt the integrity or performance of our Services</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. User Accounts</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. 
              You agree to notify us immediately of any unauthorized use of your account. 
              SentriMorph reserves the right to suspend or terminate accounts that violate these Terms.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property related to our Services are the 
              exclusive property of SentriMorph. You may not reproduce, distribute, or create 
              derivative works from our proprietary materials without express written permission.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Service Engagements</h2>
            <p className="mb-3">
              Specific service engagements are governed by separate service agreements or Statements 
              of Work (SoW) that detail scope, deliverables, timelines, and pricing.
            </p>
            <p>
              A separate service agreement or Statement of Work (SoW) will outline the specific 
              terms, conditions, and deliverables for each engagement. These documents take precedence 
              over these general Terms for the specific engagement.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Confidentiality</h2>
            <p>
              SentriMorph maintains strict confidentiality regarding all client information, security 
              assessments, and findings. We adhere to professional confidentiality standards and 
              will not disclose sensitive information to third parties without explicit authorization.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
            <p className="mb-3">
              To the maximum extent permitted by law, SentriMorph shall not be liable for:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or data</li>
              <li>Damages resulting from third-party actions or security breaches</li>
            </ul>
            <p className="mt-3">
              Our total liability shall not exceed the amount paid by you for the specific service 
              engagement in question.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold SentriMorph harmless from any claims, damages, or 
              liabilities arising from your use of our Services or violation of these Terms.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Payment Terms</h2>
            <p>
              Payment terms are specified in individual service agreements. Payment is due according 
              to the terms outlined in your specific engagement contract. Late payments may result in 
              service suspension or termination.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">10. Termination</h2>
            <p>
              Either party may terminate service engagements in accordance with the terms specified 
              in the service agreement. SentriMorph reserves the right to terminate access to our 
              Services immediately if you violate these Terms.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">11. Changes to Terms</h2>
            <p>
              SentriMorph reserves the right to modify these Terms at any time. Material changes 
              will be communicated through our website or via email. Continued use of our Services 
              after changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">12. Contact Us</h2>
            <p className="mb-4">
              For any queries regarding these Terms, please contact:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>info@sentrimorph.com</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-white" />
                <span>www.sentrimorph.com</span>
              </div>
              <span className="text-white/30">|</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

