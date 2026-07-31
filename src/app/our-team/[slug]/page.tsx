import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Mail, Phone, Award } from "lucide-react";
import { generatePageMetadata, generateSolicitorSchema } from "@/lib/seo";
import { cms } from "@/lib/cms/adapter";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Badge from "@/components/shared/Badge";
import CTABanner from "@/components/home/CTABanner";

export async function generateStaticParams() {
  const solicitors = await cms.getSolicitors();
  return solicitors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solicitor = await cms.getSolicitorBySlug(slug);
  if (!solicitor) return {};
  return generatePageMetadata({
    title: solicitor.seo.title,
    description: solicitor.seo.description,
    path: `/our-team/${solicitor.slug}`,
    image: solicitor.photo,
  });
}

export default async function SolicitorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [solicitor, config, practiceAreas] = await Promise.all([
    cms.getSolicitorBySlug(slug),
    cms.getSiteConfig(),
    cms.getPracticeAreas(),
  ]);

  if (!solicitor) notFound();

  const schema = generateSolicitorSchema(solicitor);
  const specialistAreas = practiceAreas.filter((a) =>
    solicitor.specialisms.includes(a.slug)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section
        className="bg-[#0f172a] py-16"
        aria-labelledby="solicitor-heading"
      >
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Our Team", href: "/our-team" },
              {
                label: solicitor.fullName,
                href: `/our-team/${solicitor.slug}`,
              },
            ]}
          />
          <div className="flex flex-col sm:flex-row items-start gap-8 mt-4">
            {/* Photo */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-[#c9a84c]/30 shrink-0">
              <Image
                src={solicitor.photo}
                alt={solicitor.photoAlt}
                fill
                className="object-cover object-top"
                sizes="160px"
                priority
              />
            </div>
            <div className="flex-1">
              <Badge variant="role" className="mb-3">
                {solicitor.role}
              </Badge>
              <h1
                id="solicitor-heading"
                className="font-display text-white font-semibold leading-tight"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {solicitor.fullName}
              </h1>
              <p className="text-white/60 mt-2 leading-relaxed max-w-xl">
                {solicitor.shortBio}
              </p>

              {/* Contact row */}
              <div className="flex flex-wrap items-center gap-5 mt-5">
                <a
                  href={`mailto:${solicitor.email}`}
                  className="flex items-center gap-2 text-[#c9a84c] text-sm hover:text-[#e8c97a] transition-colors"
                  aria-label={`Email ${solicitor.fullName}`}
                >
                  <Mail size={14} aria-hidden="true" />
                  {solicitor.email}
                </a>
                {solicitor.directPhone && (
                  <a
                    href={`tel:${solicitor.directPhone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
                    aria-label={`Call ${solicitor.fullName} directly`}
                  >
                    <Phone size={14} aria-hidden="true" />
                    {solicitor.directPhone}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Content */}
      <section className="section-py bg-[#faf9f7]">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div>
                <h2 className="font-display font-semibold text-[#0f172a] text-2xl mb-4">
                  About {solicitor.fullName.split(" ")[0]}
                </h2>
                <div className="prose max-w-none text-[#0f172a]/70 leading-relaxed">
                  <p>{solicitor.bio}</p>
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="font-display font-semibold text-[#0f172a] text-xl mb-4">
                  Qualifications & Memberships
                </h2>
                <ul className="space-y-2.5">
                  {solicitor.qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-3">
                      <Award
                        size={16}
                        className="text-[#c9a84c] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[#0f172a]/70 text-sm">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Languages */}
              {solicitor.languages && solicitor.languages.length > 1 && (
                <div>
                  <h2 className="font-display font-semibold text-[#0f172a] text-xl mb-3">
                    Languages
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {solicitor.languages.map((lang) => (
                      <Badge key={lang} variant="featured">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* SRA */}
              <div className="bg-white rounded-xl border border-[#0f172a]/8 p-5">
                <p className="text-[#0f172a]/40 text-xs uppercase tracking-wider font-semibold mb-2">
                  SRA Membership
                </p>
                <p className="font-mono text-[#0f172a] font-medium">
                  {solicitor.sraNumber}
                </p>
                <p className="text-[#0f172a]/50 text-xs mt-1">
                  Solicitor of England and Wales
                </p>
              </div>

              {/* Specialisms */}
              {specialistAreas.length > 0 && (
                <div className="bg-white rounded-xl border border-[#0f172a]/8 p-5">
                  <p className="text-[#0f172a]/40 text-xs uppercase tracking-wider font-semibold mb-3">
                    Areas of Practice
                  </p>
                  <ul className="space-y-2">
                    {specialistAreas.map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className="text-[#0f172a] text-sm hover:text-[#c9a84c] transition-colors"
                        >
                          {area.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Contact CTA */}
              <div className="bg-[#0f172a] rounded-xl p-5">
                <p className="text-white font-semibold text-sm mb-3">
                  Instruct {solicitor.fullName.split(" ")[0]}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center py-2.5 px-5 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors"
                >
                  Send an Enquiry
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner phone={config.contact.phone} />
    </>
  );
}
