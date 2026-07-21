"use client";

import Image from "next/image";
import { Phone, ArrowRight, Shield, Star, Clock, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const trustBadges = [
  { icon: Star, label: `${config.trust.rating}★ Google Rating`, color: "text-amber-400" },
  { icon: Shield, label: "Licensed & Insured", color: "text-emerald-400" },
  { icon: Clock, label: "24/7 Emergency", color: "text-blue-400" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
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
                Electrical Emergency?
                <span className="block text-amber-500 mt-2">We&rsquo;re There in 35 Minutes.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-xl">
                {config.trust.masterElectricians} Master Electricians. {config.trust.rating}★ Rating.
                {config.trust.totalReviews}+ Homeowners Trust VoltArc for emergency repairs, panel upgrades,
                and every electrical project in between.
              </p>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    <badge.icon className={`h-3.5 w-3.5 ${badge.color}`} />
                    {badge.label}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-amber min-h-[56px]"
                >
                  <Phone className="h-5 w-5" />
                  Call Emergency Line
                </a>
                <a
                  href="#diagnostic"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-700 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:border-amber-500 hover:text-amber-500 min-h-[56px]"
                >
                  Book Online
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-8 flex items-center gap-4 sm:gap-6 text-sm text-slate-500 flex-wrap">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  Free Estimates
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  No Hidden Fees
                </span>
                <span className="hidden sm:inline">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  5-Year Warranty
                </span>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:block relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop&crop=center"
                alt="VoltArc electrician performing an electrical panel inspection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-1 bg-slate-950/80 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-slate-800/50">
                    <Star className="h-5 w-5 fill-amber-500 text-amber-500" />
                    <span className="text-2xl font-bold text-white">{config.trust.rating}</span>
                    <span className="text-sm text-slate-400 ml-1">Google Verified</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -bottom-5 -left-5 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-sm p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-emerald-500/10 p-2.5">
                  <Shield className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">Coverage</div>
                  <div className="text-sm font-bold text-white">{config.brand.liabilityInsuranceLimit}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring", stiffness: 100 }}
              className="absolute -top-5 -right-5 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-sm p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-blue-500/10 p-2.5">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">Team</div>
                  <div className="text-sm font-bold text-white">{config.trust.masterElectricians} Masters</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring", stiffness: 100 }}
              className="absolute top-1/2 -right-6 -translate-y-1/2 rounded-xl border border-slate-800 bg-slate-900/95 backdrop-blur-sm p-4 shadow-elevated"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-amber-500/10 p-2.5">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider">Response</div>
                  <div className="text-sm font-bold text-white">{config.emergency.averageOnSiteTime}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust metrics strip — replaces CredibilityBoard */}
      <div className="relative border-t border-slate-800/60 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800/60">
            {[
              { value: `${config.trust.rating}★`, label: "Google Rating", sub: `${config.trust.totalReviews}+ reviews` },
              { value: `${config.trust.masterElectricians}`, label: "Master Electricians", sub: "Licensed & insured" },
              { value: config.emergency.averageOnSiteTime, label: "Avg. Response", sub: "24/7/365 dispatch" },
              { value: `${config.trust.yearsInBusiness}+`, label: "Years Serving TX", sub: `Since ${config.brand.founded}` },
            ].map((metric) => (
              <div key={metric.label} className="py-6 px-4 sm:px-6 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{metric.value}</div>
                <div className="text-sm sm:text-base font-bold text-white mt-1">{metric.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
