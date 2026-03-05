"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface StatBadgeProps {
  icon: ReactNode;
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
}

export default function StatBadge({
  icon,
  value,
  label,
  numericValue,
  suffix = "",
}: StatBadgeProps) {
  const [displayValue, setDisplayValue] = useState(
    numericValue ? "0" : value
  );
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!numericValue || hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericValue);
            setDisplayValue(current.toString());

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [numericValue, value]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 px-6 py-4">
      <div className="text-lupo-green-light">{icon}</div>
      <p className="font-display text-2xl md:text-3xl font-bold text-white">
        {displayValue}
        {suffix}
      </p>
      <p className="text-sm text-lupo-muted">{label}</p>
    </div>
  );
}
