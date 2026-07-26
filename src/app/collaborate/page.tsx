import CollaborateHero from "@/components/collaborate/CollaborateHero";
import WhyCollaborate from "@/components/collaborate/WhyCollaborate";
import CollaborationAreas from "@/components/collaborate/CollaborationAreas";
import WhoWeCollaborate from "@/components/collaborate/WhoWeCollaborate";
import CollaborationProcess from "@/components/collaborate/CollaborationProcess";
import CollaborationCTA from "@/components/collaborate/CollaborationCTA";

export default function CollaboratePage() {
  return (
    <main>
      <CollaborateHero />

      <WhyCollaborate />

      <CollaborationAreas />

      <WhoWeCollaborate />

      <CollaborationProcess />

      <CollaborationCTA />

    </main>
  );
}