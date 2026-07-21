"use client";

import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function EmergencyHeader() {
  return (
    <FadeIn direction="down">
      <div className="bg-slate-950 text-white border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 py-2.5 text-sm">
            <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
              <span className="inline-flex items-center gap-1.5 shrink-0">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-emerald-400 font-semibold text-xs sm:text-sm">{config.emergency.dispatcherStatus}</span>
              </span>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">|</span>
              <span className="inline-flex items-center gap-1.5 text-slate-300 shrink-0">
                <Clock className="h-3.5 w-3.5 text-amber-500" />
                <span className="hidden sm:inline">Dispatched in</span> {config.emergency.averageOnSiteTime}
              </span>
              <span className="text-slate-600 hidden md:inline" aria-hidden="true">|</span>
              <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300 shrink-0">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                Serving {config.coverage.length} Metro Areas
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-3 sm:px-4 py-2 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400 pulse-emergency min-h-[40px] justify-center"
                aria-label={`Call emergency line ${config.emergency.phone}`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">Emergency Dispatch</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              <a
                href={`sms:${config.emergency.smsNumber.replace(/\D/g, "")}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 transition-all hover:border-amber-500 hover:text-amber-500 min-h-[40px] justify-center"
                aria-label="Text for emergency dispatch"
              >
                <MessageSquare className="h-4 w-4" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
