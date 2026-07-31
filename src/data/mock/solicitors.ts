import type { Solicitor } from "@/types/cms";

export const solicitors: Solicitor[] = [
  {
    id: "eleanor-ashworth",
    slug: "eleanor-ashworth",
    fullName: "Eleanor Ashworth",
    role: "Partner",
    sraNumber: "SRA234567",
    qualifications: [
      "LLB (Hons), King's College London",
      "FCIArb (Fellow, Chartered Institute of Arbitrators)",
      "Solicitor of England and Wales",
    ],
    specialisms: ["commercial-law", "dispute-resolution"],
    bio: "Eleanor founded Ashworth & Partners in 1994 after a distinguished career at two of the City's leading law firms. With over 30 years of experience advising FTSE-listed companies, private equity houses, and family-owned businesses, Eleanor is recognised as one of London's foremost commercial lawyers. She has led some of the firm's most complex corporate transactions and arbitration proceedings, and is frequently instructed by clients who require discreet, strategic counsel at the highest level. Eleanor is a Fellow of the Chartered Institute of Arbitrators and sits as an arbitrator in commercial disputes.",
    shortBio:
      "Managing Partner with 30+ years of City experience in commercial law and international arbitration.",
    photo: "/images/team/eleanor-ashworth.png",
    photoAlt:
      "Eleanor Ashworth, Managing Partner at Ashworth & Partners Solicitors",
    email: "e.ashworth@ashworthpartners.co.uk",
    directPhone: "+44 20 7946 0801",
    isFeatured: true,
    order: 1,
    languages: ["English", "French"],
    seo: {
      title: "Eleanor Ashworth — Managing Partner | Ashworth & Partners",
      description:
        "Eleanor Ashworth is the Managing Partner of Ashworth & Partners Solicitors. An FCIArb with 30+ years of City experience in commercial law and arbitration.",
    },
  },
  {
    id: "james-pemberton",
    slug: "james-pemberton",
    fullName: "James Pemberton",
    role: "Partner",
    sraNumber: "SRA345678",
    qualifications: [
      "LLB (Hons), University of Oxford",
      "Solicitor of England and Wales",
      "Member, Society of Trust and Estate Practitioners (STEP)",
    ],
    specialisms: ["private-client"],
    bio: "James leads our Private Client practice and has spent his entire career advising high-net-worth individuals, families, and family offices on wealth structuring, succession planning, and estate administration. A member of the Society of Trust and Estate Practitioners (STEP), James is known for his meticulous attention to detail and his ability to navigate sensitive family dynamics with discretion and empathy. He advises trustees, executors, and beneficiaries on all aspects of trust and estate law, and has particular expertise in cross-border estates.",
    shortBio:
      "Head of Private Client with specialist expertise in estate planning, trusts, and cross-border succession.",
    photo: "/images/team/james-pemberton.png",
    photoAlt: "James Pemberton, Partner at Ashworth & Partners Solicitors",
    email: "j.pemberton@ashworthpartners.co.uk",
    directPhone: "+44 20 7946 0802",
    isFeatured: true,
    order: 2,
    languages: ["English"],
    seo: {
      title: "James Pemberton — Partner | Ashworth & Partners Solicitors",
      description:
        "James Pemberton is a Partner and Head of Private Client at Ashworth & Partners. STEP member specialising in wills, trusts, probate, and estate planning.",
    },
  },
  {
    id: "priya-sharma",
    slug: "priya-sharma",
    fullName: "Priya Sharma",
    role: "Senior Solicitor",
    sraNumber: "SRA456789",
    qualifications: [
      "LLB (Hons), University of Leicester",
      "LLM in Employment Law, BPP University",
      "Solicitor of England and Wales",
    ],
    specialisms: ["employment-law"],
    bio: "Priya is a Senior Solicitor in our Employment Law team and is recognised as one of the firm's most dynamic litigators. Having trained in a national law firm before joining Ashworth & Partners, Priya brings broad experience of both contentious and non-contentious employment matters. She acts for employers of all sizes on matters including redundancy programmes, TUPE transfers, and drafting employment documentation, and for employees facing unfair dismissal, discrimination, or whistleblowing claims. Priya is particularly noted for her skill in settlement agreement negotiations.",
    shortBio:
      "Senior Solicitor specialising in Employment Tribunal litigation, settlement agreements, and discrimination law.",
    photo: "/images/team/priya-sharma.png",
    photoAlt:
      "Priya Sharma, Senior Solicitor at Ashworth & Partners Solicitors",
    email: "p.sharma@ashworthpartners.co.uk",
    isFeatured: true,
    order: 3,
    languages: ["English", "Hindi", "Punjabi"],
    seo: {
      title: "Priya Sharma — Senior Solicitor | Ashworth & Partners",
      description:
        "Priya Sharma is a Senior Solicitor in the Employment Law team at Ashworth & Partners, specialising in Employment Tribunal litigation and settlement agreements.",
    },
  },
  {
    id: "oliver-hartley",
    slug: "oliver-hartley",
    fullName: "Oliver Hartley",
    role: "Solicitor",
    sraNumber: "SRA567890",
    qualifications: [
      "LLB (Hons), University of Manchester",
      "BPC (Distinction), The University of Law",
      "Solicitor of England and Wales",
    ],
    specialisms: ["dispute-resolution", "commercial-law"],
    bio: "Oliver joined Ashworth & Partners as a trainee and qualified into the Dispute Resolution team. He assists on a broad range of commercial litigation matters, from pre-action correspondence and disclosure exercises through to trial preparation and advocacy in the lower courts. Oliver has a particular interest in technology-related disputes and has been involved in several high-profile cases concerning software contracts and data breaches. He also assists the Commercial Law team on a range of transactional matters.",
    shortBio:
      "Solicitor in Dispute Resolution and Commercial Law with a focus on technology disputes and commercial litigation.",
    photo: "/images/team/oliver-hartley.png",
    photoAlt: "Oliver Hartley, Solicitor at Ashworth & Partners Solicitors",
    email: "o.hartley@ashworthpartners.co.uk",
    isFeatured: true,
    order: 4,
    languages: ["English", "Spanish"],
    seo: {
      title: "Oliver Hartley — Solicitor | Ashworth & Partners Solicitors",
      description:
        "Oliver Hartley is a Solicitor in Dispute Resolution and Commercial Law at Ashworth & Partners, focusing on commercial litigation and technology disputes.",
    },
  },
];
