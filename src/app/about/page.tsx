import AboutHero from "@/components/AboutHero";
import OurStory from "@/components/OurStory";
import MissionVision from "@/components/MissionVision";
import ResearchAreas from "@/components/ResearchAreas";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      <OurStory />

      <MissionVision />
      
      <ResearchAreas/>
    </main>
  );
}