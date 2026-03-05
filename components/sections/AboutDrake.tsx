import Image from "next/image";
import { Clock, Car, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { icon: Clock, value: "10+ Years", label: "In the Business" },
  { icon: Car, value: "500+", label: "Cars Bought & Sold" },
  { icon: MapPin, value: "6 States", label: "Coverage Area" },
];

export default function AboutDrake() {
  return (
    <section className="bg-lupo-black py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Photo */}
          <ScrollReveal direction="left">
            <Image
              src="/drake-headshot.png"
              alt="Drake - Founder of Lupo Motors"
              width={400}
              height={500}
              className="rounded-2xl border border-white/10 object-cover max-w-md mx-auto lg:mx-0"
            />
          </ScrollReveal>

          {/* Right: Story */}
          <ScrollReveal direction="right" delay={0.15}>
            <SectionHeading
              tag="MEET THE FOUNDER"
              title="10 Years Building the Network. Now It Works for You."
              centered={false}
            />

            <div className="space-y-4 text-white/70 text-lg leading-relaxed -mt-4">
              <p>
                I spent over a decade building relationships with dealers across
                the country. I&apos;ve been in the car business my whole career — from
                detailing to wraps to exotic maintenance. When I realized my
                network could get sellers better offers faster than anyone else,
                Lupo Motors was born.
              </p>
              <p>
                When you submit your VIN, I&apos;m personally checking my buyer
                network to get you the best possible offer. No algorithms. No
                automated lowballs. Just me, my phone, and 10 years of
                connections.
              </p>
              <p className="text-white font-medium">
                You&apos;re not a ticket number here. You&apos;ll talk to me directly.
              </p>
            </div>

            <p className="mt-4 text-lupo-green-muted italic font-display">
              — Drake
            </p>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon
                    size={20}
                    className="text-lupo-green-light mx-auto mb-2"
                  />
                  <p className="font-display text-lg font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-lupo-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
