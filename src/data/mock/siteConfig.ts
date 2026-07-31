import type { SiteConfig } from "@/types/cms";

export const siteConfig: SiteConfig = {
  firmName: "Ashworth & Partners Solicitors",
  tagline: "Expert Legal Counsel. Trusted Guidance.",
  description:
    "Ashworth & Partners Solicitors is a leading London law firm providing expert legal services in Commercial Law, Private Client, Employment Law, and Dispute Resolution. SRA authorised and regulated.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashworthpartners.co.uk",
  foundedYear: 1994,
  contact: {
    phone: "+44 20 7946 0800",
    email: "enquiries@ashworthpartners.co.uk",
    address: {
      line1: "14 Finsbury Square",
      line2: "Third Floor",
      city: "London",
      postcode: "EC2A 1HP",
      country: "United Kingdom",
    },
    officeHours: "Monday–Friday: 9:00am–6:00pm",
  },
  sra: {
    number: "SRA123456",
    authorisedBody: "Solicitors Regulation Authority",
    regulatoryBody: "Solicitors Regulation Authority",
    regulatoryUrl: "https://www.sra.org.uk",
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/ashworth-partners",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "Practice Areas",
      href: "/practice-areas",
      children: [
        { label: "Commercial Law", href: "/practice-areas/commercial-law" },
        { label: "Private Client", href: "/practice-areas/private-client" },
        { label: "Employment Law", href: "/practice-areas/employment-law" },
        {
          label: "Dispute Resolution",
          href: "/practice-areas/dispute-resolution",
        },
      ],
    },
    { label: "Our Team", href: "/our-team" },
    { label: "Fee Guidance", href: "/fee-guidance" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "About the Firm", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Our Team", href: "/our-team" },
    { label: "Fee Guidance", href: "/fee-guidance" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
  cookieBannerText:
    "This website uses essential cookies only to ensure the site functions correctly. No tracking or advertising cookies are used.",
  noWaiverDisclaimer:
    "The information provided on this page is intended as a general guide and does not constitute legal advice. Fee estimates are provided for transparency purposes and are not contractually binding until confirmed in a client care letter. VAT is applicable at the current rate. Disbursements are additional costs and will be confirmed at the outset of your matter. Nothing on this page constitutes a waiver of legal professional privilege.",
};
