"use client";

import { ArrowRight, Phone } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const processSteps = [
  {
    step: "1",
    title: "Tell Us What\u2019s Wrong",
    description: "Use our diagnostic tool or call directly. We\u2019ll assess your issue in minutes.",
  },
  {
    step: "2",
    title: "Get a Flat-Rate Quote",
    description: "A licensed electrician inspects your system and gives you an exact price before any work begins.",
  },
  {
    step: "3",
    title: "We Fix It Right",
    description: "Same-day service available. 5-year workmanship warranty on every job.",
  },
];

const popularId = "panel-upgrade";

export function PricingMatrix() {
  return (
    <section id="pricing" className="bg-slate-50 scroll-mt-20 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        {/* Process steps — replaces grid monotony */}
        <FadeIn>
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              How It Works
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Simple, transparent, and fast. Every price quoted is the price you pay.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-6 sm:grid-cols-3 mb-20 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden sm:block absolute top-8 left-[16.7%] right-[16.7%] h-px bg-slate-200" aria-hidden="true" />
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-start">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white text-xl font-bold mb-4 shadow-elevated">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <FadeIn>
          <div className="max-w-2xl mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Transparent Pricing
            </h3>
            <p className="mt-2 text-base text-slate-600">
              No hidden fees. No surprises. Diagnostic fee waived when you book same-day.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.pricing.map((item) => {
            const isPopular = item.id === popularId;
            return (
              <StaggerItem key={item.id}>
                <div
                  className={`group h-full rounded-2xl p-6 flex flex-col transition-all duration-300 ${
                    isPopular
                      ? "border-2 border-amber-400 bg-white shadow-elevated relative"
                      : "border border-slate-200 bg-white hover:border-slate-300 hover:shadow-card-hover"
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-6 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-slate-950 shadow-md">
                      Most Popular
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{item.service}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold text-slate-900">{item.basePrice}</span>
                    <span className="text-sm text-slate-500">Base Price</span>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 self-start mb-4">
                    Range: {item.priceRange}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{item.description}</p>
                  <a
                    href="#diagnostic"
                    className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 min-h-[48px] ${
                      isPopular
                        ? "bg-amber-500 text-slate-950 hover:bg-amber-400 hover:shadow-glow-amber"
                        : "border border-slate-200 text-slate-700 group-hover:border-amber-500 group-hover:text-amber-600"
                    }`}
                  >
                    Get Exact Quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-5">
            <p className="text-sm text-slate-600 text-center sm:text-left">
              All prices are estimates for standard installations. Final pricing provided after free on-site diagnosis.
              Military, senior, and first-responder discounts available.
            </p>
            <a
              href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800 min-h-[48px]"
            >
              <Phone className="h-4 w-4" />
              Call for Quote
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
