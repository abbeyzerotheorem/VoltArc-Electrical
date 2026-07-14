"use client";

import { Star, Quote, ExternalLink } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function Testimonials() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-4">
              <Star className="h-4 w-4" />
              Verified Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Trusted by {config.trust.totalReviews}+ Homeowners
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real reviews from real customers who chose VoltArc for their electrical safety.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mx-auto max-w-sm mb-10 rounded-xl border border-slate-200 bg-white p-5 flex items-center gap-4 shadow-sm">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1 mb-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-sm font-bold text-slate-900">{config.trust.rating} on Google</div>
              <div className="text-xs text-slate-500">{config.trust.totalReviews} verified reviews</div>
            </div>
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors min-h-[48px] min-w-[48px] justify-center"
            >
              View
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {config.testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.name}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-md">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-slate-200"}`}
                    />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-slate-200 mb-3" />
                <p className="text-sm text-slate-700 leading-relaxed mb-4">{testimonial.text}</p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.location}</div>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                      {testimonial.serviceType}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
