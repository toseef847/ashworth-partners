import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Ashworth & Partners Solicitors | London Law Firm",
  description:
    "Learn about Ashworth & Partners Solicitors — a leading London law firm with 30+ years of experience. SRA regulated, partner-led service.",
  path: "/about",
});

export default async function AboutPage() {
  const [config, solicitors] = await Promise.all([
    cms.getSiteConfig(),
    cms.getSolicitors(),
  ]);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="about-heading">
        <div className="container-site">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            About the Firm
          </p>
          <h1
            id="about-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            A Trusted London Law Firm Since {config.foundedYear}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-[#0f172a]/80 text-xl leading-relaxed font-light">
                Ashworth & Partners Solicitors has served clients across London
                and the United Kingdom since {config.foundedYear}, building a
                reputation for rigorous legal analysis, commercial pragmatism,
                and genuine client care.
              </p>
              <p>
                Founded by Eleanor Ashworth on the principle that first-class
                legal advice should be both accessible and personal, the firm
                has grown to encompass four specialist practice areas: Commercial
                Law, Private Client, Employment Law, and Dispute Resolution.
              </p>
              <p>
                We are proud to be a partner-led firm. When you instruct
                Ashworth & Partners, you deal directly with an experienced
                solicitor who takes personal responsibility for your matter from
                instruction through to resolution. We do not pass your matter to
                juniors or paralegals without your knowledge and consent.
              </p>
              <h2>Our Values</h2>
              <ul>
                <li>
                  <strong>Clarity:</strong> We explain the law in plain English,
                  always.
                </li>
                <li>
                  <strong>Integrity:</strong> We tell you what you need to hear,
                  not what you want to hear.
                </li>
                <li>
                  <strong>Responsiveness:</strong> We respond to every enquiry
                  within one business day.
                </li>
                <li>
                  <strong>Value:</strong> We are transparent about costs from
                  the outset and deliver measurable value.
                </li>
              </ul>
              <p>
                Ashworth & Partners Solicitors is authorised and regulated by
                the Solicitors Regulation Authority (SRA No.{" "}
                {config.sra.number}).
              </p>
            </div>

            {/* Team preview */}
            <div className="space-y-5">
              <h2 className="font-display font-semibold text-[#0f172a] text-2xl">
                Our Leadership
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {solicitors.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/our-team/${s.slug}`}
                    className="group block rounded-xl overflow-hidden border border-[#0f172a]/8 bg-white hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-square bg-[#f4f2ee]">
                      <Image
                        src={s.photo}
                        alt={s.photoAlt}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-[#0f172a] text-sm leading-snug">
                        {s.fullName}
                      </p>
                      <p className="text-[#0f172a]/50 text-xs">{s.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/our-team"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#9e7a2e] transition-colors"
              >
                Meet the full team →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
