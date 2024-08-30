import {
  abajoraProjectHeader as ProjectHeader,
  abajoraSpotLight as SpotLight,
  abajoraStorySection as StorySection,
  abajoraCraftSection as CraftSection,
  abajoraToolsSection as ToolsSection,
  abajoraShareButtons as ShareButtons,
} from "@/components";

// This is the main component for the Abajora project page.
export default function Abajora() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/projects/abajora",
    imageUrl: "https://your-website-url.com/path-to-your-image.jpg",
  };

  return (
    <main className="flex flex-col items-center px-4 bg-custom-dark text-white">
      {/* The ProjectHeader component displays the header section of the project */}
      <ProjectHeader />

      {/* The SpotLight component highlights a key visual of the project */}
      <SpotLight />

      {/* The StorySection component provides the narrative of the project */}
      <StorySection />

      {/* The CraftSection component details the process behind the project */}
      <CraftSection />

      {/* The ToolsSection component lists the tools and technologies used */}
      <ToolsSection />

      {/* The ShareButtons component allows users to share the project on social media */}
      <ShareButtons {...shareProps} />
    </main>
  );
}
