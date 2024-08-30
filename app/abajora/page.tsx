"use client"; // Ensure this file is treated as a client-side component

import {
  AbajoraProjectHeader,
  AbajoraSpotLight,
  AbajoraStorySection,
  AbajoraCraftSection,
  AbajoraToolsSection,
  AbajoraShareButtons,
} from "@/components";

// Import the context provider for managing the active section
import { ActiveSectionContextProvider } from "@/context/active-section-context";

// Main component for the Abajora project page
export default function Abajora() {
  // Define props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/projects/abajora",
    imageUrl: "https://your-website-url.com/path-to-your-image.jpg",
  };

  return (
    <ActiveSectionContextProvider>
      <main className="bg-custom-dark text-white">
        {/* Project Header Section */}
        <AbajoraProjectHeader />

        {/* Spotlight Section */}
        <AbajoraSpotLight />

        {/* Story Section */}
        <AbajoraStorySection />

        {/* Craft Section */}
        <AbajoraCraftSection />

        {/* Tools Section */}
        <AbajoraToolsSection />

        {/* Share Buttons Section */}
        <AbajoraShareButtons {...shareProps} />
      </main>
    </ActiveSectionContextProvider>
  );
}
