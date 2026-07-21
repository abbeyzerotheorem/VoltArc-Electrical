"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 24 : 300;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 24 : 300;
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="bg-white content-visibility-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Trusted by {config.trust.totalReviews}+ Homeowners
              </h2>
              <p className="mt-2 text-lg text-slate-600">
                Real reviews from real customers who chose VoltArc.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shrink-0 shadow-card">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-900">{config.trust.rating} on Google</div>
                <div className="text-xs text-slate-500">{config.trust.totalReviews} verified</div>
              </div>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors ml-2 min-h-[40px] min-w-[40px] justify-center"
              >
                View
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:snap-none"
          >
            {config.testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="snap-start shrink-0 w-[85vw] sm:w-auto sm:snap-none"
              >
                <div className="h-full rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-slate-200"}`}
                      />
                    ))}
                  </div>
                  <Quote className="h-5 w-5 text-slate-200 mb-2" />
                  <p className="text-sm text-slate-700 leading-relaxed flex-1 mb-4">{testimonial.text}</p>
                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-slate-900 truncate">{testimonial.name}</div>
                        <div className="text-xs text-slate-500">{testimonial.location}</div>
                      </div>
                      <span className="shrink-0 inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
                        {testimonial.serviceType}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 sm:hidden">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              {config.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const el = scrollRef.current;
                    if (!el) return;
                    const cardWidth = el.firstChild instanceof HTMLElement ? el.firstChild.offsetWidth + 24 : 300;
                    el.scrollTo({ left: idx * cardWidth, behavior: "smooth" });
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "bg-amber-500 w-6" : "bg-slate-300"
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
