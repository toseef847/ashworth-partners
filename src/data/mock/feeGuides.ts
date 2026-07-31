import type { FeeGuide } from "@/types/cms";

const NO_WAIVER_TEXT =
  "The fees set out below are provided for general guidance only and are not contractually binding until confirmed in a client care letter issued at the outset of your matter. All fees are subject to VAT at the current rate of 20% unless otherwise stated. Disbursements (third-party costs such as court fees, counsel's fees, or Land Registry fees) are not included in the figures below and will be agreed separately. Nothing on this page constitutes a waiver of legal professional privilege.";

export const feeGuides: FeeGuide[] = [
  {
    id: "commercial-law-fees",
    practiceAreaSlug: "commercial-law",
    practiceAreaName: "Commercial Law",
    introText:
      "Our commercial law fees are structured to provide transparent, predictable costs for our clients. We offer hourly rates for complex or unpredictable matters and fixed fees for routine commercial work. We will always discuss the most appropriate fee structure at the outset of your matter.",
    services: [
      {
        name: "Hourly Rate — Commercial Advice",
        description:
          "Our standard hourly rates for commercial law matters, charged in six-minute units.",
        type: "hourly",
        ranges: [
          {
            label: "Partner",
            fromGBP: 350,
            toGBP: 425,
            unit: "per-hour",
            notes: "Eleanor Ashworth: £425/hr",
          },
          {
            label: "Senior Associate",
            fromGBP: 250,
            toGBP: 295,
            unit: "per-hour",
          },
          {
            label: "Associate",
            fromGBP: 195,
            toGBP: 250,
            unit: "per-hour",
          },
        ],
        vatNote: "All hourly rates are subject to VAT at 20%.",
      },
      {
        name: "Fixed Fee — Company Formation",
        description:
          "Formation of a private limited company, including articles of association, shareholder agreement template, and Companies House registration.",
        type: "fixed",
        ranges: [
          {
            label: "Standard formation",
            fromGBP: 750,
            unit: "per-matter",
            notes: "Includes Companies House filing fee (approx. £12)",
          },
          {
            label: "Formation with bespoke shareholders agreement",
            fromGBP: 1500,
            toGBP: 2500,
            unit: "per-matter",
          },
        ],
        vatNote: "All fixed fees are subject to VAT at 20%.",
        disbursementsNote: "Companies House registration fee (approx. £12) included.",
      },
      {
        name: "Fixed Fee — Commercial Contract Review",
        description:
          "Review and mark-up of a standard commercial contract of up to 20 pages.",
        type: "fixed",
        ranges: [
          {
            label: "Contract review (up to 20 pages)",
            fromGBP: 500,
            toGBP: 950,
            unit: "per-matter",
          },
          {
            label: "Negotiation and re-drafting",
            fromGBP: 1000,
            toGBP: 3500,
            unit: "per-matter",
            notes: "Dependent on complexity and number of negotiation rounds",
          },
        ],
        vatNote: "All fixed fees are subject to VAT at 20%.",
      },
    ],
    noWaiverText: NO_WAIVER_TEXT,
    lastUpdated: "2025-10-01",
  },
  {
    id: "private-client-fees",
    practiceAreaSlug: "private-client",
    practiceAreaName: "Private Client",
    introText:
      "We believe in transparent, fair pricing for private client work. Most routine matters are available on a fixed-fee basis so you know the full cost from the outset. More complex matters, such as contested probate, are charged at hourly rates, and we will provide a detailed cost estimate before proceeding.",
    services: [
      {
        name: "Will Drafting",
        description: "Preparation of a legally valid will tailored to your circumstances.",
        type: "fixed",
        ranges: [
          {
            label: "Single simple will",
            fromGBP: 350,
            unit: "per-matter",
            notes: "Straightforward estate, single beneficiary or standard family provision",
          },
          {
            label: "Mirror wills (couple)",
            fromGBP: 550,
            unit: "per-matter",
          },
          {
            label: "Complex will (trusts, foreign assets, business interests)",
            fromGBP: 950,
            toGBP: 2500,
            unit: "per-matter",
          },
        ],
        vatNote: "All fees are subject to VAT at 20%.",
      },
      {
        name: "Lasting Power of Attorney (LPA)",
        description:
          "Preparation and registration of a Property & Financial Affairs LPA and/or Health & Welfare LPA.",
        type: "fixed",
        ranges: [
          {
            label: "Single LPA",
            fromGBP: 550,
            unit: "per-matter",
            notes: "Excludes OPG registration fee (currently £82 per LPA)",
          },
          {
            label: "Both LPA types",
            fromGBP: 950,
            unit: "per-matter",
            notes: "Excludes OPG registration fees",
          },
        ],
        vatNote: "Solicitor fees subject to VAT at 20%.",
        disbursementsNote:
          "Office of the Public Guardian (OPG) registration fee: currently £82 per LPA. This is payable separately and is not included in our fees.",
      },
      {
        name: "Probate and Estate Administration",
        description:
          "Obtaining a Grant of Probate and administering the estate of a deceased person.",
        type: "fixed",
        ranges: [
          {
            label: "Simple estate (under £500,000, no property, no disputes)",
            fromGBP: 2500,
            toGBP: 4000,
            unit: "per-matter",
          },
          {
            label: "Moderate estate (property, multiple assets)",
            fromGBP: 4000,
            toGBP: 8000,
            unit: "per-matter",
          },
          {
            label: "Complex estate (business interests, overseas assets, tax planning)",
            fromGBP: 8000,
            unit: "per-matter",
            notes: "Quoted individually — contact us for an estimate",
          },
        ],
        vatNote: "All fees are subject to VAT at 20%.",
        disbursementsNote:
          "Disbursements typically include: Probate application fee (currently £273), copy Grant fees (£1.50 each), bankruptcy searches (£2 per beneficiary), and property transfer fees where applicable.",
      },
    ],
    noWaiverText: NO_WAIVER_TEXT,
    lastUpdated: "2025-10-01",
  },
  {
    id: "employment-law-fees",
    practiceAreaSlug: "employment-law",
    practiceAreaName: "Employment Law",
    introText:
      "We offer a range of fee arrangements for employment law matters to suit different circumstances and budgets. For eligible claims with strong prospects, we offer No Win, No Fee (Conditional Fee Arrangements). Fixed fees are available for settlement agreement advice and initial consultations.",
    services: [
      {
        name: "Initial Employment Law Consultation",
        description:
          "A 60-minute consultation to assess your situation and advise on your options.",
        type: "fixed",
        ranges: [
          {
            label: "Initial 60-minute consultation",
            fromGBP: 175,
            unit: "per-matter",
            notes: "Fee credited against any subsequent instruction",
          },
        ],
        vatNote: "Subject to VAT at 20%.",
      },
      {
        name: "Settlement Agreement Advice",
        description:
          "Review of a settlement agreement and independent legal advice certificate (required for the agreement to be legally valid).",
        type: "fixed",
        ranges: [
          {
            label: "Standard settlement agreement advice",
            fromGBP: 500,
            toGBP: 750,
            unit: "per-matter",
            notes: "Your employer will typically contribute to this cost",
          },
          {
            label: "Complex agreement (equity, LTIPs, restrictive covenants)",
            fromGBP: 750,
            toGBP: 1500,
            unit: "per-matter",
          },
        ],
        vatNote: "Subject to VAT at 20%.",
      },
      {
        name: "Employment Tribunal Claim",
        description:
          "Full representation in Employment Tribunal proceedings, from ACAS Early Conciliation through to final hearing.",
        type: "cfa",
        ranges: [
          {
            label: "No Win, No Fee (CFA) — qualifying claims",
            fromGBP: 0,
            notes:
              "Success fee of up to 25% of compensation awarded (capped in personal injury cases). Assessed at initial consultation.",
          },
          {
            label: "Hourly rate — employer-side or non-CFA claims",
            fromGBP: 250,
            toGBP: 350,
            unit: "per-hour",
          },
        ],
        vatNote: "VAT at 20% applies to all hourly charges. CFA success fee is VAT-exempt.",
        disbursementsNote:
          "Employment Tribunal fees were abolished in 2017. Counsel's fees for hearing representation are additional and will be quoted separately.",
      },
    ],
    noWinNoFeeInfo:
      "We offer No Win, No Fee (Conditional Fee Arrangements) for Employment Tribunal claims where we assess the prospects of success as reasonable. Under a CFA, you pay nothing if your claim is unsuccessful (subject to the terms of the agreement). If your claim succeeds, we charge a success fee of up to 25% of any compensation awarded. We assess eligibility for a CFA at your initial consultation.",
    noWaiverText: NO_WAIVER_TEXT,
    lastUpdated: "2025-10-01",
  },
  {
    id: "dispute-resolution-fees",
    practiceAreaSlug: "dispute-resolution",
    practiceAreaName: "Dispute Resolution",
    introText:
      "Commercial dispute resolution work is predominantly charged at hourly rates, reflecting the unpredictable nature of litigation. We are committed to regular cost updates and will always advise you when costs are likely to exceed initial estimates. We can also discuss After the Event (ATE) insurance to manage your litigation risk.",
    services: [
      {
        name: "Hourly Rates — Dispute Resolution",
        description:
          "Our standard hourly rates for litigation, arbitration, and dispute resolution matters.",
        type: "hourly",
        ranges: [
          {
            label: "Partner",
            fromGBP: 375,
            toGBP: 425,
            unit: "per-hour",
          },
          {
            label: "Senior Associate",
            fromGBP: 265,
            toGBP: 295,
            unit: "per-hour",
          },
          {
            label: "Associate",
            fromGBP: 210,
            toGBP: 250,
            unit: "per-hour",
          },
        ],
        vatNote: "All hourly rates are subject to VAT at 20%.",
        disbursementsNote:
          "Court fees, counsel's fees, expert witness fees, and other disbursements are not included in our hourly rates and will be agreed separately.",
      },
      {
        name: "Fixed Fee — Letter Before Claim",
        description:
          "Preparation of a Letter Before Claim (LBC) in accordance with the relevant Pre-Action Protocol.",
        type: "fixed",
        ranges: [
          {
            label: "Standard Letter Before Claim",
            fromGBP: 750,
            toGBP: 1500,
            unit: "per-matter",
          },
        ],
        vatNote: "Subject to VAT at 20%.",
      },
      {
        name: "Fixed Fee — Mediation",
        description:
          "Preparation and attendance at a half-day or full-day mediation session.",
        type: "fixed",
        ranges: [
          {
            label: "Half-day mediation preparation and attendance",
            fromGBP: 1500,
            toGBP: 2500,
            unit: "per-matter",
          },
          {
            label: "Full-day mediation preparation and attendance",
            fromGBP: 2500,
            toGBP: 4500,
            unit: "per-matter",
          },
        ],
        vatNote: "Subject to VAT at 20%.",
        disbursementsNote: "Mediator fees are charged separately by the mediator and split between the parties.",
      },
    ],
    legalAidInfo:
      "Legal Aid is not available for commercial dispute resolution matters. However, we can advise on alternative funding arrangements, including After the Event (ATE) insurance, Damages-Based Agreements (DBAs), and third-party litigation funding. Please raise this with us at your initial consultation.",
    noWaiverText: NO_WAIVER_TEXT,
    lastUpdated: "2025-10-01",
  },
];
