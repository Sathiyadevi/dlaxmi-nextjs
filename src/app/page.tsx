import Hero from "@/components/hero/Hero";
import ResearchDomains from "@/components/hero/ResearchDomains";
import WhyUs from "@/components/hero/WhyUs";


const HomePage = () => {
  return (
    <main className="min-h-screen">

      {/* HERO SECTION */}
     
        <Hero/>
        <ResearchDomains/>
        <WhyUs/>
      
    </main>
  );
};

export default HomePage;
