'use client'

import { Calendar, Mail, Globe, MapPin } from 'lucide-react'

export default function DataProcessingAgreement() {
  return (
    <div className="bg-[#000000] pt-24">
      {/* Header Section */}
      <section className="container mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mb-12">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-lg mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Nov 1, 2006</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Data Protection & Responsible Disclosure Policy
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            At SentriMorph, protecting digital assets and handling vulnerabilities responsibly are core to our mission.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">1. Purpose</h2>
            <p>
              This policy establishes clear principles for ensuring confidentiality, integrity, and 
              availability of data. It promotes structured, ethical processes for responsible disclosure 
              of security vulnerabilities. Our aim is to foster transparency, accountability, and 
              collaboration in cybersecurity defense.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">2. Scope</h2>
            <p className="mb-3">
              This policy applies to all employees, contractors, and partners of SentriMorph. It covers 
              all systems, applications, networks, and infrastructure owned or operated by SentriMorph.
            </p>
            <p>
              It also extends to external individuals or security researchers who discover vulnerabilities 
              related to our platforms or client-facing environments.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Protection Principles</h2>
            <p className="mb-3">SentriMorph adheres to the following key principles of data protection:</p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                <strong className="text-white">Confidentiality:</strong> All client and internal data 
                are protected from unauthorized access or disclosure.
              </li>
              <li>
                <strong className="text-white">Integrity:</strong> We maintain the accuracy and 
                consistency of all stored and processed information.
              </li>
              <li>
                <strong className="text-white">Availability:</strong> Systems are designed for 
                resilience and redundancy to ensure service continuity.
              </li>
              <li>
                <strong className="text-white">Accountability:</strong> Every employee and contractor 
                is responsible for protecting information assets.
              </li>
              <li>
                <strong className="text-white">Transparency:</strong> Clients and partners are informed 
                about how their data is collected, stored, and used.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">4. Security Controls & Frameworks</h2>
            <p className="mb-3">
              To maintain a secure environment, SentriMorph implements controls in line with:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>ISO/IEC 27001 - Information Security Management System (ISMS)</li>
              <li>NIST Cybersecurity Framework (CSF)</li>
              <li>OWASP Top 10 and ASVS for application security</li>
              <li>Zero-Trust Architecture Principles</li>
            </ul>
            <p className="mb-2">Our controls include:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Encryption of data (at-rest and in-transit) using AES-256 and TLS 1.3</li>
              <li>Multi-factor authentication and role-based access control (RBAC)</li>
              <li>Continuous monitoring and intrusion detection (SIEM)</li>
              <li>Regular internal and third-party penetration testing</li>
              <li>Secure data disposal and retention procedures</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">5. Responsible Disclosure Policy</h2>
            <p className="mb-4">
              SentriMorph welcomes responsible reporting of security vulnerabilities.
            </p>
            
            <p className="mb-2 font-semibold text-white">a. How to Report:</p>
            <p className="mb-4 ml-4">
              Send vulnerability reports to{' '}
              <a href="mailto:security@sentrimorph.com" className="text-[#DC2626] hover:underline">
                security@sentrimorph.com
              </a>
              . Reports should include: detailed description, steps to reproduce, proof-of-concept 
              (if available), and contact information.
            </p>
            
            <p className="mb-2 font-semibold text-white">b. What to Expect:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mb-4">
              <li>Acknowledgement of report within 72 hours</li>
              <li>Security team will investigate and assess the issue</li>
              <li>If valid, remediation and coordinated disclosure with consent</li>
              <li>Public acknowledgement of contribution (with consent) once resolved</li>
            </ul>
            
            <p className="mb-2 font-semibold text-white">c. Rules of Engagement:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Do not exploit the vulnerability beyond verification</li>
              <li>Do not access, modify, or delete data that does not belong to you</li>
              <li>Do not perform denial-of-service (DoS) or social-engineering attacks</li>
              <li>Do not share the issue publicly before SentriMorph has confirmed remediation</li>
              <li>Violations may lead to legal action</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Handling for Security Testing</h2>
            <p className="mb-2">During authorized penetration testing or red-team engagements:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>All test data and credentials are stored in encrypted environments</li>
              <li>Client-specific information is isolated and accessible only to assigned personnel</li>
              <li>Reports are shared securely through encrypted communication channels</li>
              <li>All temporary testing data is securely destroyed after project completion</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Breach Response</h2>
            <p className="mb-2">In the unlikely event of a data breach:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>The Incident Response Team (IRT) will be activated immediately</li>
              <li>Containment, eradication, and recovery procedures will begin within defined SLAs</li>
              <li>Affected parties and regulatory bodies will be notified in compliance with applicable laws</li>
              <li>A post-incident review will be conducted to strengthen preventive controls</li>
            </ul>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">8. Legal & Regulatory Compliance</h2>
            <p>SentriMorph complies with:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
              <li>Digital Security Act 2018 and ICT Act 2006 (Bangladesh)</li>
              <li>General Data Protection Regulation (GDPR) (where applicable)</li>
              <li>Global cybersecurity and data protection frameworks relevant to client jurisdictions</li>
            </ul>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">9. Continuous Improvement</h2>
            <p>We regularly review and update data protection and disclosure practices through:</p>
            <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
              <li>Annual internal audits and compliance reviews</li>
              <li>Threat intelligence monitoring and adaptive response updates</li>
              <li>Employee security awareness and anti-phishing training programs</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">10. Contact Us</h2>
            <p className="mb-4">
              For vulnerability submissions or data protection concerns:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span>security@sentrimorph.com</span>
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

