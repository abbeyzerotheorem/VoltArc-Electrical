"use client";

import { Shield, ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const iconMap: Record<string, typeof Shield> = {
  ShieldCheck,
  Shield,
  Award,
  FileCheck,
  BadgeCheck,
};

export function CredibilityVault() {
  return (
    <section className="bg-slate-950 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 text-sm font-semibold text-slate-300 mb-4">
              <ShieldCheck className="h-4 w-4 text-amber-500" />
              Your Protection Guarantee
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Licensed, Bonded & Insured — No Exceptions
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Every credential verified. Every technician certified. Every project protected.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {config.credentials.map((cred) => {
            const Icon = iconMap[cred.iconName] || Shield;
            return (
              <StaggerItem key={cred.title}>
                <div className="group rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-elevated">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${cred.bg} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${cred.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{cred.title}</h3>
                  <div className={`text-lg font-bold ${cred.color}`}>{cred.detail}</div>
                  <div className="text-xs text-slate-500 mt-1">{cred.subtext}</div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
