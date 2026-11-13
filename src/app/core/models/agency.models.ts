export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  subServices: string[];
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: 'ai' | 'web' | 'vision';
  categoryLabel: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  visualMockup: {
    accentColor: string;
    tagline: string;
    statsOrLabels: { label: string; value: string }[];
    architecturePoints: string[];
  };
  demoAvailable: boolean;
  demoUrl?: string;
  demoNote?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'services' | 'process' | 'pricing';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string;
}

export interface ValuePillar {
  title: string;
  description: string;
  icon: string;
}

export interface TargetIndustry {
  title: string;
  subtitle: string;
  icon: string;
  examples: string[];
}

export interface QuoteRequest {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  priceRange: string;
  priceUnit?: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  isFeatured?: boolean;
}

export interface AgencyContact {
  agencyName: string;
  tagline: string;
  email: string;
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  location: string;
  businessHours: string;
  responseExpectation: string;
}
