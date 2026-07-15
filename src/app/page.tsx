import { HeroVideoSlider } from "@/components/home/HeroVideoSlider";
import { QuickCareAccess } from "@/components/home/QuickCareAccess";
import { TrustStats } from "@/components/home/TrustStats";
import { WhyPratham } from "@/components/home/WhyPratham";
import { CareJourney } from "@/components/home/CareJourney";
import { CancerTypesSection } from "@/components/home/CancerTypesSection";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { DoctorsShowcase } from "@/components/home/DoctorsShowcase";
import { StoriesSection } from "@/components/home/StoriesSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { InternationalSection } from "@/components/home/InternationalSection";
import { LocationsSection } from "@/components/home/LocationsSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroVideoSlider />
      <QuickCareAccess />
      <TrustStats />
      <WhyPratham />
      <CareJourney />
      <CancerTypesSection />
      <TreatmentsSection />
      <DoctorsShowcase />
      <StoriesSection />
      <ResearchSection />
      <InternationalSection />
      <LocationsSection />
      <CtaBanner />
    </>
  );
}
