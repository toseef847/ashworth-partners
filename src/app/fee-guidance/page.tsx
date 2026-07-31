import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import SectionHeading from "@/components/shared/SectionHeading";
import FeeTable from "@/components/shared/FeeTable";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "Fee Guidance | Ashworth & Partners Solicitors",
  description:
    "Transparent fee guidance for all legal services at Ashworth & Partners. Hourly rates, fixed fees, and No Win No Fee arrangements explained clearly.",
  path: "/fee-guidance",
});

export default async function FeeGuidancePage() {
  const [config, feeGuides] = await Promise.all([
    cms.getSiteConfig(),
    cms.getFeeGuides(),
  ]);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#0f172a] py-20" aria-labelledby="fee-heading">
        <div className="container-site">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Transparent Pricing
          </p>
          <h1
            id="fee-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl"
            style={{ fontSize: "var(--text-h1)" }}
          >
            Fee Guidance
          </h1>
          <p className="text-white/60 mt-4 max-w-xl leading-relaxed">
            We are committed to transparency about costs. Below you will find
            indicative fees for our most common services. We will always confirm
            costs in writing at the outset of your matter.
          </p>
        </div>
      </section>

      {/* Fee Guides */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site space-y-16">
          {feeGuides.map((guide) => (
            <article key={guide.id} aria-labelledby={`fee-guide-${guide.id}`}>
              <SectionHeading
                eyebrow="Fee Guide"
                title={guide.practiceAreaName}
                subtitle={guide.introText}
                align="left"
                as="h2"
              />

              <FeeTable guide={guide} />

              {/* Special info boxes */}
              {guide.noWinNoFeeInfo && (
                <div className="mt-6 bg-[#0f172a] rounded-xl p-6">
                  <h3 className="font-display font-semibold text-white text-lg mb-2">
                    No Win, No Fee
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {guide.noWinNoFeeInfo}
                  </p>
                </div>
              )}

              {guide.legalAidInfo && (
                <div className="mt-4 bg-[#f4f2ee] rounded-xl border border-[#0f172a]/10 p-5">
                  <h3 className="font-semibold text-[#0f172a] text-sm mb-2">
                    Legal Aid
                  </h3>
                  <p className="text-[#0f172a]/60 text-sm leading-relaxed">
                    {guide.legalAidInfo}
                  </p>
                </div>
              )}

              <p className="text-[#0f172a]/30 text-xs mt-4">
                Fees last updated:{" "}
                {new Date(guide.lastUpdated).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
