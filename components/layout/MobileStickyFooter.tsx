"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MobileStickyFooter() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-lupo-black/95 backdrop-blur-md border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] px-4 py-3 flex gap-3">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label={`Call Drake at ${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-lupo-green-muted/50 text-white font-semibold text-sm transition-colors hover:bg-lupo-green/20"
        >
          <Phone size={16} />
          Call Drake
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 py-3 rounded-lg bg-lupo-green-light text-white font-bold text-sm transition-colors hover:bg-lupo-green cursor-pointer"
        >
          Get Offer
        </button>
      </div>
    </div>
  );
}
