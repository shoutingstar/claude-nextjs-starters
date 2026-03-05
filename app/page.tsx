import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <MarketingLayout>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </MarketingLayout>
  );
}
