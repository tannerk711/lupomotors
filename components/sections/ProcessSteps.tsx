import { ScanBarcode, Zap, Banknote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    icon: ScanBarcode,
    title: "Submit Your VIN",
    description:
      "Enter your VIN and mileage. That's it. Takes 30 seconds.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Get an Offer in Minutes",
    description:
      "We check our dealer network and send you a real cash offer. Normal cars: 2-5 minutes. Exotics: under 1 hour.",
  },
  {
    number: "03",
    icon: Banknote,
    title: "Get Paid Fast",
    description:
      "Accept your offer and get paid. Cashier's check or wire transfer. We handle all the paperwork.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-lupo-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="HOW IT WORKS"
            title="Three Simple Steps to Sell Your Car"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-lupo-green-muted/40 transition-colors group h-full">
                {/* Step number */}
                <span className="absolute top-6 right-6 font-display text-5xl font-bold text-white/[0.06]">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-lupo-green/15 flex items-center justify-center mb-5 group-hover:bg-lupo-green/25 transition-colors">
                  <step.icon size={22} className="text-lupo-green-light" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
