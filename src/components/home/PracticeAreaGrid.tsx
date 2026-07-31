import Link from "next/link";
import type { PracticeArea } from "@/types/cms";
import SectionHeading from "@/components/shared/SectionHeading";
import PracticeAreaCard from "@/components/shared/PracticeAreaCard";

interface PracticeAreaGridProps {
  practiceAreas: PracticeArea[];
}

export default function PracticeAreaGrid({
  practiceAreas,
}: PracticeAreaGridProps) {
  return (
    <section
      className="section-py bg-[#faf9f7]"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container-site">
        <SectionHeading
          eyebrow="Legal Expertise"
          title="Our Practice Areas"
          subtitle="From complex corporate transactions to sensitive personal matters, our specialist teams provide expert, partner-led legal advice across four core disciplines."
          as="h2"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {practiceAreas.map((area) => (
            <PracticeAreaCard key={area.slug} area={area} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#0f172a]/20 text-[#0f172a] font-semibold text-sm hover:bg-[#0f172a] hover:text-white hover:border-[#0f172a] transition-colors"
          >
            Explore All Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
