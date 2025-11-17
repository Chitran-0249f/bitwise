import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DiverseSectors from "@/components/DiverseSectors";
import StatsSection from "@/components/StatsSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import BIMBenefits from "@/components/BIMBenefits";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DiverseSectors />
      <StatsSection />
      <BIMBenefits />
      <ProjectsShowcase />
      <CTASection />
    </>
  );
}
