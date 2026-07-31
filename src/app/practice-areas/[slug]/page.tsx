import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import SectionHeading from "@/components/shared/SectionHeading";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FAQAccordion from "@/components/shared/FAQAccordion";
import SolicitorCard from "@/components/shared/SolicitorCard";
import CTABanner from "@/components/home/CTABanner";
import { CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  const areas = await cms.getPracticeAreas();
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = await cms.getPracticeAreaBySlug(slug);
  if (!area) return {};
  return generatePageMetadata({
    title: area.seo.title,
    description: area.seo.description,
    keywords: area.seo.keywords,
    path: `/practice-areas/${area.slug}`,
    image: area.heroImage,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [area, config, allSolicitors] = await Promise.all([
    cms.getPracticeAreaBySlug(slug),
    cms.getSiteConfig(),
    cms.getSolicitors(),
  ]);

  if (!area) notFound();

  const relatedSolicitors = allSolicitors.filter((s) =>
    s.specialisms.includes(area.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f172a] py-24 overflow-hidden" aria-labelledby="area-heading">
        <div className="absolute inset-0">
          <Image
            src={area.heroImage}
            alt={area.heroImageAlt}
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
        </div>
        <div className="relative z-10 container-site">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Practice Areas", href: "/practice-areas" },
              { label: area.name, href: `/practice-areas/${area.slug}` },
            ]}
          />
          <h1
            id="area-heading"
            className="font-display text-white font-semibold leading-tight max-w-2xl mt-2"
            style={{ fontSize: "var(--text-h1)" }}
          >
            {area.name}
          </h1>
          <p className="text-white/70 mt-4 max-w-xl leading-relaxed">
            {area.shortDescription}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors"
          >
            Get Advice on This Matter
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-[#0f172a]/80 text-lg leading-relaxed">
                  {area.fullDescription}
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="font-display font-semibold text-[#0f172a] text-2xl mb-5">
                  Services We Provide
                </h2>
                <ul className="space-y-3">
                  {area.services.map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-[#c9a84c] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[#0f172a]/80">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Benefits */}
              <div className="bg-[#0f172a] rounded-xl p-7">
                <h2 className="font-display font-semibold text-white text-xl mb-5">
                  Why Choose Ashworth & Partners
                </h2>
                <ul className="space-y-3">
                  {area.keyBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span
                        className="w-5 h-5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                      </span>
                      <span className="text-white/70 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              {area.faqItems && area.faqItems.length > 0 && (
                <div>
                  <h2 className="font-display font-semibold text-[#0f172a] text-2xl mb-5">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={area.faqItems} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Contact card */}
              <div className="bg-[#0f172a] rounded-xl p-6 sticky top-24">
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  Speak to a Specialist
                </h3>
                <p className="text-white/60 text-sm mb-5 leading-relaxed">
                  Contact us for a free initial consultation with a{" "}
                  {area.name.toLowerCase()} specialist.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-5 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors mb-3"
                >
                  Book a Consultation
                </Link>
                <a
                  href={`tel:${config.contact.phone.replace(/\s/g, "")}`}
                  className="block w-full text-center py-2.5 px-5 rounded-md border border-white/20 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  {config.contact.phone}
                </a>

                {/* Related areas */}
                {area.relatedSlugs && area.relatedSlugs.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-semibold">
                      Related Areas
                    </p>
                    <ul className="space-y-2">
                      {area.relatedSlugs.map((relSlug) => (
                        <li key={relSlug}>
                          <Link
                            href={`/practice-areas/${relSlug}`}
                            className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors capitalize"
                          >
                            {relSlug.replace(/-/g, " ")}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Solicitors */}
      {relatedSolicitors.length > 0 && (
        <section className="section-py bg-[#f4f2ee]" aria-labelledby="team-heading">
          <div className="container-site">
            <SectionHeading
              eyebrow="Our Specialists"
              title={`Our ${area.name} Team`}
              as="h2"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedSolicitors.map((s) => (
                <SolicitorCard key={s.slug} solicitor={s} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
