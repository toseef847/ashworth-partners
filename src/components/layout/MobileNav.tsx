"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu, Phone } from "lucide-react";
import type { NavItem } from "@/types/cms";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  nav: NavItem[];
  phone: string;
}

export default function MobileNav({ nav, phone }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname]);

  // Trap focus & handle Escape
  useEffect(() => {
    if (!isOpen) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button, input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        triggerRef.current?.focus();
      }
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={open}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        className="flex items-center justify-center w-10 h-10 rounded-md text-white hover:text-amber-300 transition-colors focus-visible:outline-2 focus-visible:outline-amber-300"
      >
        <Menu size={22} aria-hidden="true" />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 max-w-full bg-[#0f172a] shadow-2xl flex flex-col transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="font-display font-semibold text-white text-lg">
            Menu
          </span>
          <button
            onClick={close}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-9 h-9 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        {/* Nav Links */}
        <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto py-6 px-6">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "block py-3 px-4 rounded-lg text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-amber-300 bg-white/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-1 ml-4 space-y-1 border-l border-white/10 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={close}
                          className={cn(
                            "block py-2 text-sm transition-colors",
                            pathname === child.href
                              ? "text-amber-300"
                              : "text-white/60 hover:text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Footer */}
        <div className="px-6 py-6 border-t border-white/10 space-y-3">
          <Link
            href="/contact"
            onClick={close}
            className="block w-full text-center py-3 px-6 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm tracking-wide hover:bg-[#e8c97a] transition-colors"
          >
            Book a Consultation
          </Link>
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 py-2 text-white/70 text-sm hover:text-white transition-colors"
          >
            <Phone size={14} aria-hidden="true" />
            {phone}
          </a>
        </div>
      </div>
    </>
  );
}
