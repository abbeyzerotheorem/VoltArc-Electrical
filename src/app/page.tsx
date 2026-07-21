import { Navbar } from "@/components/Navbar";
import { EmergencyHeader } from "@/sections/EmergencyHeader";
import { HeroSection } from "@/sections/HeroSection";
import { DiagnosticTool } from "@/sections/DiagnosticTool";
import { ServicesGrid } from "@/sections/ServicesGrid";
import { CredibilityVault } from "@/sections/CredibilityVault";
import { PricingMatrix } from "@/sections/PricingMatrix";
import { SafetyOath } from "@/sections/SafetyOath";
import { Testimonials } from "@/sections/Testimonials";
import { FAQAccordion } from "@/sections/FAQAccordion";
import { Footer } from "@/sections/Footer";
import { MobileRibbon } from "@/sections/MobileRibbon";

export default function Home() {
  return (
    <>
      <EmergencyHeader />
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <DiagnosticTool />
        <ServicesGrid />
        <CredibilityVault />
        <PricingMatrix />
        <SafetyOath />
        <Testimonials />
        <FAQAccordion />
      </main>
      <Footer />
      <MobileRibbon />
    </>
  );
}
