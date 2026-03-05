"use client";

import { Clock, Shield, Car, MapPin } from "lucide-react";
import StatBadge from "@/components/ui/StatBadge";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function TrustBar() {
  return (
    <section className="bg-lupo-dark border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-white/10">
            <StatBadge
              icon={<Clock size={24} />}
              value="2-5"
              label="Minute Offers"
            />
            <StatBadge
              icon={<Shield size={24} />}
              value="10+"
              label="Years of Experience"
              numericValue={10}
              suffix="+"
            />
            <StatBadge
              icon={<Car size={24} />}
              value="500+"
              label="Cars Purchased"
              numericValue={500}
              suffix="+"
            />
            <StatBadge
              icon={<MapPin size={24} />}
              value="6"
              label="States Covered"
              numericValue={6}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
