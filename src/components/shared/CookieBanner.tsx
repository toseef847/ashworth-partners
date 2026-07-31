"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CookieBannerProps {
  text: string;
}

export default function CookieBanner({ text }: CookieBannerProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const dismiss = (decision: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", decision);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0f172a] border-t border-white/20 shadow-2xl"
    >
      <div className="container-site py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-white/70 text-sm leading-relaxed flex-1">{text}</p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => dismiss("accepted")}
              className="px-4 py-2 rounded-md bg-[#c9a84c] text-[#0f172a] font-bold text-sm hover:bg-[#e8c97a] transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => dismiss("declined")}
              className="px-4 py-2 rounded-md border border-white/20 text-white/60 font-medium text-sm hover:border-white/40 hover:text-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => dismiss("declined")}
              aria-label="Close cookie notice"
              className="p-1 text-white/40 hover:text-white transition-colors"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
