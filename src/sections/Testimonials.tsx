"use client";

import { Star, Quote } from "lucide-react";
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
