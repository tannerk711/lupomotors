import { Zap, DollarSign, User, MapPin, ShieldCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const valueProps = [
  {
    icon: Zap,
    title: "Fastest Offers in the Market",
    description:
      "Normal cars: offer in 2-5 minutes. Exotics: under 1 hour. Not days. Not \"we'll get back to you.\" Minutes.",
  },
  {
    icon: DollarSign,
    title: "$10K to $150K Range",
    description:
      "We buy everything from your daily-driver Toyota to a Lamborghini Urus. One buyer, full range.",
  },
  {
    icon: User,
    title: "You Talk to a Real Person",
    description:
      "No call centers. No chatbots. You deal directly with Drake — one person, real relationships, real answers.",
  },
  {
    icon: MapPin,
    title: "Pacific Northwest Specialist",
    description:
      "We have trusted contacts across Idaho, Oregon, Washington, Utah, Northern California, and Montana. We know PNW cars.",
  },
  {
    icon: ShieldCheck,
    title: "No Fees, No Games",
    description:
      "No hidden fees. No commissions. No lowball games. The offer you get is the offer you get. Cashier's check or wire transfer.",
  },
];

export default function WhyLupo() {
  return (
    <section className="bg-lupo-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="WHY LUPO MOTORS"
            title="Why Sellers Choose Us Over Everyone Else"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, i) => (
            <ScrollReveal key={prop.title} delay={i * 0.1}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-lupo-green-muted/40 transition-colors h-full">
                <div className="w-12 h-12 rounded-full bg-lupo-green/15 flex items-center justify-center mb-5">
                  <prop.icon size={22} className="text-lupo-green-light" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
