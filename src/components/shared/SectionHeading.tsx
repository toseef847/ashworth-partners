import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: HeadingLevel;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3",
            light ? "text-[#c9a84c]" : "text-[#c9a84c]"
          )}
        >
          {eyebrow}
        </span>
      )}
      <Tag
        className={cn(
          "font-display font-semibold leading-tight",
          light ? "text-white" : "text-[#0f172a]",
          "text-[var(--text-h2)] lg:text-[var(--text-h1)]"
        )}
      >
        {title}
      </Tag>
      {align === "center" || !subtitle ? (
        eyebrow || title ? (
          <span
            className={cn(
              "gold-divider mx-auto mt-4",
              align === "left" && "mx-0"
            )}
          />
        ) : null
      ) : null}
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl leading-relaxed",
            light ? "text-white/70" : "text-[#0f172a]/60",
            align === "center" ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
