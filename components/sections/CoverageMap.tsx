import { MapPin, Home } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { coverageStates } from "@/data/coverage";

export default function CoverageMap() {
  return (
    <section className="bg-lupo-dark py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="COVERAGE AREA"
            title="Serving the Pacific Northwest and Beyond"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {coverageStates.map((state, i) => (
            <ScrollReveal key={state.abbreviation} delay={i * 0.08}>
              <div
              className={`rounded-xl border p-5 transition-colors h-full ${
                state.isHomeBase
                  ? "border-lupo-green-muted/30 bg-lupo-green/[0.06]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {state.isHomeBase ? (
                  <Home size={18} className="text-lupo-green-light" />
                ) : (
                  <MapPin size={18} className="text-lupo-muted" />
                )}
                <div>
                  <h3 className="font-display font-bold text-white text-base">
                    {state.name}
                  </h3>
                  {state.isHomeBase && (
                    <span className="text-xs text-lupo-green-muted">Home Base</span>
                  )}
                </div>
              </div>
              <ul className="space-y-1.5">
                {state.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-white/50 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-lupo-green-muted/50 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
