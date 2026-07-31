"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#c9a84c]",
        isActive
          ? "text-[#c9a84c]"
          : "text-white/80 hover:text-white"
      )}
    >
      {children}
    </Link>
  );
}
