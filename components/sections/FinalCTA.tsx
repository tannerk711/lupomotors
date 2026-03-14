"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import VINForm from "@/components/forms/VINForm";
import LeadDetailsModal from "@/components/forms/LeadDetailsModal";
import FormSuccess from "@/components/forms/FormSuccess";
import { trackEvent, getUTMParams } from "@/lib/analytics";
import { siteConfig } from "@/data/site";
import type { VINFormData } from "@/lib/form-validation";
import type { LeadDetailsData } from "@/lib/form-validation";

type FormStep = "vin" | "details" | "success";

export default function FinalCTA() {
  const [step, setStep] = useState<FormStep>("vin");
  const [vinData, setVinData] = useState<VINFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVINSubmit = (data: VINFormData) => {
    setVinData(data);
    setStep("details");
    trackEvent("Lead", { vin_submitted: true, location: "final_cta" });
  };

  const handleDetailsSubmit = async (details: LeadDetailsData) => {
    if (!vinData) return;
    setIsSubmitting(true);

    const utmParams = getUTMParams();

    const payload = {
      vin: vinData.vin,
      mileage: vinData.mileage,
      full_name: details.fullName,
      price_expectation: details.priceExpectation || "",
      is_financed: details.isFinanced,
      phone: details.phone,
      source: "lupo-motors-landing-page-bottom",
      ...utmParams,
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Lead submission failed:", response.status);
      }

      trackEvent("CompleteRegistration", { source: "final_cta" });
      setStep("success");
    } catch (error) {
      console.error("Lead submission error:", error);
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-lupo-black py-24 md:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(74,93,35,0.08),transparent_60%)]" />

      <ScrollReveal className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Get Your Offer in Minutes
        </h2>
        <p className="text-lg text-white/60 mb-10">
          Submit your VIN and mileage. No obligation, no games, no waiting.
        </p>

        <div className="max-w-md mx-auto mb-8">
          {step === "vin" && <VINForm onSubmit={handleVINSubmit} compact id="final-cta-form" />}
          {step === "success" && <FormSuccess />}
        </div>

        {step === "details" && vinData && (
          <LeadDetailsModal
            vinData={vinData}
            onSubmit={handleDetailsSubmit}
            onClose={() => setStep("vin")}
            isSubmitting={isSubmitting}
          />
        )}

        <p className="text-white/40 text-sm">
          Prefer to talk?{" "}
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-white hover:text-lupo-silver transition-colors font-medium"
          >
            <Phone size={14} />
            Call or text Drake: {siteConfig.phone}
          </a>
        </p>

        <p className="mt-4 text-xs text-white/30">
          Free &middot; No Obligation &middot; Offer in Minutes
        </p>
      </ScrollReveal>
    </section>
  );
}
