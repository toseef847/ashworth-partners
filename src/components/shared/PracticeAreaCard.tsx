import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Briefcase, Home, Users, Scale } from "lucide-react";
import type { PracticeArea } from "@/types/cms";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: "true" | "false" }>> = {
  Briefcase,
  Home,
  Users,
  Scale,
};

interface PracticeAreaCardProps {
  area: PracticeArea;
  className?: string;
}

export default function PracticeAreaCard({
  area,
  className,
}: PracticeAreaCardProps) {
  const Icon = iconMap[area.icon] ?? Briefcase;

  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      role="article"
      aria-label={`${area.name} — ${area.shortDescription}`}
      className={cn(
        "group relative overflow-hidden rounded-xl aspect-[4/3] flex flex-col justify-end",
        "ring-0 focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2",
        "transition-shadow hover:shadow-2xl",
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={area.cardImage}
          alt={area.cardImageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/40 to-transparent" />
        {/* Gold border on hover */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#c9a84c]/60 rounded-xl transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-[#c9a84c]/20 border border-[#c9a84c]/40 flex items-center justify-center">
            <Icon size={18} className="text-[#c9a84c]" aria-hidden="true" />
          </div>
        </div>
        <h3 className="font-display text-white font-semibold text-xl mb-2 leading-snug">
          {area.name}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed line-clamp-2">
          {area.shortDescription}
        </p>
        <div className="flex items-center gap-1.5 mt-4 text-[#c9a84c] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
          <span>Learn More</span>
          <ArrowRight size={14} aria-hidden="true" />
        </div>
      </div>
    </Link>
  );
}
