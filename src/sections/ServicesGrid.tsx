"use client";

import { useState } from "react";
import { Zap, Building2, Home, Smartphone, AlertTriangle, ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";
import type { ServiceCategory, UrgencyRating } from "@/types/electrician";

const config = electricianConfig;

const categoryTabs: { id: ServiceCategory | "all"; label: string; icon: typeof Zap }[] = [
  { id: "all", label: "All Services", icon: Zap },
  { id: "residential", label: "Residential", icon: Home },
  { id: "commercial", label: "Commercial", icon: Building2 },
  { id: "smart-home", label: "Smart Home / EV", icon: Smartphone },
  { id: "emergency", label: "Emergency", icon: AlertTriangle },
];

const urgencyStyles: Record<UrgencyRating, { label: string; color: string; bg: string }> = {
  routine: { label: "Routine", color: "text-emerald-700", bg: "bg-emerald-50" },
  soon: { label: "Schedule Soon", color: "text-amber-700", bg: "bg-amber-50" },
  urgent: { label: "Urgent", color: "text-red-700", bg: "bg-red-50" },
};

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<ServiceCategory | "all">("all");

  const filtered =
    activeTab === "all"
      ? config.services
      : config.services.filter((s) => s.category === activeTab);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <section className="bg-white content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Expert Electrical Solutions
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              From emergency repairs to smart home upgrades — powered by {config.trust.masterElectricians} Master Electricians.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 min-h-[48px] ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Featured service — large hero card */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={featured.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <div className="group relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 transition-all duration-300 hover:border-slate-300 hover:shadow-elevated glow-border">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${urgencyStyles[featured.urgencyRating].bg} ${urgencyStyles[featured.urgencyRating].color}`}>
                        {urgencyStyles[featured.urgencyRating].label}
                      </span>
                      <span className="text-xs text-slate-500 capitalize">{featured.category}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{featured.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">{featured.description}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <div className="text-xs text-slate-500 mb-0.5">Starting from</div>
                    <div className="text-2xl font-bold text-slate-900">{featured.estimatedBaseCost}</div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1 justify-end">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.averageCompletionTime}
                    </div>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#diagnostic"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-amber min-h-[48px]"
                  >
                    Book This Service
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <span className="text-xs text-slate-500">Diagnostic fee waived with same-day repair</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remaining services — varied grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <AnimatePresence mode="popLayout">
            {rest.map((service) => {
              const urgency = urgencyStyles[service.urgencyRating];
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="group relative h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${urgency.bg} ${urgency.color}`}>
                        {urgency.label}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.description}</p>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-500">From</div>
                        <div className="text-lg font-bold text-slate-900">{service.estimatedBaseCost}</div>
                      </div>
                      <a
                        href="#diagnostic"
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-amber-500 hover:text-amber-600 min-h-[40px]"
                      >
                        Book
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
