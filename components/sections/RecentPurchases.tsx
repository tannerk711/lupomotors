import SectionHeading from "@/components/ui/SectionHeading";
import CarCard from "@/components/ui/CarCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { recentPurchases } from "@/data/vehicles";

export default function RecentPurchases() {
  return (
    <section className="bg-lupo-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="RECENT DEALS"
            title="Cars We've Recently Purchased"
          />
        </ScrollReveal>

        {/* Mobile: horizontal scroll / Desktop: grid */}
        <ScrollReveal delay={0.15}>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible">
            {recentPurchases.map((car) => (
              <div
                key={car.name}
                className="min-w-[280px] snap-start md:min-w-0"
              >
                <CarCard {...car} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
