// app/abajora/page.tsx

"use client";

import { ActiveSectionContextProvider } from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import AbajoraProjectHeader from "@/components/abajoraProjectHeader";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraLogos from "@/components/abajoraLogos";
import AbajoraShareButtons from "@/components/abajoraShareButtons";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import Footer from "@/components/footer";

export default function AbajoraPage() {
  const shareProps = {
    title: "Abajora Project",
    url: "https://Galah.tv/abajora",
    imageUrl: "https://Galah.tv/_next/image?url=%2Fabj_full.png",
  };

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <main className="flex flex-col items-center bg-gray-50 text-gray-950 dark:bg-custom-dark dark:text-gray-50 dark:text-opacity-90 px-4">
          {/* Project Header */}
          <AbajoraProjectHeader />

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
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}
