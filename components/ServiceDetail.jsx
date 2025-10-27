'use client'

import Image from 'next/image'
import Link from 'next/link'

const serviceData = {
  'penetration-testing-exploitation': {
    title: 'Penetration Testing & Exploitation',
    heroImage: '/images/Penetration.png',
    intro: 'We don\'t just look for weaknesses - we think like attackers to expose them. From web apps to cloud infrastructure, we leverage different attack techniques across your web apps, mobile apps, cloud infrastructure, and internal networks. Every test delivers actionable insights helping you strengthen defenses and close gaps before they turn into breaches.',
    coverage: {
      intro: 'Our penetration testing engagements cover a comprehensive range of attack surfaces, simulating real-world scenarios to identify vulnerabilities before adversaries do.',
      items: [
        {
          title: 'Web applications & APIs:',
          description: 'We test web applications and APIs for common vulnerabilities like SQL injection, XSS, authentication bypasses, and business logic flaws.',
        },
        {
          title: 'Mobile apps (iOS & Android):',
          description: 'Comprehensive security assessment of mobile applications including code analysis, API security, and runtime manipulation testing.',
        },
        {
          title: 'Cloud infrastructure (AWS / Azure / GCP):',
          description: 'Evaluation of cloud configurations, IAM policies, storage security, and network segmentation to identify misconfigurations and exposed resources.',
        },
        {
          title: 'Internal networks & infrastructure:',
          description: 'Assessment of internal network security, Active Directory environments, and infrastructure components to identify lateral movement paths.',
        },
        {
          title: 'External perimeter & services:',
          description: 'External reconnaissance and testing of publicly accessible services, DNS configurations, and exposed endpoints.',
        },
        {
          title: 'Optional: IoT / embedded systems & firmware reviews where applicable.',
          description: 'Specialized testing of IoT devices, embedded systems, and firmware for vulnerabilities in hardware and software layers.',
        },
      ],
      note: 'We tailor the exact scope to your environment and risk priorities during scoping.',
    },
    methodology: {
      intro: 'Our controlled attack model ensures safe, measurable, and remediation-focused testing. We follow industry-standard methodologies while adapting to your specific needs.',
      steps: [
        {
          title: '1. Reconnaissance & mapping—',
          description: 'We gather intelligence about your systems, applications, and infrastructure to understand the attack surface and identify potential entry points.',
        },
        {
          title: '2. Automated discovery + manual verification—',
          description: 'We use automated tools to scan for vulnerabilities, then manually verify findings to eliminate false positives and discover complex issues.',
        },
        {
          title: '3. Safe exploitation—',
          description: 'We safely exploit identified vulnerabilities to demonstrate impact and verify exploitability without causing damage to your systems.',
        },
        {
          title: '4. Post-exploitation risk analysis—',
          description: 'After successful exploitation, we analyze what an attacker could achieve, including data access, privilege escalation, and lateral movement.',
        },
        {
          title: '5. Actionable reporting & remediation—',
          description: 'We provide detailed reports with clear remediation steps, prioritized by risk, along with code examples and configuration fixes.',
        },
        {
          title: '6. Retest & verification—',
          description: 'We verify that remediation efforts have been effective and that vulnerabilities have been properly addressed.',
        },
      ],
      conclusion: 'Our approach aligns with industry standards including OWASP, PTES, and NIST while being tailored to your specific environment and business context.',
    },
  },
  'threat-response-intelligence': {
    title: 'Threat Response & Intelligence',
    heroImage: '/images/Threat.png',
    intro: 'When an incident occurs, every second matters. SentriMorph helps you quickly detect, contain, and eliminate threats, minimizing the impact and restoring systems with precision. Through forensic investigation and deep malware analysis, we uncover how attacks happened and ensure they never happen again.',
    coverage: {
      intro: 'Our threat response services cover the complete incident lifecycle, from initial detection through containment, eradication, and recovery.',
      items: [
        {
          title: 'Incident Detection & Analysis:',
          description: 'Real-time monitoring, log analysis, and threat intelligence correlation to identify security incidents quickly.',
        },
        {
          title: 'Forensic Investigation:',
          description: 'Deep-dive analysis of compromised systems, network traffic, and malware to understand attack vectors and timelines.',
        },
        {
          title: 'Threat Containment & Eradication:',
          description: 'Rapid isolation of affected systems and removal of threats to prevent further damage.',
        },
        {
          title: 'Recovery & Restoration:',
          description: 'Systematic restoration of services with security hardening to prevent re-infection.',
        },
        {
          title: 'Post-Incident Analysis:',
          description: 'Comprehensive review of the incident to identify gaps and strengthen security posture.',
        },
      ],
      note: 'We tailor our response approach to your environment and regulatory requirements.',
    },
    methodology: {
      intro: 'Our incident response methodology follows industry best practices while ensuring rapid, effective threat neutralization.',
      steps: [
        {
          title: '1. Preparation & Planning—',
          description: 'We help you establish incident response plans, playbooks, and communication protocols before incidents occur.',
        },
        {
          title: '2. Detection & Analysis—',
          description: 'We identify and analyze security events using SIEM, threat intelligence, and behavioral analytics.',
        },
        {
          title: '3. Containment—',
          description: 'We isolate affected systems and prevent threat actors from expanding their access or causing further damage.',
        },
        {
          title: '4. Eradication—',
          description: 'We remove threats from your environment, eliminating malware, backdoors, and unauthorized access.',
        },
        {
          title: '5. Recovery—',
          description: 'We restore systems and services with enhanced security controls and monitoring.',
        },
        {
          title: '6. Lessons Learned—',
          description: 'We conduct post-incident reviews and update security controls to prevent similar incidents.',
        },
      ],
      conclusion: 'Our approach aligns with NIST, SANS, and industry frameworks while being adapted to your organization\'s specific needs.',
    },
  },
  'emerging-specialized-security': {
    title: 'Emerging & Specialized Security',
    heroImage: '/images/Emerging.png',
    intro: 'As technology advances, so do the risks. Our specialized division tackles complex areas like IoT, firmware, and hardware vulnerabilities - ensuring even your most advanced systems stay secure. Through red team simulations and adversary exercises, we prepare your organization for what\'s next - not just what\'s known.',
    coverage: {
      intro: 'Our specialized security services address emerging threats and cutting-edge technologies that require deep expertise.',
      items: [
        {
          title: 'IoT & Embedded Systems:',
          description: 'Security assessment of Internet of Things devices, embedded systems, and firmware to identify vulnerabilities.',
        },
        {
          title: 'Hardware Security:',
          description: 'Evaluation of hardware-level security, supply chain risks, and physical attack vectors.',
        },
        {
          title: 'Red Team Exercises:',
          description: 'Multi-vector attack simulations mimicking advanced persistent threats (APTs) to test your defensive capabilities.',
        },
        {
          title: 'Adversary Simulation:',
          description: 'Realistic attack scenarios based on threat intelligence to validate security controls and response procedures.',
        },
        {
          title: 'Emerging Technology Assessment:',
          description: 'Security evaluation of new technologies, cloud-native architectures, and digital transformation initiatives.',
        },
      ],
      note: 'We adapt our methodology to address the unique challenges of emerging technologies.',
    },
    methodology: {
      intro: 'Our specialized security approach combines advanced techniques with industry expertise to address complex security challenges.',
      steps: [
        {
          title: '1. Threat Modeling & Scoping—',
          description: 'We analyze your environment to identify unique attack surfaces and high-value targets.',
        },
        {
          title: '2. Specialized Testing—',
          description: 'We apply advanced techniques specific to the technology or system being assessed.',
        },
        {
          title: '3. Exploitation & Validation—',
          description: 'We demonstrate vulnerabilities through safe exploitation and validate their impact.',
        },
        {
          title: '4. Attack Path Analysis—',
          description: 'We map out how vulnerabilities could be chained together for maximum impact.',
        },
        {
          title: '5. Defense Validation—',
          description: 'We test your security controls against advanced attack techniques.',
        },
        {
          title: '6. Strategic Recommendations—',
          description: 'We provide long-term security strategies to address emerging threats and technologies.',
        },
      ],
      conclusion: 'Our approach combines cutting-edge research with practical security insights to protect against tomorrow\'s threats.',
    },
  },
}

export default function ServiceDetail({ slug }) {
  const service = serviceData[slug]

  if (!service) {
    return (
      <div className="bg-[#000000] pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
          <Link href="/#services" className="text-[#DC2626] hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#000000] pt-24">
      {/* Hero Image */}
      <div className="relative container mx-auto h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-[#DC2626]/30 z-10" />
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-6 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 ">
          {service.title}
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-300 mb-16 leading-relaxed  max-w-4xl mx-auto">
          {service.intro}
        </p>

        {/* What this service covers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            What this service covers?
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.coverage.intro}
          </p>
          
          <ul className="space-y-4 mb-4">
            {service.coverage.items.map((item, index) => (
              <li key={index} className="text-gray-300 leading-relaxed">
                <strong className="text-white">{item.title}</strong>{' '}
                {item.description}
              </li>
            ))}
          </ul>
          
          <p className="text-gray-400 italic text-sm">
            ({service.coverage.note})
          </p>
        </div>

        {/* How we work */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            How we work - our controlled attack model
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            {service.methodology.intro}
          </p>
          
          <ol className="space-y-4 mb-6">
            {service.methodology.steps.map((step, index) => (
              <li key={index} className="text-gray-300 leading-relaxed">
                <strong className="text-white">{step.title}</strong>{' '}
                {step.description}
              </li>
            ))}
          </ol>
          
          <p className="text-gray-300 leading-relaxed">
            {service.methodology.conclusion}
          </p>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  )
}

