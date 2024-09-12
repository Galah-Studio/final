"use client";

import {
  AbajoraProjectHeader,
  AbajoraSpotLight,
  AbajoraStorySection,
  AbajoraCraftSection,
  AbajoraToolsSection,
  AbajoraShareButtons,
  AbajoraLogos,
  BackgroundEffect,
} from "@/components";

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
