import { Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="bg-lupo-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            tag="TESTIMONIALS"
            title="What Sellers Say About Working With Us"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.12}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 h-full">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/90 italic text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div>
                <p className="text-white font-semibold text-sm">
                  {testimonial.name}
                </p>
                <p className="text-white/50 text-sm">
                  {testimonial.location}
                </p>
                <p className="text-lupo-green-muted text-xs mt-1">
                  Sold: {testimonial.vehicleSold}
                </p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
