'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

export default function Industries() {
  const [openIndex, setOpenIndex] = useState(null)

  const industries = [
    {
      title: 'Healthcare & Life Sciences',
      description:
        'Protecting patient data, medical devices, and hospital networks from ever-evolving cyber risks. From API vulnerabilities in telemedicine apps to ransomware containment in hospital systems, SentriMorph ensures uninterrupted care through proactive defense and real-time incident response.',
    },
    {
      title: 'Finance & FinTech',
      description:
        'Securing digital transactions, mobile banking, and financial platforms from fraud and exploitation. We safeguard institutions handling millions of daily interactions - detecting authentication loopholes, preventing data exfiltration, and ensuring zero downtime protection for critical operations.',
      keySolutions: 'Mobile App PenTesting, Threat Intelligence, Network Security Audits',
    },
    {
      title: 'Manufacturing & Industrial Systems',
      description:
        'Defending industrial automation, IoT, and operational technology against emerging threats. SentriMorph conducts firmware audits, hardware exploitation testing, and red team simulations to identify vulnerabilities that could disrupt production or expose proprietary IP.',
      keySolutions: 'IoT & Firmware Security, Adversary Simulation, Network Defense',
    },
    {
      title: 'Technology & SaaS Providers',
      description:
        'Fortifying cloud infrastructure and enterprise applications that power digital innovation. We help software companies secure their multi-cloud environments, source code repositories, and CI/CD pipelines - eliminating exploitable flaws before they become attack vectors.',
      keySolutions: 'Cloud PenTesting, Source Code Review (SAST), Continuous Vulnerability Assessment',
    },
    {
      title: 'Telecom & Digital Services',
      description:
        'Protecting communication networks and large-scale mobile infrastructures from intrusion. Our team performs mobile penetration tests, API hardening, and real-time threat monitoring to ensure uptime, reliability, and customer trust across all platforms.',
      keySolutions: 'Mobile PenTesting, Network Mapping, Threat Detection',
    },
    {
      title: 'Retail & eCommerce',
      description:
        'Securing customer data, transactions, and digital storefronts against sophisticated cyberattacks. From payment gateway testing to supply chain vulnerability analysis, we help retailers maintain safe, frictionless online experiences.',
      keySolutions: 'Web Application PenTesting, Cloud Security, Fraud Prevention Systems',
    },
    {
      title: 'Government & Public Sector',
      description:
        'Protecting national data infrastructure and critical services from targeted cyber threats. SentriMorph enables agencies to maintain confidentiality, integrity, and public trust through forensic readiness, malware defense, and continuous security monitoring.',
      keySolutions: 'Incident Response, Threat Intelligence, Red Team Operations',
    },
    {
      title: 'Energy, Logistics & Infrastructure',
      description:
        'Ensuring operational continuity in high-dependency environments. We secure industrial control systems (ICS) and SCADA networks, preventing operational disruptions and mitigating the risks of cyber-physical sabotage.',
    },
    {
      title: 'Education & Research Institutions',
      description:
        'Safeguarding academic networks, intellectual property, and digital campuses. Our penetration testing and monitoring solutions prevent data leaks, ransomware attacks, and student data exploitation across distributed learning systems.',
      keySolutions: 'Cloud Security, Incident Response, Network Auditing',
    },
  ]

  const toggleIndustry = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="industries" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#050505] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px] sm:w-1 bg-gradient-to-b from-[#9f2d45] via-[#5c1a2a] to-[#1a0508] opacity-90"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-24 top-1/2 h-[120%] w-48 -translate-y-1/2 rounded-full bg-[#6b2035]/25 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16 px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14 pl-8 sm:pl-12">
            <div className="lg:pr-4">
              <h2 className="text-[2rem] sm:text-[2.2rem] md:text-[2.3rem] font-semibold text-white leading-tight tracking-tight mb-4">
                We Secure Businesses
              </h2>
              <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed max-w-xl">
                Every business operates in a unique digital ecosystem - and so do its threats.
                SentriMorph provides adaptive, AI-powered cybersecurity designed to fit the needs,
                risks, and compliance requirements of diverse sectors worldwide.
              </p>
            </div>

            <div className="min-w-0 divide-y divide-white/[0.08]">
              {industries.map((industry, index) => (
                <div key={index} className="first:pt-0">
                  <button
                    type="button"
                    onClick={() => toggleIndustry(index)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-white/[0.02] sm:py-[1.125rem]"
                    aria-expanded={openIndex === index}
                  >
                    <span className="text-[15px] sm:text-base font-medium text-white leading-snug pr-2">
                      {industry.title}
                    </span>
                    <span className="shrink-0 pt-0.5 text-white/90">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5" strokeWidth={1.75} />
                      ) : (
                        <Plus className="h-5 w-5" strokeWidth={1.75} />
                      )}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="pb-5 pt-0">
                      <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed">
                        {industry.description}
                      </p>
                      {industry.keySolutions && (
                        <p className="mt-3 text-sm sm:text-[15px] text-gray-300 leading-relaxed">
                          <span className="font-medium text-white">Key Solutions: </span>
                          {industry.keySolutions}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

