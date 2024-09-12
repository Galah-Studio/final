"use client";

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";
import AbajoraLogos from "@/components/abajoraLogos";
import { useSectionInView } from "@/lib/hooks"; // Assuming this hook returns a ref

// This is the main component for the Abajora page.
export default function AbajoraPage() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://Galah.tv/abajora",
    imageUrl: "https://Galah.tv/_next/image?url=%2Fvivi_full.png",
  };

  return (
    <main className="flex flex-col items-center bg-custom-dark text-white px-4">
      {/* Project Header */}
      <AbajoraProjectHeader />

      {/* Background Effect */}
      <BackgroundEffect />

      {/* Spotlight Section */}
      <AbajoraSpotLight />

      {/* Clients Logos Section */}
      <AbajoraLogos />

      {/* Share Buttons */}
      <AbajoraShareButtons {...shareProps} />

      {/* Story Section */}
      <AbajoraStorySection />

      {/* Craft Section */}
      <AbajoraCraftSection />

      {/* Tools Section */}
      <AbajoraToolsSection />
    </main>
  );
}
