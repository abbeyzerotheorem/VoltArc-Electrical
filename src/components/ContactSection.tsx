"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FadeIn>
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Submitted</h3>
          <p className="text-slate-600 max-w-md mx-auto">
            Thank you! A dispatcher will contact you within 30 minutes during business hours.
            For emergencies, call us directly.
          </p>
          <a
            href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-amber-400 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now — {config.emergency.phone}
          </a>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all min-h-[48px]"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all min-h-[48px]"
              placeholder="(512) 555-0000"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all min-h-[48px]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1.5">Service Needed</label>
            <select
              id="service"
              name="service"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all min-h-[48px] bg-white"
            >
              <option value="">Select a service</option>
              {config.services.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="urgency" className="block text-sm font-semibold text-slate-700 mb-1.5">How Urgent?</label>
            <select
              id="urgency"
              name="urgency"
              required
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all min-h-[48px] bg-white"
            >
              <option value="emergency">Emergency — Need help now</option>
              <option value="soon">Soon — Within a few days</option>
              <option value="routine">Routine — Scheduling flexibility</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">Describe Your Issue</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all resize-none"
              placeholder="Tell us about the electrical issue you're experiencing..."
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed min-h-[56px]"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Request
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-slate-500 text-center">
          We typically respond within 30 minutes during business hours. For emergencies, call us directly.
        </p>
      </form>
    </FadeIn>
  );
}

export function ContactInfo() {
  return (
    <FadeIn delay={0.15}>
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <a
              href={`tel:${config.emergency.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-3 text-sm text-slate-700 hover:text-amber-600 transition-colors min-h-[48px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
                <Phone className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Call Us</div>
                <div className="font-semibold">{config.emergency.phone}</div>
              </div>
            </a>
            <a
              href="mailto:dispatch@voltarcelectrical.com"
              className="flex items-center gap-3 text-sm text-slate-700 hover:text-blue-600 transition-colors min-h-[48px]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email Us</div>
                <div className="font-semibold">dispatch@voltarcelectrical.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <MapPin className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Office</div>
                <div className="font-semibold">{config.brand.address}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-700">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Clock className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Hours</div>
                <div className="font-semibold">24/7 Emergency — Mon–Sat Standard</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="p-6 pb-4">
            <h3 className="text-lg font-bold text-slate-900 mb-1">Our Location</h3>
            <p className="text-sm text-slate-500">4821 Industrial Blvd, Suite 200, Austin, TX 78745</p>
          </div>
          <div className="aspect-[16/10] w-full bg-slate-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.5!2d-97.7694!3d30.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDEzJzAxLjkiTiA5N8KwNDYnMTAuMSJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VoltArc Electrical office location"
            />
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
