"use client";

import { Shield, ShieldCheck, Award, FileCheck, BadgeCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const credentials = [
  {
    icon: ShieldCheck,
    title: "Licensed Contractor",
    detail: config.brand.contractorLicenseKey,
    subtext: `Active ${config.brand.state} State License`,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    detail: `${config.brand.liabilityInsuranceLimit} Coverage`,
    subtext: "General Liability & Workers' Comp",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
  {
    icon: Award,
    title: "Master Electricians",
    detail: `${config.trust.masterElectricians} Certified`,
    subtext: "Highest Industry Certification",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
  },
  {
    icon: FileCheck,
    title: "Bonded & Guaranteed",
    detail: "Surety Bonded",
    subtext: "100% Workmanship Warranty",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: BadgeCheck,
    title: "Background Checked",
    detail: "100% Verified Team",
    subtext: "Drug-Tested & Insured Technicians",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

export function CredibilityVault() {
  return (
    <section className="bg-slate-950">
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
          {credentials.map((cred) => (
            <StaggerItem key={cred.title}>
              <div className={`rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center transition-all hover:border-slate-700`}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${cred.bg} mb-3`}>
                  <cred.icon className={`h-6 w-6 ${cred.color}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{cred.title}</h3>
                <div className={`text-lg font-bold ${cred.color}`}>{cred.detail}</div>
                <div className="text-xs text-slate-500 mt-1">{cred.subtext}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
