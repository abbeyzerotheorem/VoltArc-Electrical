import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us — Request a Quote or Emergency Dispatch",
  description:
    "Contact VoltArc Electrical for emergency electrical repair, free estimates, and scheduling. Call (512) 555-0147 or submit a request online. Serving Austin, Round Rock, Cedar Park, and surrounding areas.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ContactPageContent />
      </main>
    </>
  );
}

import { ContactForm, ContactInfo } from "@/components/ContactSection";
import { FadeIn } from "@/components/FadeIn";

function ContactPageContent() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700 mb-4">
              Get In Touch
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Request a Quote or Emergency Dispatch
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Fill out the form below or call us directly. We respond within 30 minutes during business hours.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
