import { cms } from "@/lib/cms/adapter";
import HeroSection from "@/components/home/HeroSection";
import TrustSignals from "@/components/home/TrustSignals";
import PracticeAreaGrid from "@/components/home/PracticeAreaGrid";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import FeaturedTeam from "@/components/home/FeaturedTeam";
import CTABanner from "@/components/home/CTABanner";

export default async function HomePage() {
  const [config, practiceAreas, featuredSolicitors, featuredTestimonials] =
    await Promise.all([
      cms.getSiteConfig(),
      cms.getPracticeAreas(),
      cms.getFeaturedSolicitors(),
      cms.getFeaturedTestimonials(),
    ]);

  return (
    <>
      <HeroSection phone={config.contact.phone} />
      <TrustSignals />
      <PracticeAreaGrid practiceAreas={practiceAreas} />
      <TestimonialsCarousel testimonials={featuredTestimonials} />
      <FeaturedTeam solicitors={featuredSolicitors} />
      <CTABanner phone={config.contact.phone} />
    </>
  );
}
