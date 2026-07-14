"use client";

import { Shield, SprayCan, UserCheck, ThumbsUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";

const promises = [
  {
    icon: Shield,
    title: "100% Satisfaction Guarantee",
    description:
      "If you're not completely satisfied with our work, we'll come back and make it right — at no additional charge. That's the VoltArc promise.",
  },
  {
    icon: UserCheck,
    title: "Background-Checked Technicians",
    description:
      "Every team member undergoes comprehensive federal background checks, drug screening, and continuous ethical training before entering your home.",
  },
  {
    icon: SprayCan,
    title: "Meticulous Cleanliness Protocol",
    description:
      "Shoe boot covers on every visit. Drop cloths on every work surface. Complete debris removal and cleanup before we leave. Your home stays pristine.",
  },
  {
    icon: ThumbsUp,
    title: "No-Risk Upfront Pricing",
    description:
      "You approve the exact price before any work begins. No hourly runarounds, no surprise charges, no hidden fees — guaranteed.",
  },
];

export function SafetyOath() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
              <Shield className="h-4 w-4" />
              The VoltArc Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our Cleanliness & Safety Oath
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We treat your home like our own. Every technician, every visit, every time.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise) => (
            <StaggerItem key={promise.title}>
              <div className="h-full rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all hover:border-slate-300 hover:bg-white">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                  <promise.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{promise.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{promise.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
