import ResearchHero from "@/components/research/ResearchHero";
import ResearchPhilosophy from "@/components/research/ResearchPhilosophy";
import ResearchDomains from "@/components/research/ResearchDomains";
import ResearchProcess from "@/components/research/ResearchProcess";
import FeaturedResearch from "@/components/research/FeaturedResearch";

export default function ResearchPage() {
  return (
    <>
      <ResearchHero />
      
      <ResearchPhilosophy />

      <ResearchDomains/>

      <ResearchProcess/>

      <FeaturedResearch/>
      
    </>
  );
}