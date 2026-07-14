import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";
import { Zap, ArrowRight, Clock } from "lucide-react";

const config = electricianConfig;

const urgencyStyles = {
  routine: { label: "Routine", color: "text-emerald-700", bg: "bg-emerald-50" },
  soon: { label: "Schedule Soon", color: "text-amber-700", bg: "bg-amber-50" },
  urgent: { label: "Urgent", color: "text-red-700", bg: "bg-red-50" },
};

export const metadata: Metadata = {
  title: "Our Services — Residential, Commercial & Emergency Electrical",
  description:
    "Explore VoltArc Electrical services: emergency repair, panel upgrades, EV charger installation, whole-home rewiring, commercial build-outs, and smart home integration in Austin, TX.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-400 mb-6">
                  <Zap className="h-4 w-4 text-amber-500" />
                  Our Services
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Expert Electrical Solutions for{" "}
                  <span className="text-amber-500">Every Need</span>
                </h1>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  From emergency repairs to full commercial build-outs, our {config.trust.masterElectricians} Master Electricians
                  deliver safe, code-compliant work backed by a 5-year warranty.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {config.services.map((service) => {
                const urgency = urgencyStyles[service.urgencyRating];
                return (
                  <StaggerItem key={service.id}>
                    <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg flex flex-col">
                      <div className="flex items-start justify-between mb-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${urgency.bg} ${urgency.color}`}
                        >
                          {urgency.label}
                        </span>
                        <span className="text-xs text-slate-500 capitalize">{service.category}</span>
                      </div>
                      <h2 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h2>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">{service.description}</p>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-500">Starting from</div>
                          <div className="text-lg font-bold text-slate-900">{service.estimatedBaseCost}</div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-slate-600">
                          <Clock className="h-4 w-4 text-slate-400" />
                          {service.averageCompletionTime}
                        </div>
                      </div>
                      <a
                        href="/contact"
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-slate-800 min-h-[48px]"
                      >
                        Get a Quote
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">Not Sure What You Need?</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Call us for a free phone consultation or book an on-site diagnostic visit for $89 (waived if you book the repair same-day).
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-amber-400 transition-colors min-h-[56px]"
              >
                Schedule a Diagnostic
                <ArrowRight className="h-5 w-5" />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
