"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const id = `faq-${i}`;
        const panelId = `faq-panel-${i}`;

        return (
          <div
            key={i}
            className={cn(
              "border rounded-xl overflow-hidden transition-colors",
              isOpen
                ? "border-[#c9a84c]/40 bg-[#faf9f7]"
                : "border-[#0f172a]/8 bg-white hover:border-[#0f172a]/20"
            )}
          >
            <h3>
              <button
                id={id}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left text-[#0f172a] font-semibold text-sm md:text-base focus-visible:outline-2 focus-visible:outline-[#c9a84c] focus-visible:rounded-xl"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <Minus size={16} className="shrink-0 text-[#c9a84c]" aria-hidden="true" />
                ) : (
                  <Plus size={16} className="shrink-0 text-[#0f172a]/40" aria-hidden="true" />
                )}
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={id}
              hidden={!isOpen}
              className="px-6 pb-5"
            >
              <p className="text-[#0f172a]/70 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
