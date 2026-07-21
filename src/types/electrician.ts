export type HazardLevel = "low" | "medium" | "high";
export type ServiceCategory = "residential" | "commercial" | "smart-home" | "emergency";
export type UrgencyRating = "routine" | "soon" | "urgent";

export interface EmergencyContact {
  phone: string;
  smsNumber: string;
  averageOnSiteTime: string;
  dispatcherStatus: "On-Call & Ready" | "Emergency Crew Dispatched" | "All Crews Active";
}

export interface CoverageArea {
  city: string;
  zipCodes: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  estimatedBaseCost: string;
  averageCompletionTime: string;
  urgencyRating: UrgencyRating;
}

export interface TrustFactor {
  masterElectricians: number;
  rating: number;
  totalReviews: number;
  yearsInBusiness: number;
}

export interface PricingEntry {
  id: string;
  service: string;
  basePrice: string;
  priceRange: string;
  description: string;
}

export interface DiagnosticOption {
  id: string;
  label: string;
  hazardLevel: HazardLevel;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceType: string;
}

export interface GalleryProject {
  title: string;
  category: string;
  description: string;
  gradient: string;
}

export interface SafetyPromise {
  title: string;
  description: string;
  iconName: string;
}

export interface CredibilityCredential {
  iconName: string;
  title: string;
  detail: string;
  subtext: string;
  color: string;
  bg: string;
  border: string;
}

export interface ElectricianConfig {
  brand: {
    name: string;
    tagline: string;
    contractorLicenseKey: string;
    state: string;
    liabilityInsuranceLimit: string;
    address: string;
    founded: number;
  };
  emergency: EmergencyContact;
  coverage: CoverageArea[];
  services: ServiceItem[];
  trust: TrustFactor;
  pricing: PricingEntry[];
  diagnosticOptions: DiagnosticOption[];
  faqs: FAQItem[];
  testimonials: Testimonial[];
  galleryProjects: GalleryProject[];
  safetyPromises: SafetyPromise[];
  credentials: CredibilityCredential[];
}
