// app/vivi/page.tsx

"use client";

import { ActiveSectionContextProvider } from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import ViviProjectHeader from "@/components/viviProjectHeader";
import ViviSpotLight from "@/components/viviSpotLight";
import ViviLogos from "@/components/viviLogos";
import ViviShareButtons from "@/components/viviShareButtons";
import ViviStorySection from "@/components/viviStorySection";
import ViviCraftSection from "@/components/viviCraftSection";
import ViviToolsSection from "@/components/viviToolsSection";
import Footer from "@/components/footer";

export default function ViviPage() {
  const shareProps = {
    title: "Vivi Water Company Ad Campaign",
    url: "https://Galah.tv/vivi", // Replace with your actual URL
    imageUrl: "https://Galah.tv/vivi_full.png", // Replace with the actual image URL
  };

  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        <main className="flex flex-col items-center bg-gray-50 text-gray-950 dark:bg-custom-dark dark:text-gray-50 dark:text-opacity-90 px-4">
          {/* Project Header */}
          <ViviProjectHeader />

          {/* Spotlight Section */}
          <ViviSpotLight />

          {/* Clients Logos Section */}
          {/* Add ViviLogos component if needed */}
          <ViviLogos />

          {/* Share Buttons */}
          {/* Add ViviShareButtons component if needed */}
          <ViviShareButtons {...shareProps} />

          {/* Story Section */}
          <ViviStorySection />

          {/* Craft Section */}
          {/* Add ViviCraftSection component if needed */}
          <ViviCraftSection />

          {/* Tools Section */}
          {/* Add ViviToolsSection component if needed */}
          <ViviToolsSection />
        </main>
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}