import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import type { Solicitor } from "@/types/cms";
import Badge from "./Badge";

interface SolicitorCardProps {
  solicitor: Solicitor;
}

export default function SolicitorCard({ solicitor }: SolicitorCardProps) {
  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-[#0f172a]/5">
      <Link
        href={`/our-team/${solicitor.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-[#c9a84c] focus-visible:rounded-t-xl"
      >
        {/* Photo */}
        <div className="relative aspect-[4/5] bg-[#f4f2ee] overflow-hidden">
          <Image
            src={solicitor.photo}
            alt={solicitor.photoAlt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      {/* Info */}
      <div className="p-5">
        <Badge variant="role" className="mb-3 bg-[#0f172a]/5 text-[#0f172a]/60 border-0">
          {solicitor.role}
        </Badge>
        <Link href={`/our-team/${solicitor.slug}`}>
          <h3 className="font-display text-[#0f172a] font-semibold text-lg leading-tight hover:text-[#c9a84c] transition-colors">
            {solicitor.fullName}
          </h3>
        </Link>
        <p className="text-[#0f172a]/60 text-sm mt-2 leading-relaxed line-clamp-2">
          {solicitor.shortBio}
        </p>
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#0f172a]/5">
          <a
            href={`mailto:${solicitor.email}`}
            className="flex items-center gap-1.5 text-[#0f172a]/50 text-xs hover:text-[#c9a84c] transition-colors"
            aria-label={`Email ${solicitor.fullName}`}
          >
            <Mail size={13} aria-hidden="true" />
            <span>Email</span>
          </a>
          <Link
            href={`/our-team/${solicitor.slug}`}
            className="ml-auto text-xs font-semibold text-[#c9a84c] hover:text-[#9e7a2e] transition-colors"
          >
            View Profile →
          </Link>
        </div>
      </div>
    </article>
  );
}
