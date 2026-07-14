import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";
import {
  Shield,
  Users,
  Award,
  Clock,
  Zap,
  CheckCircle2,
} from "lucide-react";

const config = electricianConfig;

export const metadata: Metadata = {
  title: "About Us — Our Team & Electrical Expertise",
  description:
    "Learn about VoltArc Electrical — 15+ years serving Austin, TX. 12 Master Electricians, 847+ verified reviews, and a 4.9-star rating. Licensed, bonded, and insured.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-400 mb-6">
                  <Users className="h-4 w-4 text-amber-500" />
                  About VoltArc Electrical
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Trusted Austin Electricians{" "}
                  <span className="text-amber-500">Since {config.brand.founded}</span>
                </h1>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  VoltArc Electrical was founded with one mission: provide safe, professional, and fast electrical
                  service without the runaround. {config.trust.yearsInBusiness} years later, we&apos;re proud to be the
                  highest-rated electrical contractor in the greater Austin metro area.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <FadeIn>
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                    <p>
                      What started as a two-person emergency repair service has grown into a team of {config.trust.masterElectricians} Master
                      Electricians serving six cities across the Austin metropolitan area. Our founders saw
                      an industry plagued by unreliable contractors, surprise charges, and subpar work — and
                      built VoltArc on the opposite principles.
                    </p>
                    <p>
                      Every technician on our team holds an active Texas State Electrical Contractor License,
                      passes comprehensive federal background checks, and completes ongoing training on the
                      latest National Electrical Code updates. We carry {config.brand.liabilityInsuranceLimit} in
                      general liability insurance and full workers&apos; compensation coverage.
                    </p>
                    <p>
                      From emergency repairs at 2 AM to full commercial build-outs, we treat every job with
                      the same standard: do it right the first time, charge what we quoted, and leave your
                      space cleaner than we found it.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, value: `${config.trust.yearsInBusiness}+`, label: "Years in Business", color: "text-amber-500" },
                    { icon: Users, value: `${config.trust.masterElectricians}`, label: "Master Electricians", color: "text-blue-500" },
                    { icon: Shield, value: "$2M", label: "Insurance Coverage", color: "text-emerald-500" },
                    { icon: Clock, value: "24/7", label: "Emergency Service", color: "text-red-500" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center"
                    >
                      <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                      <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                      <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                  Why Choose VoltArc
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Licensed & Verified",
                    description: `Every electrician holds an active Texas State License (${config.brand.contractorLicenseKey}). No subcontractors, no apprentices working unsupervised.`,
                    icon: Shield,
                  },
                  {
                    title: "Transparent Pricing",
                    description: "You approve the exact price before work begins. No hourly runarounds, no hidden fees, no surprise charges — ever.",
                    icon: CheckCircle2,
                  },
                  {
                    title: "Fast Response",
                    description: `Average emergency response time of ${config.emergency.averageOnSiteTime} across the greater Austin metro. 24/7/365 dispatch availability.`,
                    icon: Clock,
                  },
                  {
                    title: "Clean Work Guaranteed",
                    description: "Shoe boot covers, drop cloths, full debris removal. We treat your home or business like it's our own.",
                    icon: Zap,
                  },
                  {
                    title: "5-Year Warranty",
                    description: "Every project backed by a comprehensive 5-year workmanship warranty. If it fails, we fix it free.",
                    icon: Award,
                  },
                  {
                    title: "Community Trusted",
                    description: `${config.trust.totalReviews}+ verified Google reviews and a ${config.trust.rating}-star rating. The highest-rated electrician in Austin.`,
                    icon: Users,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-6"
                  >
                    <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50">
                      <item.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Whether it&apos;s an emergency repair or a planned upgrade, we&apos;re here to help. Call us or request a free estimate online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-amber-400 transition-colors min-h-[56px]"
                >
                  Call {config.emergency.phone}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-700 px-8 py-4 text-base font-bold text-white hover:border-amber-500 hover:text-amber-500 transition-colors min-h-[56px]"
                >
                  Request a Quote
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
