"use client";

import { Shield, ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
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
    <section className="bg-white content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Licensed, Bonded &amp; Insured
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Every credential verified. Every technician certified. Every project protected.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {config.credentials.map((cred) => {
              const Icon = iconMap[cred.iconName] || Shield;
              return (
                <div
                  key={cred.title}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-slate-300 hover:bg-white hover:shadow-card-hover"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${cred.bg} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-5 w-5 ${cred.color}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-900 truncate">{cred.title}</div>
                    <div className={`text-xs font-semibold ${cred.color}`}>{cred.detail}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
