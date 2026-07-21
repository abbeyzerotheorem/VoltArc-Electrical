"use client";

import { Shield, UserCheck, Sparkles, ThumbsUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
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
    <section className="bg-slate-50 content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              The VoltArc Standard
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              We treat your home like our own. Every technician, every visit, every time.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {config.safetyPromises.map((promise, i) => {
              const Icon = iconMap[promise.iconName] || Shield;
              return (
                <div
                  key={promise.title}
                  className="group relative flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-500">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">{promise.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{promise.description}</p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
