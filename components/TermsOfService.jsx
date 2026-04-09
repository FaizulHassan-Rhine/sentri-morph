'use client'

import { Calendar, Mail, Globe, MapPin } from 'lucide-react'

export default function TermsOfService() {
  return (
    <div className="bg-[#000000] pt-24">
      <section className="relative container mx-auto max-w-5xl px-6 py-12 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(151,36,61,0.25)_0%,rgba(0,0,0,0)_72%)]" />

        <div className="relative text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Nov 1, 2025</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Terms Of Service</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            By accessing or using SentriMorph&apos;s Services, you agree to comply with these Terms. If you do not
            agree, please refrain from using our Services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed text-[15px]">
          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Company Information</h2>
            <p>
              SentriMorph is a cybersecurity company headquartered in Bangladesh, providing AI-powered digital
              security, penetration testing, vulnerability assessments, and related consulting services.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Use of Services</h2>
            <p className="mb-3">
              You agree to use our Services only for lawful purposes and in accordance with these Terms.
            </p>
            <p className="mb-2">You shall not:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Attempt to gain unauthorized access to our systems, servers, or networks.</li>
              <li>Copy, distribute, or modify any part of our Services without prior written consent.</li>
              <li>Use our Services for malicious or unlawful activities including hacking, phishing, or data theft.</li>
            </ul>
            <p className="mt-3">
              SentriMorph reserves the right to suspend or terminate access if misuse or breach of terms is detected.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Intellectual Property</h2>
            <p>
              All content, designs, software, trademarks, and materials on this website are the intellectual property
              of SentriMorph or its licensors. You may not reproduce, modify, or distribute any material without
              express written authorization from SentriMorph.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Confidentiality & Data Protection</h2>
            <p>
              SentriMorph may collect limited personal or corporate data to provide cybersecurity services. All
              information shared with us - including client systems, vulnerabilities, and reports - is treated as
              strictly confidential. We comply with global security and data protection standards, including GDPR
              principles and Bangladesh ICT Act 2006 (where applicable).
            </p>
            <p className="mt-2">For details, please refer to our Privacy Policy.</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Service Engagements</h2>
            <p className="mb-2">
              For professional cybersecurity engagements (e.g., penetration testing, vulnerability assessment, or
              managed defense), the following apply:
            </p>
            <ul className="list-disc ml-6 space-y-1">
              <li>
                A separate service agreement or Statement of Work (SoW) will outline specific deliverables, timelines,
                and fees.
              </li>
              <li>
                SentriMorph will not be responsible for disruptions caused by pre-existing system vulnerabilities or
                misconfigurations.
              </li>
              <li>
                Clients are responsible for ensuring appropriate system backups and authorization for all testing
                activities.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Disclaimer of Warranties</h2>
            <p>
              All information and services provided by SentriMorph are on an &quot;as is&quot; basis. We do not
              warrant that our Services will be error-free, uninterrupted, or immune from third-party interference.
              SentriMorph disclaims all implied warranties to the fullest extent permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p className="mb-2">Under no circumstances shall SentriMorph, its affiliates, or employees be liable for:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Any indirect, incidental, or consequential damages,</li>
              <li>Data loss, business interruption, or loss of profits,</li>
            </ul>
            <p className="mt-2">
              arising out of the use or inability to use our Services. Our total liability shall not exceed the amount
              paid by you for the specific service rendered.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              Our website may contain links to external websites or services. SentriMorph is not responsible for the
              content, privacy, or practices of such third-party sites.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services at any time, without notice, if
              you violate these Terms or engage in activities that may harm our infrastructure or reputation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Governing Law</h2>
            <p>
              These Terms are governed by the laws of Bangladesh. Any disputes shall be subject to the exclusive
              jurisdiction of the courts located in Dhaka, Bangladesh.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-3">Updates to Terms</h2>
            <p>
              SentriMorph may update these Terms from time to time. All changes will be posted on this page with an
              updated effective date. Your continued use of our Services after changes take effect constitutes
              acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">Contact Us</h2>
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

