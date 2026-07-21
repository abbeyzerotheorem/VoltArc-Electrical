"use client";

import { Shield, UserCheck, Sparkles, ThumbsUp } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const iconMap: Record<string, typeof Shield> = {
  Shield,
  UserCheck,
  Sparkles,
  ThumbsUp,
};

export function SafetyOath() {
  return (
    <section className="bg-white content-visibility-auto">
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
          {config.safetyPromises.map((promise) => {
            const Icon = iconMap[promise.iconName] || Shield;
            return (
              <StaggerItem key={promise.title}>
                <div className="group h-full rounded-xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-card-hover">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{promise.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{promise.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
