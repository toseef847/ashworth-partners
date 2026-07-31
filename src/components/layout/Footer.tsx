import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import type { SiteConfig, PracticeArea } from "@/types/cms";

interface FooterProps {
  config: SiteConfig;
  practiceAreas: PracticeArea[];
}

export default function Footer({ config, practiceAreas }: FooterProps) {
  return (
    <footer className="bg-[#0f172a] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Firm info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-white font-semibold text-xl tracking-wide block">
                Ashworth & Partners
              </span>
              <span className="text-[#c9a84c] text-xs font-body tracking-[0.2em] uppercase mt-0.5 block">
                Solicitors
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              {config.tagline}
            </p>
            {config.socialLinks.linkedin && (
              <a
                href={config.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashworth & Partners on LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/20 text-white/60 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-colors"
              >
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Col 2: Practice Areas */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Practice Areas
            </h3>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {config.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="text-[#c9a84c] mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <address className="text-white/60 text-sm not-italic leading-relaxed">
                  {config.contact.address.line1}
                  {config.contact.address.line2 && (
                    <>, {config.contact.address.line2}</>
                  )}
                  <br />
                  {config.contact.address.city},{" "}
                  {config.contact.address.postcode}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={15}
                  className="text-[#c9a84c] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${config.contact.phone.replace(/\s/g, "")}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {config.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={15}
                  className="text-[#c9a84c] shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${config.contact.email}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {config.contact.email}
                </a>
              </li>
              <li className="text-white/40 text-xs mt-1 leading-relaxed">
                {config.contact.officeHours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — SRA Compliance */}
      <div className="border-t border-white/10">
        <div className="container-site py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* SRA Badge placeholder */}
            <div
              className="shrink-0 px-3 py-1.5 border border-white/20 rounded text-xs text-white/50 font-mono tracking-wide"
              aria-label="SRA Regulated badge"
            >
              SRA Regulated
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              {config.firmName} is authorised and regulated by the{" "}
              <a
                href={config.sra.regulatoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-[#c9a84c] underline transition-colors"
              >
                {config.sra.authorisedBody}
              </a>{" "}
              (SRA No.{" "}
              <span className="font-mono">{config.sra.number}</span>). A list
              of the directors is available for inspection at our registered
              office. © {config.foundedYear}–{new Date().getFullYear()}{" "}
              {config.firmName}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
