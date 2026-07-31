import { cn } from "@/lib/utils";

type BadgeVariant = "sra" | "no-win-no-fee" | "featured" | "role";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
  description?: string;
}

const variants: Record<BadgeVariant, string> = {
  sra: "bg-[#0f172a] text-[#c9a84c] border border-[#c9a84c]/40 font-mono",
  "no-win-no-fee": "bg-[#c9a84c] text-[#0f172a] font-bold",
  featured: "bg-[#faf9f7] text-[#0f172a] border border-[#0f172a]/20",
  role: "bg-white/10 text-white/80",
};

export default function Badge({
  variant = "featured",
  children,
  className,
  description,
}: BadgeProps) {
  return (
    <span
      role={description ? "img" : undefined}
      aria-label={description}
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
