import type {
  PracticeArea,
  Solicitor,
  Testimonial,
  FeeGuide,
  SiteConfig,
  ServicePage,
} from "@/types/cms";

// ─── Abstract interface ─────────────────────────────────────────────────────
// All UI components import only from this module. Swap MockCMSAdapter for
// HttpCMSAdapter (pointing at process.env.CMS_API_URL) with zero UI changes.

export abstract class CMSAdapter {
  abstract getSiteConfig(): Promise<SiteConfig>;
  abstract getPracticeAreas(): Promise<PracticeArea[]>;
  abstract getPracticeAreaBySlug(slug: string): Promise<PracticeArea | null>;
  abstract getSolicitors(): Promise<Solicitor[]>;
  abstract getSolicitorBySlug(slug: string): Promise<Solicitor | null>;
  abstract getFeaturedSolicitors(): Promise<Solicitor[]>;
  abstract getTestimonials(): Promise<Testimonial[]>;
  abstract getFeaturedTestimonials(): Promise<Testimonial[]>;
  abstract getFeeGuides(): Promise<FeeGuide[]>;
  abstract getFeeGuideByPracticeArea(slug: string): Promise<FeeGuide | null>;
  abstract getServicePage(slug: string): Promise<ServicePage | null>;
}

// ─── Mock adapter — reads from local data files ─────────────────────────────

import { siteConfig } from "@/data/mock/siteConfig";
import { practiceAreas } from "@/data/mock/practiceAreas";
import { solicitors } from "@/data/mock/solicitors";
import { testimonials } from "@/data/mock/testimonials";
import { feeGuides } from "@/data/mock/feeGuides";

class MockCMSAdapter extends CMSAdapter {
  async getSiteConfig() {
    return siteConfig;
  }

  async getPracticeAreas() {
    return [...practiceAreas].sort((a, b) => a.order - b.order);
  }

  async getPracticeAreaBySlug(slug: string) {
    return practiceAreas.find((p) => p.slug === slug) ?? null;
  }

  async getSolicitors() {
    return [...solicitors].sort((a, b) => a.order - b.order);
  }

  async getSolicitorBySlug(slug: string) {
    return solicitors.find((s) => s.slug === slug) ?? null;
  }

  async getFeaturedSolicitors() {
    return solicitors
      .filter((s) => s.isFeatured)
      .sort((a, b) => a.order - b.order);
  }

  async getTestimonials() {
    return testimonials;
  }

  async getFeaturedTestimonials() {
    return testimonials.filter((t) => t.isFeatured);
  }

  async getFeeGuides() {
    return feeGuides;
  }

  async getFeeGuideByPracticeArea(slug: string) {
    return feeGuides.find((f) => f.practiceAreaSlug === slug) ?? null;
  }

  async getServicePage(_slug: string): Promise<ServicePage | null> {
    return null;
  }
}

// ─── Singleton — import only in Server Components ───────────────────────────
export const cms = new MockCMSAdapter();
