"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import VINForm from "@/components/forms/VINForm";
import LeadDetailsModal from "@/components/forms/LeadDetailsModal";
import FormSuccess from "@/components/forms/FormSuccess";
import { trackEvent, getUTMParams } from "@/lib/analytics";
import type { VINFormData } from "@/lib/form-validation";
import type { LeadDetailsData } from "@/lib/form-validation";

type FormStep = "vin" | "details" | "success";

export default function HeroSection() {
  const [step, setStep] = useState<FormStep>("vin");
  const [vinData, setVinData] = useState<VINFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleVINSubmit = (data: VINFormData) => {
    setVinData(data);
    setStep("details");
    trackEvent("Lead", { vin_submitted: true });
  };

  const handleDetailsSubmit = async (details: LeadDetailsData) => {
    if (!vinData) return;
    setIsSubmitting(true);

    const utmParams = getUTMParams();
    const webhookUrl = process.env.NEXT_PUBLIC_GHL_WEBHOOK_URL;

    const payload = {
      vin: vinData.vin,
      mileage: vinData.mileage,
      price_expectation: details.priceExpectation || "",
      is_financed: details.isFinanced,
      contact_method: details.contactMethod,
      phone: details.phone || "",
      email: details.email || "",
      source: "lupo-motors-landing-page",
      ...utmParams,
    };

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
      trackEvent("CompleteRegistration", { source: "landing_page" });
      setStep("success");
    } catch {
      // Still show success — Drake can follow up via analytics
      setStep("success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with gradient overlays */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        className="object-cover opacity-40"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-lupo-black/70 via-transparent to-lupo-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(74,93,35,0.08),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="text-center mb-8 md:mb-10">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-5 px-4 py-1.5 rounded-full border border-lupo-green-muted/30 bg-lupo-green/10 backdrop-blur-sm text-sm text-white/80"
          >
            The Pacific Northwest&apos;s Premium Car Buyer
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight"
          >
            Get a Real Offer on
            <br />
            Your Car in{" "}
            <span className="text-lupo-green-muted">Minutes</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-5 text-lg md:text-xl text-white/60 max-w-xl mx-auto"
          >
            From daily drivers to exotics. $10K&ndash;$150K.
            <br className="hidden sm:block" /> Cash in hand within 24-48 hours.
          </motion.p>
        </div>

        {/* Form area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          {step === "vin" && <VINForm onSubmit={handleVINSubmit} />}
          {step === "success" && <FormSuccess />}
        </motion.div>

        {/* Details modal */}
        {step === "details" && vinData && (
          <LeadDetailsModal
            vinData={vinData}
            onSubmit={handleDetailsSubmit}
            onClose={() => setStep("vin")}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    </section>
  );
}
