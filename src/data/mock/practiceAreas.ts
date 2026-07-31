import type { PracticeArea } from "@/types/cms";

export const practiceAreas: PracticeArea[] = [
  {
    id: "commercial-law",
    slug: "commercial-law",
    name: "Commercial Law",
    shortDescription:
      "Strategic legal advice for businesses at every stage — from incorporation and contracts to mergers and corporate governance.",
    fullDescription:
      "Our commercial law team acts for a broad range of businesses, from established PLCs to ambitious start-ups. We provide clear, commercially focused advice on all aspects of business law, ensuring our clients can operate with confidence and transact efficiently. Whether you require assistance with complex corporate restructuring, day-to-day commercial contracts, or protecting your intellectual property, our partners bring decades of City experience to bear on every matter.",
    heroImage: "/images/practice-areas/commercial-law.png",
    cardImage: "/images/practice-areas/commercial-law.png",
    cardImageAlt:
      "London corporate boardroom representing commercial law services",
    heroImageAlt: "Commercial Law at Ashworth & Partners Solicitors",
    icon: "Briefcase",
    isFeatured: true,
    order: 1,
    services: [
      "Corporate mergers and acquisitions",
      "Commercial contract drafting and negotiation",
      "Company formations and shareholder agreements",
      "Joint ventures and partnership agreements",
      "Intellectual property protection and licensing",
      "Data protection and GDPR compliance",
    ],
    keyBenefits: [
      "City-level expertise with partner-led service on every matter",
      "Fixed-fee options available for routine commercial work",
      "Rapid turnaround for time-sensitive transactions",
    ],
    relatedSlugs: ["dispute-resolution"],
    faqItems: [
      {
        question: "Do you act for start-ups as well as established businesses?",
        answer:
          "Yes. We advise businesses at every stage of their lifecycle, from pre-incorporation structuring through to exit. We offer tailored packages for early-stage companies.",
      },
      {
        question: "Can you help with contracts governed by overseas law?",
        answer:
          "Our team advises on English law contracts and, through our network of trusted international law firms, can coordinate advice on multi-jurisdictional matters.",
      },
      {
        question: "How quickly can you review a commercial contract?",
        answer:
          "For standard commercial agreements, we can typically provide a review and mark-up within 24–48 hours of receiving the document, subject to availability.",
      },
    ],
    seo: {
      title: "Commercial Law Solicitors London | Ashworth & Partners",
      description:
        "Expert commercial law advice for businesses in London and the UK. Corporate contracts, M&A, company formations, IP protection. Partner-led service. SRA regulated.",
      keywords: [
        "commercial law solicitors London",
        "corporate law firm UK",
        "business law solicitors",
        "M&A solicitors London",
        "commercial contracts lawyer",
      ],
    },
  },
  {
    id: "private-client",
    slug: "private-client",
    name: "Private Client",
    shortDescription:
      "Sensitive, discreet advice on wills, trusts, estate planning, probate, and lasting powers of attorney for individuals and families.",
    fullDescription:
      "Our private client team provides compassionate, expert legal advice on all aspects of personal wealth planning and estate administration. We understand that these matters are deeply personal, and we take the time to understand your family's circumstances, wishes, and long-term objectives. From drafting a straightforward will to advising on complex trust structures or navigating a contested probate, we are with you every step of the way.",
    heroImage: "/images/practice-areas/private-client.png",
    cardImage: "/images/practice-areas/private-client.png",
    cardImageAlt:
      "Elegant writing desk representing private client advisory services",
    heroImageAlt: "Private Client Services at Ashworth & Partners Solicitors",
    icon: "Home",
    isFeatured: true,
    order: 2,
    services: [
      "Wills and testament drafting",
      "Lasting Powers of Attorney (LPA)",
      "Trusts — creation, management, and advice",
      "Probate and estate administration",
      "Inheritance tax planning",
      "Court of Protection applications",
    ],
    keyBenefits: [
      "Sensitive, confidential advice tailored to your family circumstances",
      "Competitive fixed fees for wills and LPAs",
      "Home visits available for clients with limited mobility",
    ],
    relatedSlugs: [],
    faqItems: [
      {
        question: "Do I need a solicitor to make a will?",
        answer:
          "While it is possible to write a will without a solicitor, professional legal advice ensures your wishes are properly recorded, legally valid, and that inheritance tax implications are considered.",
      },
      {
        question: "How long does probate typically take?",
        answer:
          "A straightforward estate can often be administered within 6–12 months. More complex estates involving property, multiple beneficiaries, or overseas assets may take longer.",
      },
      {
        question: "What is a Lasting Power of Attorney?",
        answer:
          "An LPA is a legal document that allows you to appoint one or more trusted people to make decisions about your property and finances or your health and welfare, should you lose mental capacity.",
      },
    ],
    seo: {
      title: "Private Client Solicitors London | Wills, Trusts & Probate",
      description:
        "Expert private client advice from experienced London solicitors. Wills, trusts, LPAs, probate, and inheritance tax planning. Compassionate, confidential service. SRA regulated.",
      keywords: [
        "private client solicitors London",
        "will solicitors London",
        "probate solicitors London",
        "lasting power of attorney solicitors",
        "estate planning solicitors UK",
      ],
    },
  },
  {
    id: "employment-law",
    slug: "employment-law",
    name: "Employment Law",
    shortDescription:
      "Authoritative employment law advice for employers and employees, covering redundancy, unfair dismissal, discrimination, and settlement agreements.",
    fullDescription:
      "Employment law is one of the most fast-moving areas of English law, and the stakes — for employers and employees alike — are significant. Our employment law team advises on the full spectrum of workplace matters. We act for both employers seeking to manage their workforce legally and efficiently, and for individuals who believe their rights have been breached. Our approach is pragmatic: we aim to resolve disputes efficiently, minimising cost and disruption wherever possible.",
    heroImage: "/images/practice-areas/employment-law.png",
    cardImage: "/images/practice-areas/employment-law.png",
    cardImageAlt:
      "Modern office environment representing employment law services",
    heroImageAlt: "Employment Law at Ashworth & Partners Solicitors",
    icon: "Users",
    isFeatured: true,
    order: 3,
    services: [
      "Unfair and wrongful dismissal claims",
      "Discrimination and harassment claims",
      "Settlement agreements (including negotiation)",
      "Redundancy and TUPE advice",
      "Employment contracts and staff handbooks",
      "Employment Tribunal representation",
    ],
    keyBenefits: [
      "No Win, No Fee available for qualifying Employment Tribunal claims",
      "Fixed-fee initial consultation to assess your options",
      "Strong track record at Employment Tribunal",
    ],
    relatedSlugs: ["dispute-resolution"],
    faqItems: [
      {
        question: "What is the time limit for bringing an Employment Tribunal claim?",
        answer:
          "In most cases, you must submit your claim to ACAS Early Conciliation within three months (less one day) of the act you are complaining about, such as the date of dismissal.",
      },
      {
        question: "Can I negotiate my settlement agreement without a solicitor?",
        answer:
          "A settlement agreement is only legally valid if you have received independent legal advice from a qualified solicitor. Your employer will typically contribute to the cost of this advice.",
      },
      {
        question: "Do you offer No Win, No Fee for Employment Tribunal?",
        answer:
          "Yes, for qualifying cases with strong prospects of success, we offer Conditional Fee Arrangements (No Win, No Fee). We assess this at your initial consultation.",
      },
    ],
    seo: {
      title: "Employment Law Solicitors London | Ashworth & Partners",
      description:
        "Expert employment law advice in London. Unfair dismissal, discrimination, settlement agreements, redundancy, Employment Tribunal. No Win No Fee available. SRA regulated.",
      keywords: [
        "employment law solicitors London",
        "unfair dismissal solicitors",
        "employment tribunal solicitors",
        "settlement agreement solicitors",
        "discrimination solicitors London",
      ],
    },
  },
  {
    id: "dispute-resolution",
    slug: "dispute-resolution",
    name: "Dispute Resolution",
    shortDescription:
      "Resolving commercial and civil disputes through negotiation, mediation, arbitration, and litigation — with a focus on cost-effective outcomes.",
    fullDescription:
      "When disputes arise, swift and strategic action is essential. Our dispute resolution team combines deep litigation experience with a pragmatic commitment to achieving the best possible outcome for our clients — whether through negotiation, alternative dispute resolution, or court proceedings. We act in High Court litigation, arbitration, and mediation across a wide range of commercial and civil disputes, and our forensic approach to case analysis means we can identify strengths, manage risk, and advise on the most cost-effective route to resolution.",
    heroImage: "/images/practice-areas/dispute-resolution.png",
    cardImage: "/images/practice-areas/dispute-resolution.png",
    cardImageAlt:
      "British court building representing dispute resolution services",
    heroImageAlt: "Dispute Resolution at Ashworth & Partners Solicitors",
    icon: "Scale",
    isFeatured: true,
    order: 4,
    services: [
      "Commercial litigation in the High Court",
      "Mediation and negotiated settlements",
      "Arbitration proceedings",
      "Breach of contract claims",
      "Professional negligence claims",
      "Debt recovery and enforcement",
    ],
    keyBenefits: [
      "Experienced High Court litigators with a strong track record",
      "ADR-first approach to minimise costs and time",
      "Clear, regular cost updates throughout your matter",
    ],
    relatedSlugs: ["commercial-law", "employment-law"],
    faqItems: [
      {
        question: "Should I try mediation before going to court?",
        answer:
          "Courts strongly encourage parties to attempt mediation before litigation, and unreasonable refusal can affect cost orders. Mediation is often faster and less expensive than court proceedings, and we would always consider this route with you first.",
      },
      {
        question: "How long does commercial litigation typically take?",
        answer:
          "The timeline varies enormously depending on the complexity of the dispute and the court's timetable. A straightforward County Court claim may resolve within 12 months; complex High Court proceedings can take two to three years or more.",
      },
      {
        question: "Is Legal Aid available for commercial disputes?",
        answer:
          "Legal Aid is generally not available for commercial disputes. We can advise on other funding arrangements, including After the Event (ATE) insurance and Damages-Based Agreements.",
      },
    ],
    seo: {
      title: "Dispute Resolution Solicitors London | Ashworth & Partners",
      description:
        "Expert dispute resolution and commercial litigation in London. Mediation, arbitration, High Court litigation, breach of contract. SRA regulated.",
      keywords: [
        "dispute resolution solicitors London",
        "commercial litigation solicitors",
        "mediation solicitors London",
        "arbitration lawyers UK",
        "breach of contract solicitors",
      ],
    },
  },
];
