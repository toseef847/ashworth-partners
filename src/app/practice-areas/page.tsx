import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import SectionHeading from "@/components/shared/SectionHeading";
import PracticeAreaCard from "@/components/shared/PracticeAreaCard";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Practice Areas | Ashworth & Partners Solicitors",
  description:
    "Expert legal advice across Commercial Law, Private Client, Employment Law, and Dispute Resolution. SRA regulated solicitors in London.",
  path: "/practice-areas",
  keywords: [
    "solicitors London",
    "commercial law",
    "private client solicitors",
    "employment law solicitors",
    "dispute resolution solicitors",
  ],
});

export default async function PracticeAreasPage() {
  const [config, practiceAreas] = await Promise.all([
    cms.getSiteConfig(),
    cms.getPracticeAreas(),
  ]);

  return (
    <>
      {/* Page Hero */}
      <section
        className="bg-[#0f172a] py-20"
        aria-labelledby="practice-areas-heading"
      >
        <div className="container-site">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Legal Services
          </p>
          <h1
            id="practice-areas-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Our Practice Areas
          </h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            We provide partner-led legal advice across four specialist practice
            areas. Whatever your legal need, our team has the expertise to help.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practiceAreas.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
