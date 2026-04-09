'use client'

import { Calendar, Mail, Globe, MapPin } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#000000] pt-24">
      <section className="relative container mx-auto max-w-5xl px-6 py-12 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(151,36,61,0.25)_0%,rgba(0,0,0,0)_72%)]" />

        <div className="relative text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Nov 1, 2025</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Privacy Policy</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            By using our Services, you consent to the terms of this Privacy Policy.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed text-[15px]">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Who We Are</h2>
            <p>
              SentriMorph is a Bangladesh-based cybersecurity company specializing in AI-powered digital protection,
              penetration testing, and vulnerability management. Our mission is to help organizations detect, prevent,
              and respond to cyber threats while maintaining the highest standards of confidentiality and data
              integrity.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Information We Collect</h2>
            <p className="mb-3">We collect information in the following ways:</p>
            <p className="mb-3 font-semibold text-white">a. Information You Provide</p>
            <p className="mb-4">
              Name, company, email address, and contact details submitted through forms or inquiries.
            </p>
            <p className="mb-4">
              Business or technical data voluntarily shared for cybersecurity engagements (e.g., system details,
              domain names, or network scopes).
            </p>
            <p className="mb-3 font-semibold text-white">b. Automatically Collected Information</p>
            <p className="mb-4">
              IP address, browser type, and device information.
            </p>
            <p className="mb-4">Log files, usage data, and website analytics for performance monitoring and threat prevention.</p>
            <p className="mb-3 font-semibold text-white">c. Client Engagement Data</p>
            <p>
              During professional engagements, SentriMorph may access or process system-level information strictly for
              the purpose of vulnerability assessment, penetration testing, or threat analysis.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p className="mb-2">We use collected data to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide and improve our cybersecurity services.</li>
              <li>Communicate with you regarding inquiries, proposals, or project updates.</li>
              <li>Conduct security analysis, incident investigations, and threat detection.</li>
              <li>Comply with legal, regulatory, or contractual obligations.</li>
              <li>Prevent unauthorized access, fraud, or misuse of our systems.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Data Confidentiality</h2>
            <p>
              All data shared with SentriMorph - including system credentials, vulnerabilities, test results, and
              reports - are treated as confidential and proprietary. We employ end-to-end encryption, secure cloud
              storage, and restricted access controls to prevent data leakage or unauthorized disclosure.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Data Retention</h2>
            <p>
              We retain data only as long as necessary to fulfill contractual or legal requirements. All sensitive
              project-related data (such as penetration test results or vulnerability reports) are securely deleted
              after completion and client acknowledgment, unless otherwise required by law or contractual obligations.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Sharing and Disclosure</h2>
            <p className="mb-2">SentriMorph does not sell, rent, or trade your personal or corporate data.</p>
            <p className="mb-2">Information may only be shared:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>With authorized internal personnel directly involved in delivering the service.</li>
              <li>With partners or service providers under strict confidentiality agreements.</li>
              <li>When required by law, regulation, or valid legal process.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Data Security</h2>
            <p className="mb-2">We follow globally recognized frameworks such as ISO/IEC 27001, NIST Cybersecurity Framework, and OWASP guidelines.</p>
            <p className="mb-2">Our security measures include:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Multi-layered firewalls and intrusion detection systems.</li>
              <li>Role-based access control and data encryption (AES-256).</li>
              <li>Regular security audits, vulnerability scans, and incident response protocols.</li>
            </ul>
            <p>
              Despite our best efforts, no system is fully immune from risk. By using our Services, you acknowledge
              that absolute security cannot be guaranteed.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Your Rights</h2>
            <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 mb-3">
              <li>Access, correct, or request deletion of your data.</li>
              <li>Withdraw consent for data processing.</li>
              <li>Request a copy of the information we hold about you.</li>
            </ul>
            <p>
              To exercise these rights, contact us at privacy@sentrimorph.com.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Cookies and Tracking Technologies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze website traffic. You can manage or
              disable cookies through your browser settings, but some features may not function properly without them.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party platforms or resources. SentriMorph is not responsible for
              the privacy practices or content of these external sites.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">International Data Transfer</h2>
            <p>
              If your data is transferred outside Bangladesh, we ensure that it is handled with appropriate data
              protection measures consistent with international standards.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Updates to This Policy</h2>
            <p>
              SentriMorph may update this Privacy Policy periodically. Any changes will be posted on this page with a
              revised effective date. Continued use of our Services after updates constitutes acceptance of the revised
              policy.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Contact Us</h2>
            <p className="mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact:
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

