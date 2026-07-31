import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import SectionHeading from "@/components/shared/SectionHeading";
import SolicitorCard from "@/components/shared/SolicitorCard";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Team | Ashworth & Partners Solicitors",
  description:
    "Meet the experienced, SRA-regulated solicitors at Ashworth & Partners. Partner-led legal advice in London.",
  path: "/our-team",
});

export default async function OurTeamPage() {
  const [config, solicitors] = await Promise.all([
    cms.getSiteConfig(),
    cms.getSolicitors(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="team-hero-heading">
        <div className="container-site">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Our Solicitors
          </p>
          <h1
            id="team-hero-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Meet Our Team
          </h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            Our SRA-regulated solicitors bring specialist expertise and personal
            commitment to every matter. When you instruct us, you deal directly
            with a qualified solicitor throughout.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solicitors.map((s) => (
              <SolicitorCard key={s.slug} solicitor={s} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
