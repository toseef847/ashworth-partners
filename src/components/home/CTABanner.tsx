import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface CTABannerProps {
  phone: string;
}

export default function CTABanner({ phone }: CTABannerProps) {
  return (
    <section
      className="bg-[#0f172a] py-16 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="container-site text-center">
        <span className="inline-block text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          Ready to Discuss Your Matter?
        </span>
        <h2
          id="cta-heading"
          className="font-display text-white font-semibold mb-4 leading-tight"
          style={{ fontSize: "var(--text-h1)" }}
        >
          Get Expert Legal Advice Today
        </h2>
        <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-8">
          Our solicitors are available Monday to Friday, 9am–6pm. Contact us for
          a free initial consultation and we will respond within one business day.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors focus-visible:outline-2 focus-visible:outline-[#c9a84c]"
          >
            Book a Consultation
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-white/20 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <Phone size={15} aria-hidden="true" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
