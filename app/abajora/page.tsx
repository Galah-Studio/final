"use client";

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";
import AbajoraLogos from "@/components/abajoraLogos";
import { useSectionInView } from "@/lib/hooks"; // Assuming this hook returns a ref

export default function Page() {
  const spotlightRef = useSectionInView("SpotLight");
  const clientsRef = useSectionInView("Clients");
  const storyRef = useSectionInView("Story");
  const craftRef = useSectionInView("Craft");
  const toolsRef = useSectionInView("Tools");

  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://Galah.tv/abajora",
    imageUrl: "https://Galah.tv/_next/image?url=%2Fvivi_full.png",
  };

  return (
    <main className="bg-custom-dark text-white">
      {/* Project Header Section */}
      <AbajoraProjectHeader />

      {/* Spotlight Section */}
      <section ref={spotlightRef as unknown as React.Ref<HTMLElement>} id="spotlight">
        <AbajoraSpotLight />
      </section>

      {/* Clients Logos Section */}
      <section ref={clientsRef as unknown as React.Ref<HTMLElement>} id="clients">
        <AbajoraLogos />
      </section>

      {/* Share Buttons Section */}
      <AbajoraShareButtons {...shareProps} />

      {/* Story Section */}
      <section ref={storyRef as unknown as React.Ref<HTMLElement>} id="story">
        <AbajoraStorySection />
      </section>

      {/* Craft Section */}
      <section ref={craftRef as unknown as React.Ref<HTMLElement>} id="craft">
        <AbajoraCraftSection />
      </section>

      {/* Tools Section */}
      <section ref={toolsRef as unknown as React.Ref<HTMLElement>} id="tools">
        <AbajoraToolsSection />
      </section>
    </main>
  );
}
