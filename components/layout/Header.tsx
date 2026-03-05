"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-lupo-green-dark/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Lupo Motors"
          width={160}
          height={40}
          className="h-8 md:h-10 w-auto"
          priority
        />

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Phone - icon only on mobile, full on desktop */}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            aria-label={`Call ${siteConfig.phone}`}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Phone size={18} />
            <span className="hidden md:inline text-sm font-medium">
              {siteConfig.phone}
            </span>
          </a>

          {/* CTA Button */}
          <Button size="sm" onClick={scrollToForm}>
            Get My Offer
          </Button>
        </div>
      </div>
    </header>
  );
}
