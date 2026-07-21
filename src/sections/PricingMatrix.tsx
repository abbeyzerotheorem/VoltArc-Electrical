"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function PricingMatrix() {
  return (
    <section id="pricing" className="bg-slate-50 scroll-mt-20 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 mb-4">
              <CheckCircle2 className="h-4 w-4" />
              Upfront Flat-Rate Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Transparent Pricing. No Hidden Fees. No Surprises.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every price quoted is the price you pay. Diagnostic fee waived when you book the repair same-day.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {config.pricing.map((item) => (
            <StaggerItem key={item.id}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.service}</h3>
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
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:border-amber-500 group-hover:text-amber-600 min-h-[48px]"
                >
                  Get Exact Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-sm text-slate-500">
              All prices are estimates for standard installations. Final pricing provided after free on-site diagnosis.
              Military, senior, and first-responder discounts available.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
