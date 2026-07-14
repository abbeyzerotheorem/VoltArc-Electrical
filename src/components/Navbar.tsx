"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Zap } from "lucide-react";
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
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
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
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors min-h-[48px] flex items-center ${
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
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400 min-h-[48px]"
            >
              <Phone className="h-4 w-4" />
              {config.emergency.phone}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 min-h-[48px] min-w-[48px]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
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
        </div>
      )}
    </nav>
  );
}
