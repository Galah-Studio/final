import {
  abajoraProjectHeader,
  abajoraSpotLight,
  abajoraStorySection,
  abajoraCraftSection,
  abajoraToolsSection,
  abajoraShareButtons,
} from "@/components";


  return (
    <main className="flex flex-col items-center px-4 bg-custom-dark text-white">
      {/* The ProjectHeader component displays the header section of the project */}
      <abajoraProjectHeader />

      {/* The SpotLight component highlights a key visual of the project */}
      <abajoraSpotLight />

      {/* The StorySection component provides the narrative of the project */}
      <abajoraStorySection />

      {/* The CraftSection component details the process behind the project */}
      <abajoraToolsSection />

      {/* The ToolsSection component lists the tools and technologies used */}
      <abajoraShareButtons />

    </main>
  );
}
