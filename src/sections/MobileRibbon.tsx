"use client";

import { Phone, Calendar, MessageSquare } from "lucide-react";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function MobileRibbon() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-slate-950 border-t border-slate-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-stretch">
        <a
          href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-red-600 hover:bg-red-500 transition-colors min-h-[60px]"
          aria-label={`Call dispatch ${config.emergency.phone}`}
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-bold">Call Dispatch</span>
        </a>
        <a
          href="#diagnostic"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-amber-500 hover:bg-amber-400 transition-colors min-h-[60px]"
          aria-label="Book service online"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-bold">Book Online</span>
        </a>
        <a
          href={`sms:${config.emergency.smsNumber.replace(/\D/g, "")}`}
          className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-white bg-blue-600 hover:bg-blue-500 transition-colors min-h-[60px]"
          aria-label="Text an electrician"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-xs font-bold">Text Electrician</span>
        </a>
      </div>
    </div>
  );
}
