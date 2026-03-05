import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ProcessSteps from "@/components/sections/ProcessSteps";
import MidCTA from "@/components/sections/MidCTA";
import WhatWeBuy from "@/components/sections/WhatWeBuy";
import WhyLupo from "@/components/sections/WhyLupo";
import AboutDrake from "@/components/sections/AboutDrake";
import RecentPurchases from "@/components/sections/RecentPurchases";
import TestimonialSection from "@/components/sections/TestimonialSection";
import CoverageMap from "@/components/sections/CoverageMap";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProcessSteps />
      <MidCTA />
      <WhatWeBuy />
      <WhyLupo />
      <MidCTA
        headline="Like What You See?"
        subtext="Get a real offer on your car in minutes. No obligation."
      />
      <AboutDrake />
      <RecentPurchases />
      <TestimonialSection />
      <CoverageMap />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
