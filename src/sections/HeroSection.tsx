"use client";

import { Phone, ArrowRight, Shield, Zap, Award } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-400 mb-6">
                <Shield className="h-4 w-4 text-amber-500" />
                Licensed {config.brand.state} Contractor — {config.brand.contractorLicenseKey}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Safe. Professional. Fast.
                <span className="block text-amber-500 mt-2">Done Right the First Time.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                {config.trust.masterElectricians} Master Electricians. {config.trust.rating}★ Rating.
                {config.trust.totalReviews}+ Homeowners Trust VoltArc for emergency repairs, panel upgrades,
                and every electrical project in between.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#diagnostic"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 min-h-[56px]"
                >
                  <Zap className="h-5 w-5" />
                  Book Service Online
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-700 px-8 py-4 text-base font-bold text-white transition-all hover:border-amber-500 hover:text-amber-500 min-h-[56px]"
                >
                  <Phone className="h-5 w-5" />
                  {config.emergency.phone}
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-amber-500" />
                  Est. {config.brand.founded}
                </span>
                <span>•</span>
                <span>{config.trust.yearsInBusiness} Years in {config.brand.state}</span>
                <span>•</span>
                <span>24/7 Emergency Service</span>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3} direction="right" className="hidden lg:block">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="mx-auto w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                    <Zap className="h-10 w-10 text-amber-500" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{config.trust.rating}★</div>
                  <div className="text-slate-400 text-sm">Google Verified Rating</div>
                  <div className="text-slate-500 text-sm mt-1">{config.trust.totalReviews}+ Reviews</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-emerald-500/10 p-2">
                    <Shield className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Insurance Coverage</div>
                    <div className="text-sm font-bold text-white">{config.brand.liabilityInsuranceLimit}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-blue-500/10 p-2">
                    <Award className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Master Electricians</div>
                    <div className="text-sm font-bold text-white">{config.trust.masterElectricians} Active</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
