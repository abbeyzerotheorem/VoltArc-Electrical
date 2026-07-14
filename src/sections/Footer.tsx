"use client";

import { Phone, Mail, MapPin, Clock, Shield, ArrowUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500">
                  <span className="text-lg font-black text-slate-950">V</span>
                </div>
                <span className="text-lg font-bold text-white">{config.brand.name}</span>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                {config.brand.tagline} Licensed {config.brand.state} electrical contractor providing residential,
                commercial, and emergency services.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Shield className="h-3.5 w-3.5 text-emerald-500" />
                License: {config.brand.contractorLicenseKey}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3">
                <a href={`tel:${config.emergency.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors min-h-[48px]">
                  <Phone className="h-4 w-4 text-amber-500" />
                  {config.emergency.phone}
                </a>
                <a href="mailto:dispatch@voltarcelectrical.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors min-h-[48px]">
                  <Mail className="h-4 w-4 text-blue-500" />
                  dispatch@voltarcelectrical.com
                </a>
                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
                  {config.brand.address}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-1">
                {config.coverage.map((area) => (
                  <div key={area.city} className="text-sm py-1">{area.city}</div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-semibold">24/7 Emergency</div>
                    <div className="text-slate-500">Dispatch Available</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Mon – Fri: 7AM – 7PM</div>
                    <div className="text-slate-500">Standard Services</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-slate-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white font-semibold">Sat: 8AM – 4PM</div>
                    <div className="text-slate-500">Standard Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {config.brand.name}. All rights reserved. License {config.brand.contractorLicenseKey}.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors min-h-[48px] min-w-[48px] justify-center"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
