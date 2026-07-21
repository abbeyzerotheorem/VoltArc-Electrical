import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { Camera, Zap, ArrowRight } from "lucide-react";
import { electricianConfig } from "@/data/electrician";

const config = electricianConfig;

export const metadata: Metadata = {
  title: "Project Gallery — Our Recent Electrical Work",
  description:
    "See examples of VoltArc Electrical's recent projects — panel upgrades, EV charger installs, commercial build-outs, and emergency repairs across the Austin metro area.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <FadeIn>
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-1.5 text-sm text-slate-400 mb-6">
                  <Camera className="h-4 w-4 text-amber-500" />
                  Project Gallery
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1]">
                  Recent Work Across{" "}
                  <span className="text-amber-500">Austin, TX</span>
                </h1>
                <p className="mt-6 text-lg text-slate-400 leading-relaxed">
                  A selection of projects completed by our {config.trust.masterElectricians} Master Electricians.
                  Replace these placeholders with actual project photos for maximum impact.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {config.galleryProjects.map((project) => (
                <StaggerItem key={project.title}>
                  <div className="group h-full rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-card-hover flex flex-col">
                    <div
                      className={`aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                      <div className="text-center p-6 relative z-10">
                        <div className="mx-auto w-14 h-14 rounded-2xl bg-slate-900/5 border border-slate-900/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <Zap className="h-7 w-7 text-slate-400" />
                        </div>
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                          Replace with project photo
                        </p>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <span className="inline-flex items-center self-start rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600 mb-3">
                        {project.category}
                      </span>
                      <h2 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h2>
                      <p className="text-sm text-slate-600 leading-relaxed flex-1">{project.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.2}>
              <div className="mt-12 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <Camera className="h-10 w-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-700 mb-1">Add Your Project Photos</h3>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  Replace the placeholder cards above with real project photos. Before/after shots, team photos,
                  and equipment images significantly increase conversion rates for local service businesses.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-white mb-4">Want Results Like These?</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Every project starts with a free phone consultation. Tell us what you need and we&apos;ll provide an honest quote.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-8 py-4 text-base font-bold text-slate-950 hover:bg-amber-400 transition-colors min-h-[56px]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
