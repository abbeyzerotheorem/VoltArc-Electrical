"use client";

import { useState } from "react";
import { AlertTriangle, AlertCircle, Info, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";
import type { HazardLevel } from "@/types/electrician";

const config = electricianConfig;

const hazardConfig: Record<
  HazardLevel,
  { label: string; color: string; bg: string; border: string; icon: typeof AlertTriangle; action: string }
> = {
  low: {
    label: "Low Risk",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    icon: Info,
    action: "Schedule an Inspection",
  },
  medium: {
    label: "Medium Risk",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-200",
    icon: AlertCircle,
    action: "Book Priority Service",
  },
  high: {
    label: "Emergency — High Risk",
    color: "text-red-700",
    bg: "bg-red-50",
    border: "border-red-300",
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
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-4">
              <Zap className="h-4 w-4" />
              Instant Hazard Assessment
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              What Electrical Issue Are You Experiencing?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Select your issue below for an instant hazard-level rating and fast-booking options.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-3xl">
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
                        ? `${hc.border} ${hc.bg} shadow-md`
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

            <AnimatePresence mode="wait">
              {option && hazard && (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 16, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <div className={`mt-6 rounded-xl border-2 ${hazard.border} ${hazard.bg} p-6`}>
                    <div className="flex items-start gap-4">
                      <div className={`rounded-lg p-2 ${hazard.bg}`}>
                        <hazard.icon className={`h-6 w-6 ${hazard.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className={`text-lg font-bold ${hazard.color}`}>{hazard.label}</h3>
                        </div>
                        <p className="text-sm text-slate-700 leading-relaxed mb-4">{option.description}</p>

                        {option.hazardLevel === "high" ? (
                          <a
                            href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-lg min-h-[48px]"
                          >
                            <AlertTriangle className="h-4 w-4" />
                            Call Emergency Line — {config.emergency.phone}
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
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
