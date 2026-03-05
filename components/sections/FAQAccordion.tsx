"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { faqs } from "@/data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-lupo-black py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading tag="FAQ" title="Frequently Asked Questions" />
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} className="text-lupo-green-muted" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/60 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
