import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import NewsSection from "@/components/home/NewsSection";
import EventsSection from "@/components/home/EventsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <WelcomeSection />
      <NewsSection />
      <EventsSection />
      <GalleryPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
