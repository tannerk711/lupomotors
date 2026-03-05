import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CarCard from "@/components/ui/CarCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const vehicleTypes = [
  "Clean trucks, SUVs, and sedans ($10K–$60K)",
  "Premium vehicles — Escalade, Raptor, Rivian ($40K–$100K)",
  "Exotic & luxury — Porsche, Lamborghini, Ferrari ($80K–$150K)",
  "Classic project cars (via specialty buyer network)",
];

const requirements = [
  "Clean CarFax (no accidents)",
  "Running and drivable",
  "Good overall condition",
];

const showcaseCars = [
  { name: "Lamborghini Urus", priceRange: "$90K–$130K", image: "/cars/urus.jpg" },
  { name: "Ford Raptor", priceRange: "$40K–$65K", image: "/cars/raptor.jpg" },
  { name: "Rivian R1T", priceRange: "$55K–$75K", image: "/cars/rivian.jpg" },
  { name: "Toyota Tacoma", priceRange: "$25K–$45K", image: "/cars/tacoma.jpg" },
];

export default function WhatWeBuy() {
  return (
    <section className="bg-lupo-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="WHAT WE BUY"
            title="From Your Daily Driver to Your Dream Car"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Text content */}
          <ScrollReveal direction="left">
            <ul className="space-y-4 mb-8">
              {vehicleTypes.map((type) => (
                <li key={type} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-lupo-green-light mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/80 text-lg">{type}</span>
                </li>
              ))}
            </ul>

            {/* Requirements callout */}
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-5">
              <p className="text-sm font-medium text-lupo-silver mb-3">
                What we look for:
              </p>
              <ul className="space-y-2">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-2">
                    <Check size={16} className="text-lupo-green-muted" />
                    <span className="text-sm text-white/70">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Right: Photo grid */}
          <ScrollReveal direction="right" delay={0.2} className="grid grid-cols-2 gap-4">
            {showcaseCars.map((car) => (
              <CarCard key={car.name} {...car} />
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
