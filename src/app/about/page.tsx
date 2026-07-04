import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ResearchAreas from "@/components/about/ResearchAreas";
import ResearchProcess from "@/components/about/ResearchProcess";
import WhyChooseUs from "@/components/about/WhyChooseUs"
import Collaborate from "@/components/about/Collaborate";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      <OurStory />

      <MissionVision />
      
      <ResearchAreas/>

      <ResearchProcess/>

      <WhyChooseUs/>

      <Collaborate/>

    </main>
  );
}