"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 content-visibility-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Common Electrical Questions
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-3">
          {config.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <StaggerItem key={faq.question}>
                <div className={`rounded-xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? "border-amber-300 bg-white shadow-card" : "border-slate-200 bg-white hover:border-slate-300"
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left min-h-[48px]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="shrink-0"
                    >
                      <ChevronDown className={`h-5 w-5 transition-colors ${isOpen ? "text-amber-500" : "text-slate-400"}`} />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { type: "spring", stiffness: 400, damping: 35 },
                          opacity: { duration: 0.2 },
                        }}
                      >
                        <div className="px-5 pb-5">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
