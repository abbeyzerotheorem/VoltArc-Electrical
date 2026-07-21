"use client";

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

function ElectricalCircuit() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(100,116,139,0.08)" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wireGradV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glowStrong">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="400" height="300" fill="url(#grid)" />

      <motion.path
        d="M 0 100 L 120 100 L 160 140 L 240 140 L 280 100 L 400 100"
        stroke="rgba(100,116,139,0.15)"
        strokeWidth="2"
        fill="none"
      />
      <motion.path
        d="M 0 200 L 80 200 L 120 160 L 280 160 L 320 200 L 400 200"
        stroke="rgba(100,116,139,0.15)"
        strokeWidth="2"
        fill="none"
      />

      <motion.path
        d="M 160 60 L 160 140"
        stroke="rgba(100,116,139,0.12)"
        strokeWidth="1.5"
        fill="none"
      />
      <motion.path
        d="M 240 60 L 240 140"
        stroke="rgba(100,116,139,0.12)"
        strokeWidth="1.5"
        fill="none"
      />
      <motion.path
        d="M 120 160 L 120 240"
        stroke="rgba(100,116,139,0.12)"
        strokeWidth="1.5"
        fill="none"
      />
      <motion.path
        d="M 280 160 L 280 240"
        stroke="rgba(100,116,139,0.12)"
        strokeWidth="1.5"
        fill="none"
      />

      <motion.path
        d="M 0 100 L 120 100 L 160 140 L 240 140 L 280 100 L 400 100"
        stroke="url(#wireGrad)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: [0, 0.3, 0], pathOffset: [0, 0.7, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
      />
      <motion.path
        d="M 0 200 L 80 200 L 120 160 L 280 160 L 320 200 L 400 200"
        stroke="url(#wireGradV)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{ pathLength: [0, 0.3, 0], pathOffset: [0, 0.7, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5, delay: 1.5 }}
      />

      {[
        { cx: 120, cy: 100, color: "#F59E0B", delay: 0 },
        { cx: 160, cy: 140, color: "#F59E0B", delay: 0.5 },
        { cx: 240, cy: 140, color: "#3B82F6", delay: 1 },
        { cx: 280, cy: 100, color: "#3B82F6", delay: 1.5 },
        { cx: 80, cy: 200, color: "#10B981", delay: 0.3 },
        { cx: 120, cy: 160, color: "#10B981", delay: 0.8 },
        { cx: 280, cy: 160, color: "#F59E0B", delay: 1.3 },
        { cx: 320, cy: 200, color: "#F59E0B", delay: 1.8 },
      ].map((node, i) => (
        <g key={i}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="12"
            fill={node.color}
            opacity="0.08"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.5, 1] }}
            transition={{ delay: node.delay + 0.5, duration: 0.6, ease: "easeOut" }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="6"
            fill="none"
            stroke={node.color}
            strokeWidth="1.5"
            opacity="0.3"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: node.delay + 0.6, duration: 0.5, ease: "easeOut" }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="3"
            fill={node.color}
            filter="url(#glowStrong)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: node.delay + 0.7, duration: 0.3 }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="3"
            fill="none"
            stroke={node.color}
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: [1, 4], opacity: [0.6, 0] }}
            transition={{
              delay: node.delay + 1.5,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeOut",
            }}
          />
        </g>
      ))}

      <motion.rect
        x="140"
        y="105"
        width="120"
        height="70"
        rx="8"
        fill="rgba(15,23,42,0.8)"
        stroke="rgba(245,158,11,0.3)"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />
      <motion.rect
        x="140"
        y="105"
        width="120"
        height="70"
        rx="8"
        fill="none"
        stroke="rgba(245,158,11,0.1)"
        strokeWidth="1"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <rect x="168" y="120" width="24" height="6" rx="2" fill="#F59E0B" opacity="0.8" />
        <rect x="196" y="120" width="24" height="6" rx="2" fill="#3B82F6" opacity="0.8" />
        <rect x="168" y="132" width="24" height="6" rx="2" fill="#10B981" opacity="0.8" />
        <rect x="196" y="132" width="24" height="6" rx="2" fill="#F59E0B" opacity="0.6" />
        <rect x="168" y="144" width="52" height="6" rx="2" fill="rgba(255,255,255,0.15)" />
        <rect x="180" y="156" width="28" height="8" rx="2" fill="rgba(245,158,11,0.4)" />
        <motion.circle
          cx="230"
          cy="158"
          r="3"
          fill="#10B981"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.g>

      {[
        { x: 100, y: 80, delay: 2 },
        { x: 300, y: 120, delay: 3.5 },
        { x: 200, y: 60, delay: 5 },
        { x: 150, y: 220, delay: 4 },
        { x: 320, y: 220, delay: 2.5 },
      ].map((spark, i) => (
        <motion.circle
          key={i}
          cx={spark.x}
          cy={spark.y}
          r="1.5"
          fill="#FBBF24"
          filter="url(#glowStrong)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
            y: [0, -10],
          }}
          transition={{
            delay: spark.delay,
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 4 + i,
          }}
        />
      ))}
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.08)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true" />

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
              <ElectricalCircuit />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <div className="text-4xl font-bold text-white">{config.trust.rating}</div>
                    <Star className="h-7 w-7 fill-amber-500 text-amber-500" />
                  </div>
                  <div className="text-slate-400 text-sm font-medium">Google Verified</div>
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
                <div className="text-xl sm:text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-400 mt-0.5">{metric.label}</div>
                <div className="text-[10px] sm:text-xs text-slate-600 mt-0.5">{metric.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
