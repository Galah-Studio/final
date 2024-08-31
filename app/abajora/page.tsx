"use client"; // Ensure this runs on the client-side

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";
import AbajoraLogos from "@/components/abajoraLogos";


export default function Page() {
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
      <section id="spotlight">
        <AbajoraSpotLight />
      </section>

       {/* AbajoraLogos Section */}
      <section id="clients">
        <AbajoraLogos />
      </section>

      {/* Share Buttons Section */}
      <AbajoraShareButtons {...shareProps} />

      {/* Story Section */}
      <section id="story">
        <AbajoraStorySection />
      </section>

      {/* Craft Section */}
      <section id="craft">
        <AbajoraCraftSection />
      </section>

      {/* Tools Section */}
      <section id="tools">
        <AbajoraToolsSection />
      </section>
    </main>
  );
}
