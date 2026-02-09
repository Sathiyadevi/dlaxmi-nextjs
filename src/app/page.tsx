import Hero from "@/components/Hero1";
import ResearchDomains from "@/components/ResearchDomains";
import WhyUs from "@/components/WhyUs";


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
