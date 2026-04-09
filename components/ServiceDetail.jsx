'use client'

import { Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const serviceData = {
  'penetration-testing-exploitation': {
    title: 'Penetration Testing & Exploitation',
    heroImage: '/images/services/penetration-testing.webp',
    intro: 'We do not just look for weaknesses - we think like attackers to expose them before they strike. Our experts simulate real-world intrusion attempts across your web apps, mobile systems, cloud infrastructure, and internal networks.',
    coverage: {
      intro: 'Every test delivers actionable insights, helping you strengthen defenses and close gaps before they turn into breaches.',
      items: [
        {
          title: 'Web & API Penetration Testing:',
          description: 'Today\'s web apps and APIs are more connected - and more exposed - than ever. We dig deep into the frameworks, business logic, and access layers that keep them running. Our specialists check for weak authentication, session hijacking, hidden data leaks, and bypassable permissions. Beyond automated scans, every test is manually validated to show the real-world impact of a successful exploit - not theoretical risk. You receive: A practical report that includes verified exploits, proof of concept examples, screenshots, and clear next steps for your team to fix each issue.',
        },
        {
          title: 'Mobile Application Penetration Testing:',
          description: 'A mobile app often becomes the front door to your entire business. We test that door from every angle. Through both static and live analysis, we trace insecure storage, unprotected APIs, weak encryption, and reverse-engineering loopholes that may expose user data or internal logic. Our team simulates real attacker behavior - API abuse, token manipulation, and runtime interception - to find where defenses fall short. You receive: A prioritized action plan, along with technical explanations and code-level guidance to harden your app for the next release.',
        },
        {
          title: 'Cloud Infrastructure Penetration Testing:',
          description: 'The cloud offers scale and flexibility, but also hides layers of unseen exposure. We analyze permissions, configuration chains, and the ways identities move within your environment. From IAM privilege escalation to storage misconfiguration, our testing uncovers the weak points that attackers could use to gain access or move laterally. You receive: A clear map of risks with detailed remediation for each - from cloud misconfigurations to overly permissive roles.',
        },
        {
          title: 'Source Code Review (SAST):',
          description: 'We go beyond scanners. Our engineers manually review source code, line by line, identifying logic flaws, unsafe coding patterns, and backdoors that automated tools miss. Each issue is explained with examples and corrected patterns your developers can immediately apply. The goal is not just to find flaws - it is to raise your overall code maturity. You receive: Annotated snippets, recommended fixes, and security rules that can integrate into your CI/CD pipeline.',
        },
        {
          title: 'Network Penetration Testing (Internal & External):',
          description: 'We evaluate internal and external network paths to uncover weak segmentation, exposed services, and privilege escalation opportunities. The assessment maps how attackers could pivot across systems and where access boundaries fail. You receive: Clear exploitation evidence and prioritized remediation steps to strengthen perimeter and internal resilience.',
        },
      ],
      note: 'We tailor depth and scope based on your environment, threat profile, and business priorities.',
    },
    methodology: {
      intro: 'Our testing process mirrors how an actual intrusion unfolds, but within a carefully managed, non-disruptive framework. Every engagement follows a transparent, step-by-step model designed for both accuracy and safety.',
      steps: [
        {
          title: '1. Scoping & Alignment -',
          description: 'We start by understanding your environment, your risk tolerance, and what success looks like. Together we define the targets, timelines, and approval process to ensure no surprises.',
        },
        {
          title: '2. Reconnaissance & Mapping -',
          description: 'Our analysts perform open-source intelligence and active discovery to build a complete picture of your attack surface - including forgotten subdomains, shadow APIs, and misconfigured cloud assets.',
        },
        {
          title: '3. Threat Modeling -',
          description: 'Each system is tested from the viewpoint of the most relevant attacker type for your business. This helps us focus effort where the real risks live.',
        },
        {
          title: '4. Controlled Exploitation -',
          description: 'Once weaknesses are found, we validate them carefully. Exploits are executed only under agreed-upon conditions and monitored in real time. No destructive actions, no downtime - just verified proof of exposure.',
        },
        {
          title: '5. Post-Exploitation & Analysis -',
          description: 'We trace how deep compromise could go: data access, lateral movement, privilege escalation, and persistence. Findings show not just what is vulnerable, but how a breach could unfold.',
        },
        {
          title: '6. Reporting & Remediation -',
          description: 'Our report is built for both engineers and executives. It includes visual attack path context, technical detail, business impact, and a practical remediation checklist. We also run a live debrief session with your teams.',
        },
        {
          title: '7. Retesting & Validation -',
          description: 'Once fixes are implemented, we verify them through targeted retesting. This ensures vulnerabilities are closed and the updated environment holds under simulated pressure.',
        },
      ],
      conclusion: 'Our approach blends technical depth with practical remediation, so findings turn into measurable security improvement.',
    },
    industryInsights: {
      intro: 'Different industries face different threat patterns - and our experience reflects that.',
      items: [
        {
          title: 'Garments & E-commerce',
          description: 'From ERP systems to global storefronts, multiple integrations mean multiple risks. We test your authentication layers, payment modules, and content pipelines to help keep customer data and product assets safe. You get practical guidance to secure image storage, product APIs, and vendor access points.',
        },
        {
          title: 'Healthcare',
          description: 'When patient trust depends on data integrity, every vulnerability matters. We focus on PHI protection, audit logging, and access-control consistency while keeping operations uninterrupted. Assessments are aligned with healthcare-style compliance expectations.',
        },
        {
          title: 'Fintech & Telecommunications',
          description: 'High-volume systems attract high-value attackers. We simulate fraud, transaction abuse, and telecom-specific exploit paths that can affect customers. Findings are paired with practical prevention steps, from token validation to anomaly detection controls.',
        },
        {
          title: 'SaaS & Enterprise Platforms',
          description: 'For multi-tenant systems, one error can expose many clients. We stress-test access controls, privilege boundaries, and tenant isolation mechanisms so you can scale with confidence.',
        },
        {
          title: 'Cloud-Native Technology Firms',
          description: 'Your workloads are always moving, so our testing reflects that. We review infrastructure-as-code templates, pipeline secrets, and dynamic permission flows to reduce accidental exposure.',
        },
        {
          title: 'Software Development Teams',
          description: 'Our reviews pair with developer workshops. We explain why issues exist, show exploit mechanics, and help your team prevent repeat weaknesses in future releases.',
        },
        {
          title: 'Compliance & Extended Services',
          description: 'If your business follows PCI DSS, ISO 27001, or GDPR frameworks, our reports map directly to those controls. We also offer red-team simulations and supply-chain security assessments for deeper visibility.',
        },
      ],
    },
    deliverables: [
      'A comprehensive executive summary with business impact and technical evidence.',
      'Detailed exploitation logs and visualized attack paths.',
      'A prioritized roadmap for remediation - short, medium, and long term.',
      'Verification of applied fixes.',
      'Optional team workshop to review lessons learned and strengthen internal capability.',
    ],
    faqs: [
      {
        question: "What's the difference between Vulnerability Assessment (VA) and Penetration Testing (PT)?",
        answer:
          'VA checks systems to identify weaknesses. PT then exploits those weaknesses in a controlled way to demonstrate real impact.',
      },
      {
        question: 'What types of penetration testing do you offer?',
        answer:
          "We test networks, web apps, APIs, mobile apps (iOS and Android), cloud environments (AWS and Azure), wireless networks, IoT devices, and team awareness via social engineering. Each engagement is tailored to your environment, risks, and compliance requirements.",
      },
      {
        question: 'Is there a limit on API usage for free accounts?',
        answer:
          'Yes. Free accounts have usage limits. Refer to the pricing page for usage thresholds and any charges beyond those limits.',
      },
      {
        question: 'How much does Penetration Testing cost?',
        answer:
          'Cost depends on environment complexity, testing scope, and engagement duration. We provide customized quotes after discussing your requirements.',
      },
      {
        question: 'How often should we do penetration testing?',
        answer:
          'Annual testing is the minimum recommendation. High-risk sectors such as finance and healthcare should consider quarterly assessments.',
      },
      {
        question: 'Is penetration testing legal?',
        answer:
          'Yes, with proper authorization. We require signed agreements before testing begins. Unauthorized testing is illegal.',
      },
      {
        question: `What's a "black box" vs. "white box" penetration test?`,
        answer:
          'Black box testing is performed without internal system knowledge. White box testing is done with full access and knowledge. Gray box is a hybrid approach, and many organizations choose it for balanced coverage.',
      },
      {
        question: 'How do you prioritize vulnerabilities?',
        answer:
          'We prioritize by severity, business impact, exposure, and exploitability. Internet-facing critical issues are prioritized first, and reports include ranked remediation guidance.',
      },
    ],
  },
  'threat-response-intelligence': {
    title: 'Threat Response & Intelligence',
    heroImage: '/images/services/threat-response-and-intelligence.webp',
    intro: 'When an incident occurs, every second matters. SentriMorph\'s response teams move fast - containing threats, analyzing the source, and restoring systems with precision. Through forensic investigation and deep malware analysis, we uncover how attacks happened and ensure they never happen again.',
    coverage: {
      intro: 'Our threat response services combine deep investigation with practical containment, recovery, and resilience planning.',
      items: [
        {
          title: 'Incident Response & Containment:',
          description: 'When a breach or suspicious activity is detected, our team steps in immediately. We identify the root cause, isolate affected systems, and prevent further impact while keeping business operations stable. Our analysts work side by side with your internal team to ensure containment measures are accurate, traceable, and documented for post-incident review. You receive: a complete incident timeline, detailed forensic evidence, and prioritized recovery actions to restore normal operation securely.',
        },
        {
          title: 'Digital Forensics & Evidence Preservation:',
          description: 'Every attack leaves a trail - we make sure it is preserved and understood. Our forensic process includes data acquisition, log correlation, memory analysis, and artifact reconstruction to pinpoint attacker actions. We maintain strict chain-of-custody protocols so evidence remains valid for audits, legal review, or law-enforcement cooperation. You receive: clear evidence packages, validated findings, and human-readable summaries explaining technical events in plain terms.',
        },
        {
          title: 'Threat Hunting & Detection Engineering:',
          description: 'Waiting for alerts is not enough. We proactively search endpoints, servers, and cloud environments for hidden compromise. Using behavioral analytics and adversary-emulation techniques, we uncover dormant threats that bypass traditional monitoring tools. Each hunt is tailored to your infrastructure, logs, network flows, and attack surface. You receive: hunt reports highlighting confirmed findings, detection gaps, and recommendations for improving alert fidelity and visibility.',
        },
        {
          title: 'Threat Intelligence & Advisory:',
          description: 'We translate global threat data into context you can act on. Our intelligence team tracks adversary groups, emerging malware families, and sector-specific campaigns that could impact your business. Intelligence feeds are refined through manual validation - no generic dashboards, only insights relevant to your systems and geography. You receive: periodic threat briefings, early-warning alerts, and strategy updates aligned with your operational priorities.',
        },
        {
          title: 'Post-Incident Review & Security Hardening:',
          description: 'Once the immediate crisis is over, the real work begins. We conduct detailed post-incident analysis to understand the attacker playbook, exploited weaknesses, and full detection-to-response timeline. This process drives improved playbooks, response workflows, and prevention strategies tailored to your environment. You receive: a comprehensive after-action report, lessons learned, and a roadmap for strengthening people, processes, and technology.',
        },
      ],
      note: 'We tailor response depth and investigative focus to your business continuity priorities and regulatory context.',
    },
    methodology: {
      intro: 'Our approach is rooted in discipline, speed, and clear communication. Every engagement follows a predictable, tested model to ensure nothing is missed and no system is left unchecked.',
      steps: [
        {
          title: '1. Preparation -',
          description: 'Before an incident occurs, we help set up the right tools, escalation paths, and response templates so your organization can act within minutes, not hours.',
        },
        {
          title: '2. Identification -',
          description: 'Using threat analytics, SIEM data, and behavioral indicators, we determine whether suspicious activity is a genuine compromise or a false positive.',
        },
        {
          title: '3. Containment -',
          description: 'We isolate affected hosts or services to prevent lateral movement while maintaining operational uptime wherever possible.',
        },
        {
          title: '4. Eradication -',
          description: 'Our team removes malicious artifacts, resets compromised credentials, and applies integrity checks to ensure full cleanup.',
        },
        {
          title: '5. Recovery -',
          description: 'Systems are restored and validated through staged testing. We verify that the environment is safe before returning it to production.',
        },
        {
          title: '6. Lessons Learned -',
          description: 'After every response, we debrief stakeholders, review performance metrics, and identify improvements in detection, response time, and escalation accuracy.',
        },
      ],
      conclusion: 'The result is faster containment, clearer communication, and stronger resilience after every incident.',
    },
    industryInsights: {
      intro: 'Every industry experiences unique threats - and our intelligence reflects those differences.',
      items: [
        {
          title: 'Financial & Fintech',
          description: 'We track advanced phishing kits, payment-fraud infrastructure, and API abuse tactics that target high-value transactions. Analysts build correlation maps between compromised accounts, command-and-control hosts, and real-time payment anomalies.',
        },
        {
          title: 'Healthcare',
          description: 'Data integrity and patient confidentiality are constant targets. We focus on ransomware precursors, lateral movement into clinical networks, and misuse of connected medical devices while maintaining strict data-handling discipline.',
        },
        {
          title: 'E-commerce & Manufacturing',
          description: 'Attackers often target supply chains, web skimmers, and stolen credentials. We monitor dark-web chatter, compromised merchant data, and credential dumps to identify exposure before revenue loss occurs.',
        },
        {
          title: 'Technology & Cloud Providers',
          description: 'From exposed API keys to misconfigured identity policies, we analyze alerts in the context of multi-tenant environments. Intelligence efforts prioritize early detection of exploitation trends before they hit production workloads.',
        },
        {
          title: 'Public & Critical Infrastructure',
          description: 'We support early warning for targeted campaigns, malware propagation, and geopolitical threat patterns to reduce downtime and data compromise in essential sectors.',
        },
      ],
    },
    deliverables: [
      '24x7 rapid response capability with direct analyst communication.',
      'Detailed incident documentation and forensic evidence for compliance or audit use.',
      'Strategic threat intelligence reports customized to your organization.',
      'Clear recovery roadmap and long-term security improvement plan.',
      'Optional tabletop exercises and team training sessions to strengthen readiness.',
    ],
    faqs: [
      {
        question: 'Do you only help after an attack, or can you prepare us beforehand?',
        answer:
          "We do both. We are here when incidents happen, but the best time to engage is before anything goes wrong. We help build response plans, run tabletop exercises, and integrate threat intelligence so your team is ready under pressure.",
      },
      {
        question: 'Can you help us understand who attacked us and why?',
        answer:
          'Yes. Through digital forensics and incident response, we reconstruct what happened, how access was gained, what the attacker targeted, and which tactics were used. Attribution is not always exact, but tactical understanding improves defense immediately.',
      },
      {
        question: 'Do you work with our existing security team, or do you take over?',
        answer:
          'We collaborate with your team rather than replacing it. If you have internal security staff, we extend capability with specialized forensics, malware analysis, and threat intelligence. If not, we can lead end-to-end while keeping stakeholders aligned.',
      },
      {
        question: 'How much does incident response cost?',
        answer:
          'Cost depends on scope, breach complexity, investigation depth, and the amount of forensic or malware analysis required. We support both retainer models (priority response, predictable cost) and on-demand engagements.',
      },
      {
        question: "What's the difference between forensics and malware analysis?",
        answer:
          'Digital forensics investigates incident timeline, compromised assets, and attacker movement. Malware analysis focuses on understanding malicious files and behavior through static and dynamic techniques. Together they provide a complete incident picture.',
      },
      {
        question: 'Do you provide ongoing threat intelligence, or just during incidents?',
        answer:
          'Both. During incidents, intelligence supports real-time response decisions. Outside incidents, ongoing monitoring and adversary tracking improve readiness, detection quality, and proactive defense.',
      },
      {
        question: 'How long does a typical incident investigation take?',
        answer:
          'Simple incidents may be contained and investigated in days, while complex multi-system cases can take weeks. Containment happens first, then deeper investigation. You receive regular updates throughout.',
      },
      {
        question: 'What information do you need from us to start an investigation?',
        answer:
          'We begin with what was observed, timing, affected systems, suspicious files/emails/activity, and access to logs and impacted hosts. If available, malware samples help. Even if details are incomplete, starting early preserves evidence and improves outcomes.',
      },
    ],
  },
  'emerging-specialized-security': {
    title: 'Emerging & Specialized Security',
    heroImage: '/images/services/emerging-and-specialized-security.webp',
    intro: 'As technology advances, so do the risks. Our specialized division tackles complex areas like IoT, firmware, and hardware vulnerabilities - ensuring even your most advanced systems stay secure. Through red team simulations and adversary exercises, we prepare your organization for what is next - not just what is known.',
    coverage: {
      intro: 'Emerging technology introduces unique attack surfaces. Our assessments are engineered to validate real-world risk across advanced platforms and innovation-heavy environments.',
      items: [
        {
          title: 'AI & Machine-Learning System Security:',
          description: 'AI models and data pipelines introduce unique exposures - poisoned training data, prompt injection, and model exfiltration among them. We evaluate every stage of your model lifecycle: data ingestion, algorithm integrity, inference security, and API exposure. Our goal is to keep your learning systems accurate, confidential, and tamper-resistant. You receive: a model-security review highlighting weak points in data handling, deployment, and access control, along with mitigation playbooks for developers and MLOps teams.',
        },
        {
          title: 'IoT & Embedded Device Security:',
          description: 'Billions of connected devices now shape industrial, medical, and consumer environments. We test firmware, wireless interfaces, and management dashboards to uncover insecure protocols, hard-coded secrets, and unpatched components. Our process includes both lab-based testing and field validation to mirror real-world attack conditions. You receive: detailed firmware analysis, communication-path assessments, and secure-update recommendations to harden every device layer.',
        },
        {
          title: 'Operational Technology (OT) & Industrial Control Systems:',
          description: 'As factories and utilities modernize, legacy control systems are suddenly exposed to modern attacks. We analyze network segmentation, access policies, and human-machine interface (HMI) security to ensure safety and uptime are never compromised. Testing is performed in a controlled environment to avoid production disruption. You receive: a resilience report mapping potential operational impact, prioritized countermeasures, and configuration adjustments for safe modernization.',
        },
        {
          title: 'Blockchain & Smart-Contract Assessment:',
          description: 'Blockchain brings transparency - and irreversible mistakes. We review contract logic, transaction flows, and wallet integrations to identify re-entrancy bugs, overflow issues, and flawed authorization patterns. Our team validates findings through controlled simulation rather than live-network experimentation. You receive: exploit-validated findings, secure-coding recommendations, and audit documentation suitable for investors or compliance reviews.',
        },
        {
          title: 'Quantum & Post-Quantum Readiness:',
          description: 'Quantum computing is reshaping cryptography faster than most organizations realize. We assess your existing encryption stack, key-management lifecycle, and data-retention policies to determine which assets require quantum-safe migration first. Our advisory covers algorithm selection, hybrid cryptography deployment, and transition planning. You receive: a step-by-step roadmap toward post-quantum security tailored to your infrastructure and regulatory environment.',
        },
      ],
      note: 'We tailor test depth and advisory scope to your technology stack, deployment maturity, and operational constraints.',
    },
    methodology: {
      intro: 'Emerging technology demands flexible testing and close collaboration. Our workflow adapts to each innovation cycle while maintaining the discipline of proven security practice.',
      steps: [
        {
          title: '1. Discovery & Context -',
          description: 'We begin by understanding the technology role in your organization - architecture, data flow, dependencies, and regulatory landscape.',
        },
        {
          title: '2. Threat Modeling -',
          description: 'Using attacker personas specific to your field, we forecast where exploitation could occur and design tests that mirror realistic scenarios.',
        },
        {
          title: '3. Controlled Assessment -',
          description: 'Hands-on evaluation combines protocol analysis, code review, and live simulation. All activity is authorized, measured, and logged for repeatability.',
        },
        {
          title: '4. Risk Interpretation -',
          description: 'Findings are translated into business impact rather than raw technical noise. Remediation is prioritized by financial, reputational, and operational cost.',
        },
        {
          title: '5. Strategic Reinforcement -',
          description: 'Beyond patching, we help embed secure design principles, update governance policies, and run staff workshops so new systems stay defensible as they evolve.',
        },
      ],
      conclusion: 'The outcome is not only reduced exposure today, but a stronger foundation for safe innovation over time.',
    },
    industryInsights: {
      intro: 'Different industries adopt emerging technologies in different ways, and each adoption path creates unique security pressure points.',
      items: [
        {
          title: 'Manufacturing & Automation',
          description: 'We address vulnerabilities in PLCs, robotic controllers, and industrial IoT sensors to help maintain uptime and worker safety during digital transformation.',
        },
        {
          title: 'Healthcare Technology',
          description: 'Connected diagnostics, wearables, and smart medical devices require privacy by design. We test unauthorized data access paths and firmware tampering risk without affecting patient operations.',
        },
        {
          title: 'Financial Innovation & Web3',
          description: 'New payment rails, DeFi applications, and digital-asset platforms demand heightened assurance. Our audits examine consensus logic, token contracts, and identity-verification flows for fraud resilience.',
        },
        {
          title: 'Smart Cities & Critical Infrastructure',
          description: 'Urban systems depend on synchronized digital control. We analyze communication frameworks, authentication methods, and data-collection gateways to reduce disruption risk in public utilities and transportation.',
        },
        {
          title: 'AI Product Companies',
          description: 'For teams embedding machine learning into daily operations, we provide lifecycle monitoring guidance, bias-safeguard controls, and integrity testing for deployed models.',
        },
      ],
    },
    deliverables: [
      'Comprehensive assessment reports linking technical risk to business context.',
      'Verified proof-of-concepts and non-disruptive testing evidence.',
      'Strategic guidance for secure adoption of emerging technologies.',
      'Workshops and training tailored to engineers and leadership alike.',
      'Optional ongoing monitoring for continuous protection.',
    ],
    faqs: [
      {
        question: "What's the difference between IoT security and regular penetration testing?",
        answer:
          'IoT security testing focuses on embedded devices like smart sensors, wearables, and industrial controllers. It includes firmware review, hardware-level analysis, and protocol validation. Regular penetration testing typically targets networks, web apps, APIs, and cloud systems.',
      },
      {
        question: 'What types of IoT and embedded devices can you audit?',
        answer:
          'We assess a broad range of targets, including smart home products, medical devices, ICS/SCADA components, automotive modules, wearables, drones, and custom embedded boards. Methodology is adapted to architecture and deployment context.',
      },
      {
        question: 'Do you only find vulnerabilities, or help us fix them too?',
        answer:
          'We do both. Findings include practical remediation guidance, such as code-level fixes, secure configuration updates, and architecture recommendations to reduce repeat risk.',
      },
      {
        question: 'Can you test devices that are already deployed in the field?',
        answer:
          'Yes. We can perform controlled field assessments through remote or on-site methods while minimizing operational disruption and preserving production stability.',
      },
      {
        question: "What's the MITRE ATT&CK framework, and why do you use it?",
        answer:
          'MITRE ATT&CK maps real adversary tactics and techniques. We use it to structure red team scenarios, align findings to known attack behavior, and improve defensive prioritization.',
      },
      {
        question: 'How do you measure our cyber maturity during a red team exercise?',
        answer:
          'We evaluate detection capability, response speed, escalation quality, and containment effectiveness across SOC and incident workflows. Output includes maturity insights and an actionable improvement roadmap.',
      },
      {
        question: 'What happens if your red team actually breaches our systems?',
        answer:
          'If access is achieved, we document the full attack path, data exposure, and potential business impact under controlled conditions. We avoid destructive actions and convert evidence into prioritized hardening guidance.',
      },
      {
        question: 'Can you combine IoT audits with red team exercises?',
        answer:
          'Absolutely. We frequently combine IoT assessment with red team operations to model device-to-cloud attack paths and deliver a complete view of end-to-end exposure.',
      },
    ],
  },
}

export default function ServiceDetail({ slug }) {
  const [openFaq, setOpenFaq] = useState(null)
  const service = serviceData[slug]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

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
      <div className="container mx-auto max-w-6xl px-6">
        <div className="relative h-[220px] md:h-[320px] rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[#DC2626]/22 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35 z-10" />
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-5xl px-6 py-14 md:py-16">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-5">
          {service.title}
        </h1>

        {/* Intro */}
        <p className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed max-w-4xl">
          {service.intro}
        </p>
        <div className="h-px w-full bg-white/10 mb-10" />

        {/* What this service covers */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            What This Service Covers
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-4xl">
            {service.coverage.intro}
          </p>

          <div className="space-y-8">
            {service.coverage.items.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg md:text-xl font-medium text-white mb-2">
                  {item.title.replace(':', '')}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-4xl">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-500 italic text-sm mt-8">({service.coverage.note})</p>
        </section>

        <div className="h-px w-full bg-white/10 mb-10" />

        {/* How we work */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            How We Work
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed max-w-4xl">
            {service.methodology.intro}
          </p>

          <ol className="space-y-6 mb-8">
            {service.methodology.steps.map((step, index) => (
              <li key={index} className="text-gray-300 leading-relaxed max-w-4xl">
                <strong className="text-white">{step.title.replace('—', '').trim()}</strong>{' '}
                <span className="text-gray-400">{step.description}</span>
              </li>
            ))}
          </ol>

          <p className="text-gray-400 leading-relaxed max-w-4xl">
            {service.methodology.conclusion}
          </p>
        </section>

        {service.industryInsights && (
          <>
            <div className="h-px w-full bg-white/10 mb-10" />
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Industry Insights & Specialized Services
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed max-w-4xl">
                {service.industryInsights.intro}
              </p>
              <div className="space-y-8">
                {service.industryInsights.items.map((item, index) => (
                  <div key={index}>
                    <h3 className="text-lg md:text-xl font-medium text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed max-w-4xl">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {service.deliverables && (
          <>
            <div className="h-px w-full bg-white/10 mb-10" />
            <section className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">What You Receive</h2>
              <ul className="space-y-4 max-w-4xl">
                {service.deliverables.map((item, index) => (
                  <li key={index} className="text-gray-300 leading-relaxed">
                    <span className="text-[#DC2626] mr-2">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}

      </div>

      {service.faqs && service.faqs.length > 0 && (
        <section className="border-t border-white/[0.06] bg-black" aria-labelledby="service-faq-heading">
          <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24">
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
                  <h2
                    id="service-faq-heading"
                    className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-white leading-tight tracking-tight"
                  >
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="min-w-0 divide-y divide-white/[0.08]">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="first:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:bg-white/[0.02] sm:py-[1.125rem]"
                        aria-expanded={openFaq === index}
                      >
                        <span className="text-[15px] sm:text-base font-medium text-white leading-snug pr-2">
                          {faq.question}
                        </span>
                        <span className="shrink-0 pt-0.5 text-white/90">
                          {openFaq === index ? (
                            <Minus className="h-5 w-5" strokeWidth={1.75} />
                          ) : (
                            <Plus className="h-5 w-5" strokeWidth={1.75} />
                          )}
                        </span>
                      </button>
                      {openFaq === index && (
                        <div className="pb-5 pt-0">
                          <p className="text-sm sm:text-[15px] text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

