"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 hidden lg:block"
        >
          <div className="bg-slate-950/98 backdrop-blur-md border-t border-slate-800 shadow-[0_-8px_30px_rgba(0,0,0,0.5)]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-300">
                <span className="text-white font-bold">Need immediate help?</span>{" "}
                <span className="text-slate-400">Available 24/7 for emergencies</span>
              </p>
              <a
                href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-amber shrink-0 min-h-[44px]"
              >
                <Phone className="h-4 w-4" />
                {config.emergency.phone}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
