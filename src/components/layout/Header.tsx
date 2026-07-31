import Link from "next/link";
import { Phone } from "lucide-react";
import type { SiteConfig, PracticeArea } from "@/types/cms";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

interface HeaderProps {
  config: SiteConfig;
  practiceAreas: PracticeArea[];
}

export default function Header({ config, practiceAreas }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#0f172a]/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-site">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none focus-visible:outline-2 focus-visible:outline-[#c9a84c] focus-visible:rounded"
            aria-label={`${config.firmName} — Home`}
          >
            <span className="font-display text-white font-semibold text-lg lg:text-xl tracking-wide">
              Ashworth & Partners
            </span>
            <span className="text-[#c9a84c] text-[10px] lg:text-xs font-body tracking-[0.2em] uppercase mt-0.5">
              Solicitors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
            {config.nav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#c9a84c]"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      className="mt-0.5 transition-transform group-hover:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="M2 4l4 4 4-4" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    role="menu"
                    className="absolute top-full left-0 mt-1 w-56 bg-[#0f172a] border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  >
                    <ul className="py-2">
                      {practiceAreas.map((area) => (
                        <li key={area.slug}>
                          <Link
                            href={`/practice-areas/${area.slug}`}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {area.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${config.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
              aria-label={`Call us on ${config.contact.phone}`}
            >
              <Phone size={14} aria-hidden="true" />
              <span className="font-medium">{config.contact.phone}</span>
            </a>
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors focus-visible:outline-2 focus-visible:outline-[#e8c97a]"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Nav — hidden at lg+ via wrapper; display:none hides fixed descendants too */}
          <div className="lg:hidden">
            <MobileNav nav={config.nav} phone={config.contact.phone} />
          </div>
        </div>
      </div>
    </header>
  );
}
