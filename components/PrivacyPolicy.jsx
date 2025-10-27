'use client'

import { Calendar, Mail, Globe, MapPin } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#000000] pt-24">
      {/* Header Section */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mb-12">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Nov 1, 2005</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          
          {/* Introduction */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            By using our Services, you consent to the terms of this Privacy Policy.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
            <p>
              SentriMorph is a Bangladesh-based cybersecurity company specializing in AI-powered 
              digital protection, penetration testing, and vulnerability management. We aim to help 
              organizations detect, prevent, and respond to cyber threats while maintaining high 
              standards of confidentiality and data integrity.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Information We Collect</h2>
            
            <p className="mb-3 font-semibold text-white">a. Information You Provide</p>
            <p className="mb-4">
              We collect information such as name, company, email address, and contact details that 
              you submit through forms or inquiries. We also collect business or technical data you 
              voluntarily share for cybersecurity engagements, such as system details, domain names, 
              or network scope.
            </p>
            
            <p className="mb-3 font-semibold text-white">b. Automatically Collected Information</p>
            <p className="mb-4">
              We collect IP address, browser type, device information, log files, usage data, and 
              website analytics for performance monitoring and threat prevention.
            </p>
            
            <p className="mb-3 font-semibold text-white">c. Client Engagement Data</p>
            <p>
              During professional engagements, SentriMorph may access or process system-level 
              information solely for the purpose of vulnerability assessment, penetration testing, 
              or threat analysis.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Information</h2>
            <p>
              We use your information to provide and improve our cybersecurity services, communicate 
              regarding inquiries, proposals, and project updates, conduct security analysis, incident 
              investigations, and threat detection, comply with legal and contractual obligations, and 
              prevent unauthorized access, fraud, and misuse of systems.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Confidentiality</h2>
            <p>
              All data shared with SentriMorph, including system credentials, vulnerabilities, test 
              results, and reports, are treated as confidential and proprietary. We employ end-to-end 
              encryption, secure cloud storage, and restricted access controls to prevent data leakage 
              or unauthorized disclosure.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain data only as long as necessary to fulfill contractual or legal requirements. 
              All project-related data, such as penetration test results or vulnerability reports, 
              are securely deleted after completion and client acknowledgment, unless otherwise 
              required by law or contractual obligations.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Sharing and Disclosure</h2>
            <p>
              SentriMorph does not sell, rent, or trade personal or corporate data. Information may 
              only be shared with authorized internal personnel directly involved in delivering the 
              service, with partners or service providers under strict confidentiality agreements, 
              or when required by law, regulation, or legal process.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Security</h2>
            <p className="mb-3">
              We follow globally recognized frameworks such as ISO/IEC 27001, NIST Cybersecurity 
              Framework, and OWASP guidelines. Our security measures include multi-layered firewalls, 
              intrusion detection systems, role-based access control, data encryption (AES-256), 
              regular security audits, vulnerability scans, and incident response protocols.
            </p>
            <p>
              Despite our best efforts, no system is fully immune from risk. By using our services, 
              you acknowledge that absolute security cannot be guaranteed.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Your Rights</h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the right to access, correct, or request 
              deletion of your data, withdraw consent for data processing, and request a copy of the 
              information we hold about you.
            </p>
            <p>
              To exercise these rights, please contact us at{' '}
              <a href="mailto:contact.us@sentrimorph.com" className="text-[#DC2626] hover:underline">
                contact.us@sentrimorph.com
              </a>
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze website traffic. You 
              can manage or disable cookies through your browser settings, but some features may not 
              function properly without them.
            </p>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">10. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party platforms or resources. SentriMorph is 
              not responsible for the privacy practices or content of these external sites.
            </p>
          </div>

          {/* Section 11 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">11. International Data Transfer</h2>
            <p>
              If data is transferred outside Bangladesh, we ensure that it is handled with appropriate 
              data protection measures consistent with international standards.
            </p>
          </div>

          {/* Section 12 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">12. Updates to This Policy</h2>
            <p>
              SentriMorph may update this Privacy Policy periodically. Any changes will be posted 
              on this page with a revised effective date. Continued use of our services after updates 
              constitutes acceptance of the revised policy.
            </p>
          </div>

          {/* Section 13 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">13. Contact Us</h2>
            <p className="mb-4">
              For questions, concerns, or requests regarding this Privacy Policy or your data, please contact:
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

