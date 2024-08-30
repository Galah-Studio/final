"use client"; // Ensure this runs on the client-side

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";

export default function Page() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/projects/abajora",
    imageUrl: "https://your-website-url.com/path-to-your-image.jpg",
  };

  return (
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
  );
}
