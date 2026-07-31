import { Star } from "lucide-react";
import type { Testimonial } from "@/types/cms";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article
      className="bg-white rounded-xl p-7 shadow-sm border border-[#0f172a]/5 flex flex-col h-full"
      aria-label={`Testimonial from ${testimonial.clientName}`}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < testimonial.rating ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#0f172a]/20"
            }
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1">
        <p className="text-[#0f172a]/70 text-sm leading-relaxed italic">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <footer className="mt-6 pt-4 border-t border-[#0f172a]/5 flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-bold shrink-0"
          aria-hidden="true"
        >
          {testimonial.clientInitials}
        </div>
        <div>
          <p className="font-semibold text-[#0f172a] text-sm">{testimonial.clientName}</p>
          <p className="text-[#0f172a]/50 text-xs">{testimonial.matter}</p>
        </div>
      </footer>
    </article>
  );
}
