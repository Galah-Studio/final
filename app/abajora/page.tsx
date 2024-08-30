"use client"; // Ensure this file is treated as a client-side component

import {
  abajoraProjectHeader,
  abajoraSpotLight,
  abajoraStorySection,
  abajoraCraftSection,
  abajoraToolsSection,
  abajoraShareButtons,
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
        <abajoraProjectHeader />

        {/* Spotlight Section */}
        <abajoraSpotLight />

        {/* Story Section */}
        <abajoraStorySection />

        {/* Craft Section */}
        <abajoraCraftSection />

        {/* Tools Section */}
        <abajoraToolsSection />

        {/* Share Buttons Section */}
        <abajoraShareButtons {...shareProps} />
      </main>
    </ActiveSectionContextProvider>
  );
}
