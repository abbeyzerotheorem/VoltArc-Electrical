"use client";

import { useState, useEffect } from "react";
import { Phone, Calendar, MessageSquare } from "lucide-react";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function MobileRibbon() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <>
      <div className="h-[72px] lg:hidden" aria-hidden="true" />
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950/98 backdrop-blur-md border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] safe-area-bottom"
        role="navigation"
        aria-label="Quick actions"
      >
        <div className="flex items-stretch">
          <a
            href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-red-600 hover:bg-red-500 active:bg-red-700 transition-colors min-h-[64px]"
            aria-label={`Call dispatch ${config.emergency.phone}`}
          >
            <Phone className="h-5 w-5" />
            <span className="text-[11px] font-bold tracking-wide">Call Dispatch</span>
          </a>
          <div className="w-px bg-slate-800" aria-hidden="true" />
          <a
            href="#diagnostic"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-amber-500 hover:bg-amber-400 active:bg-amber-600 transition-colors min-h-[64px]"
            aria-label="Book service online"
          >
            <Calendar className="h-5 w-5" />
            <span className="text-[11px] font-bold tracking-wide">Book Online</span>
          </a>
          <div className="w-px bg-slate-800" aria-hidden="true" />
          <a
            href={`sms:${config.emergency.smsNumber.replace(/\D/g, "")}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-colors min-h-[64px]"
            aria-label="Text an electrician"
          >
            <MessageSquare className="h-5 w-5" />
            <span className="text-[11px] font-bold tracking-wide">Text Electrician</span>
          </a>
        </div>
      </nav>
    </>
  );
}
