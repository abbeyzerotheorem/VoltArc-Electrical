"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/98 backdrop-blur-md shadow-elevated border-b border-slate-800"
            : "bg-slate-950/95 backdrop-blur-sm border-b border-slate-800"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500">
                <Zap className="h-5 w-5 text-slate-950" />
              </div>
              <span className="text-lg font-bold text-white hidden sm:block">{config.brand.name}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 min-h-[48px] flex items-center ${
                    pathname === link.href
                      ? "bg-slate-800 text-white"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-glow-amber min-h-[48px]"
              >
                <Phone className="h-4 w-4" />
                {config.emergency.phone}
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 min-h-[48px] min-w-[48px]"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.2 },
              }}
              className="lg:hidden border-t border-slate-800 bg-slate-950 overflow-hidden"
            >
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors min-h-[48px] ${
                      pathname === link.href
                        ? "bg-slate-800 text-white"
                        : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
                  className="flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-3 text-sm font-bold text-slate-950 min-h-[48px]"
                >
                  <Phone className="h-4 w-4" />
                  Call {config.emergency.phone}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
  );
}
