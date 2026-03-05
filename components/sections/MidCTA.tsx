"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface MidCTAProps {
  headline?: string;
  subtext?: string;
  showPhone?: boolean;
}

export default function MidCTA({
  headline = "Ready to See What Your Car Is Worth?",
  subtext = "Get a no-obligation offer in minutes. Call, text, or submit your VIN.",
  showPhone = true,
}: MidCTAProps) {
  const scrollToForm = () => {
    document.getElementById("hero-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-r from-lupo-dark via-lupo-card to-lupo-dark py-16 md:py-20 border-y border-lupo-green-dark/30">
      <ScrollReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          {headline}
        </h2>
        <p className="text-lg text-white/60 mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {showPhone && (
            <Button
              variant="outline"
              size="lg"
              href={`tel:${siteConfig.phoneRaw}`}
            >
              <Phone size={18} className="mr-2" />
              Call or Text: {siteConfig.phone}
            </Button>
          )}
          <Button size="lg" onClick={scrollToForm}>
            Get My Offer
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}
