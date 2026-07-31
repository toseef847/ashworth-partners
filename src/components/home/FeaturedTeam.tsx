import Link from "next/link";
import type { Solicitor } from "@/types/cms";
import SectionHeading from "@/components/shared/SectionHeading";
import SolicitorCard from "@/components/shared/SolicitorCard";

interface FeaturedTeamProps {
  solicitors: Solicitor[];
}

export default function FeaturedTeam({ solicitors }: FeaturedTeamProps) {
  return (
    <section
      className="section-py bg-[#faf9f7]"
      aria-labelledby="team-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Our Team"
          title="Meet Our Solicitors"
          subtitle="Our team of experienced, SRA-regulated solicitors brings specialist expertise and personal attention to every matter."
          as="h2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solicitors.map((s) => (
            <SolicitorCard key={s.slug} solicitor={s} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#0f172a]/20 text-[#0f172a] font-semibold text-sm hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-colors"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
