"use client";

import { Star, Users, Clock, Award } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const metrics = [
  {
    icon: Star,
    value: `${config.trust.rating}`,
    label: "Google Rating",
    sublabel: `Based on ${config.trust.totalReviews}+ verified reviews`,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Users,
    value: `${config.trust.masterElectricians}`,
    label: "Master Electricians",
    sublabel: "Licensed & insured technicians",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Clock,
    value: config.emergency.averageOnSiteTime,
    label: "Avg. Emergency Response",
    sublabel: "24/7/365 dispatch availability",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Award,
    value: `${config.trust.yearsInBusiness}+`,
    label: "Years in Business",
    sublabel: `Serving ${config.brand.state} since ${config.brand.founded}`,
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

export function CredibilityBoard() {
  return (
    <section className="bg-white border-b border-slate-200 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <StaggerItem key={metric.label}>
              <div className="group text-center p-5 sm:p-6 rounded-xl border border-slate-200 transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover">
                <div className={`inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${metric.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${metric.color}`} />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">{metric.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">{metric.label}</div>
                <div className="text-[10px] sm:text-xs text-slate-500 mt-1">{metric.sublabel}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
