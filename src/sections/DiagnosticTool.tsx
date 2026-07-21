"use client";

import { useState } from "react";
import { AlertTriangle, AlertCircle, Info, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";
import type { HazardLevel } from "@/types/electrician";

const config = electricianConfig;

const hazardConfig: Record<
  HazardLevel,
  { label: string; color: string; bg: string; border: string; icon: typeof AlertTriangle; action: string; ring: string }
> = {
  low: {
    label: "Low Risk",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    ring: "ring-emerald-500/20",
    icon: Info,
    action: "Schedule an Inspection",
  },
  medium: {
    label: "Medium Risk",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    ring: "ring-amber-500/20",
    icon: AlertCircle,
    action: "Book Priority Service",
  },
  high: {
    label: "Emergency — High Risk",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-300",
    ring: "ring-red-500/20",
    icon: AlertTriangle,
    action: "Call Emergency Dispatch Now",
  },
};

export function DiagnosticTool() {
  const [selected, setSelected] = useState<string | null>(null);
  const option = config.diagnosticOptions.find((o) => o.id === selected);
  const hazard = option ? hazardConfig[option.hazardLevel] : null;

  return (
    <section id="diagnostic" className="bg-slate-50 scroll-mt-20 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left column — context & result */}
          <FadeIn className="lg:col-span-2 lg:sticky lg:top-28">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Diagnose Your Electrical Issue Instantly
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Select your issue on the right. We&rsquo;ll instantly assess the hazard level
                and route you to the fastest booking option.
              </p>

              <div className="mt-8 space-y-3">
                {(["high", "medium", "low"] as HazardLevel[]).map((level) => {
                  const hc = hazardConfig[level];
                  return (
                    <div key={level} className="flex items-center gap-3">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${hc.bg}`}>
                        <hc.icon className={`h-4 w-4 ${hc.color}`} />
                      </div>
                      <div>
                        <span className={`text-sm font-semibold ${hc.color}`}>{hc.label}</span>
                        <span className="text-sm text-slate-500 ml-2">
                          {level === "high" && "Immediate dispatch"}
                          {level === "medium" && "Same-day priority"}
                          {level === "low" && "Schedule at your convenience"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {option && hazard && (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  className="mt-8"
                >
                  <div className={`rounded-xl border-2 ${hazard.border} ${hazard.bg} p-5`}>
                    <div className="flex items-center gap-3 mb-3">
                      <hazard.icon className={`h-5 w-5 ${hazard.color}`} />
                      <h3 className={`text-base font-bold ${hazard.color}`}>{hazard.label}</h3>
                    </div>
                    <p className="text-sm text-slate-700 leading-relaxed mb-4">{option.description}</p>
                    {option.hazardLevel === "high" ? (
                      <a
                        href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg min-h-[48px]"
                      >
                        <Phone className="h-4 w-4" />
                        Call Emergency — {config.emergency.phone}
                      </a>
                    ) : (
                      <a
                        href="#pricing"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-800 hover:shadow-lg min-h-[48px]"
                      >
                        {hazard.action}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>

          {/* Right column — interactive selector */}
          <FadeIn delay={0.15} className="lg:col-span-3">
            <div className="grid gap-3 sm:grid-cols-2">
              {config.diagnosticOptions.map((opt) => {
                const hc = hazardConfig[opt.hazardLevel];
                const isSelected = selected === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelected(isSelected ? null : opt.id)}
                    className={`group flex items-start gap-3 rounded-xl border-2 p-4 text-left transition-all duration-300 min-h-[48px] ${
                      isSelected
                        ? `${hc.border} ${hc.bg} shadow-md ring-2 ${hc.ring}`
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                        isSelected ? `${hc.border} ${hc.bg}` : "border-slate-300"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {isSelected ? (
                          <motion.div
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 25 }}
                          >
                            <CheckCircle2 className={`h-4 w-4 ${hc.color}`} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="empty"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="h-2 w-2 rounded-full bg-slate-200"
                          />
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{opt.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5 capitalize">
                        Hazard Level: <span className={hc.color}>{opt.hazardLevel}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
