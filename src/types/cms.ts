// ─── Navigation ────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isExternal?: boolean;
}

// ─── Site Config ───────────────────────────────────────────────────────────

export interface ContactDetails {
  phone: string;
  email: string;
  address: {
    line1: string;
    line2?: string;
    city: string;
    postcode: string;
    country: string;
  };
  officeHours: string;
  mapEmbedUrl?: string;
}

export interface SRADetails {
  number: string;
  authorisedBody: string;
  regulatoryBody: string;
  regulatoryUrl: string;
}

export interface SiteConfig {
  firmName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  foundedYear: number;
  contact: ContactDetails;
  sra: SRADetails;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
  };
  nav: NavItem[];
  footerLinks: NavItem[];
  cookieBannerText: string;
  noWaiverDisclaimer: string;
}

// ─── Practice Areas ────────────────────────────────────────────────────────

export interface PracticeArea {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  cardImage: string;
  cardImageAlt: string;
  heroImageAlt: string;
  services: string[];
  keyBenefits: string[];
  icon: string;
  isFeatured: boolean;
  order: number;
  relatedSlugs?: string[];
  faqItems?: Array<{ question: string; answer: string }>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

// ─── Solicitor Profiles ────────────────────────────────────────────────────

export type SolicitorRole =
  | "Partner"
  | "Senior Associate"
  | "Managing Associate"
  | "Associate"
  | "Consultant"
  | "Paralegal"
  | "Senior Solicitor"
  | "Solicitor"
  | "Of Counsel";

export interface Solicitor {
  id: string;
  slug: string;
  fullName: string;
  role: SolicitorRole;
  sraNumber: string;
  qualifications: string[];
  specialisms: string[];
  bio: string;
  shortBio: string;
  photo: string;
  photoAlt: string;
  email: string;
  directPhone?: string;
  isFeatured: boolean;
  order: number;
  languages?: string[];
  seo: {
    title: string;
    description: string;
  };
}

// ─── Testimonials ──────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  clientName: string;
  clientInitials: string;
  matter: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  date: string;
  isFeatured: boolean;
  practiceAreaSlug?: string;
}

// ─── Fee Guides ────────────────────────────────────────────────────────────

export type FeeType = "hourly" | "fixed" | "cfa" | "legal-aid";

export interface FeeRange {
  label: string;
  fromGBP: number;
  toGBP?: number;
  unit?: "per-hour" | "per-matter" | "per-document";
  notes?: string;
}

export interface FeeService {
  name: string;
  description: string;
  type: FeeType;
  ranges: FeeRange[];
  vatNote: string;
  disbursementsNote?: string;
}

export interface FeeGuide {
  id: string;
  practiceAreaSlug: string;
  practiceAreaName: string;
  introText: string;
  services: FeeService[];
  legalAidInfo?: string;
  noWinNoFeeInfo?: string;
  noWaiverText: string;
  lastUpdated: string;
}

// ─── Service Pages ─────────────────────────────────────────────────────────

export interface ServicePageSection {
  type: "text" | "image-text" | "list" | "cta";
  heading?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  items?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ServicePage {
  id: string;
  slug: string;
  practiceAreaSlug: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  sections: ServicePageSection[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
