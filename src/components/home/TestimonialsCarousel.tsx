"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import type { Testimonial } from "@/types/cms";
import TestimonialCard from "@/components/shared/TestimonialCard";
import SectionHeading from "@/components/shared/SectionHeading";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const scrollTo = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (!card) return;
    // Use scrollLeft on the container — never scrollIntoView, which can jump the page vertically
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
    setActiveIndex(index);
  }, []);

  // Auto-play
  useEffect(() => {
    if (prefersReducedMotion || isPaused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollTo(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, prefersReducedMotion, testimonials.length, scrollTo]);

  // Sync active index on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setActiveIndex(index);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="section-py bg-[#f4f2ee]"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container-site">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Client Testimonials"
            title="What Our Clients Say"
            align="left"
            className="mb-0"
          />
          <button
            onClick={() => setIsPaused((p) => !p)}
            className="shrink-0 text-xs text-[#0f172a]/50 hover:text-[#0f172a] transition-colors underline"
            aria-pressed={isPaused}
            aria-label={isPaused ? "Resume carousel" : "Pause carousel"}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
        </div>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          role="region"
          aria-label="Client testimonials"
          aria-live="polite"
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="snap-center shrink-0 w-[min(340px,85vw)] md:w-[380px]"
              aria-hidden={i !== activeIndex}
            >
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div
          className="flex items-center justify-center gap-2 mt-6"
          role="group"
          aria-label="Testimonial navigation"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                scrollTo(i);
                setIsPaused(true);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === activeIndex ? "true" : "false"}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? "1.5rem" : "0.5rem",
                backgroundColor:
                  i === activeIndex ? "#c9a84c" : "#0f172a30",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
