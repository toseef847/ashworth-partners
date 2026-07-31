import type { Metadata } from "next";
import type { SiteConfig, Solicitor } from "@/types/cms";

export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ashworthpartners.co.uk";

interface PageMetadataInput {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  path = "/",
  image = "/images/og-default.jpg",
}: PageMetadataInput): Metadata {
  const url = `${BASE_URL}${path}`;
  return {
    title,
    description,
    keywords: keywords.join(", "),
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ashworth & Partners Solicitors",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export function generateLawFirmSchema(config: SiteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${BASE_URL}/#organization`,
    name: config.firmName,
    description: config.description,
    url: BASE_URL,
    telephone: config.contact.phone,
    email: config.contact.email,
    foundingDate: String(config.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: [
        config.contact.address.line1,
        config.contact.address.line2,
      ]
        .filter(Boolean)
        .join(", "),
      addressLocality: config.contact.address.city,
      postalCode: config.contact.address.postcode,
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    priceRange: "££–£££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: Object.values(config.socialLinks).filter(Boolean),
  };
}

export function generateSolicitorSchema(solicitor: Solicitor) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: solicitor.fullName,
    jobTitle: solicitor.role,
    email: solicitor.email,
    telephone: solicitor.directPhone,
    description: solicitor.shortBio,
    image: `${BASE_URL}${solicitor.photo}`,
    worksFor: {
      "@type": "LegalService",
      name: "Ashworth & Partners Solicitors",
      url: BASE_URL,
    },
    knowsAbout: solicitor.specialisms,
    hasCredential: solicitor.qualifications.map((q) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: q,
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ label: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };
}
