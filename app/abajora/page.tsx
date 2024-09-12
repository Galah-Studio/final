"use client"; // Ensure this runs on the client-side

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";
import AbajoraLogos from "@/components/abajoraLogos";
import { useSectionInView } from "@/lib/hooks"; // Assuming you're using a hook to track section in view

export default function Page() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://Galah.tv/abajora",
    imageUrl: "https://Galah.tv/_next/image?url=%2Fvivi_full.png",
  };

  // Use `useSectionInView` for tracking sections
  const spotlightRef = useSectionInView("SpotLight");
  const clientsRef = useSectionInView("Clients");
  const storyRef = useSectionInView("Story");
  const craftRef = useSectionInView("Craft");
  const toolsRef = useSectionInView("Tools");

  return (
    <main className="bg-custom-dark text-white">
      {/* Project Header Section */}
      <AbajoraProjectHeader />

      {/* Spotlight Section */}
      <section id="spotlight" ref={spotlightRef}>
        <AbajoraSpotLight />
      </section>

       {/* AbajoraLogos Section */}
      <section id="clients" ref={clientsRef}>
        <AbajoraLogos />
      </section>

      {/* Share Buttons Section */}
      <AbajoraShareButtons {...shareProps} />

      {/* Story Section */}
      <section id="story" ref={storyRef}>
        <AbajoraStorySection />
      </section>

      {/* Craft Section */}
      <section id="craft" ref={craftRef}>
        <AbajoraCraftSection />
      </section>

      {/* Tools Section */}
      <section id="tools" ref={toolsRef}>
        <AbajoraToolsSection />
      </section>
    </main>
  );
}
