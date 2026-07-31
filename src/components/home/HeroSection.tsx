import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

interface HeroSectionProps {
  phone: string;
}

export default function HeroSection({ phone }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-banner.png"
          alt="Ashworth & Partners Solicitors London office"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/65 to-[#0f172a]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full py-24">
        <div className="max-w-2xl">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
            Authorised & Regulated by the SRA
          </p>

          <h1
            id="hero-heading"
            className="font-display text-white font-semibold leading-tight mb-6"
            style={{ fontSize: "var(--text-display)" }}
          >
            Expert Legal Counsel You Can Trust
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
            Ashworth & Partners is a leading London law firm providing clear,
            authoritative advice across commercial law, private client matters,
            employment law, and dispute resolution.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Book a Free Consultation
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/40 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-white"
            >
              Our Practice Areas
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-white/60 text-sm">
            <Phone size={14} aria-hidden="true" />
            <span>
              Call us:{" "}
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="text-white/90 hover:text-white font-medium"
              >
                {phone}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
          <rect x="6" y="5" width="4" height="6" rx="2" fill="currentColor" className="animate-bounce" />
        </svg>
      </div>
    </section>
  );
}
