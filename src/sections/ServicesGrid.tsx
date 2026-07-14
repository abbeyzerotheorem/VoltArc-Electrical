"use client";

import { useState } from "react";
import { Zap, Building2, Home, Smartphone, AlertTriangle, ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
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

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
              <Zap className="h-4 w-4" />
              Core Electrical Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Expert Solutions for Every Electrical Need
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From emergency repairs to smart home upgrades — powered by {config.trust.masterElectricians} Master Electricians.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all min-h-[48px] ${
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

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.07}>
          {filtered.map((service) => {
            const urgency = urgencyStyles[service.urgencyRating];
            return (
              <StaggerItem key={service.id}>
                <div className="group relative h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg glow-border flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${urgency.bg} ${urgency.color}`}>
                      {urgency.label}
                    </span>
                    <span className="text-xs text-slate-500 capitalize">{service.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.description}</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500">Starting from</div>
                      <div className="text-lg font-bold text-slate-900">{service.estimatedBaseCost}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">Avg. time</div>
                      <div className="text-sm font-semibold text-slate-700">{service.averageCompletionTime}</div>
                    </div>
                  </div>
                  <a
                    href="#diagnostic"
                    className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-all hover:border-amber-500 hover:text-amber-600 min-h-[48px]"
                  >
                    Book Now
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
