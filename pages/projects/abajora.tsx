// Importing necessary components and context providers
import {
  ProjectHeader,
  SpotLight,
  StorySection,
  CraftSection,
  ToolsSection,
  ShareButtons,
} from "@/components/projects/abajora";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

export default function Abajora() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/projects/abajora",
    imageUrl: "https://your-website-url.com/path-to-your-image.jpg",
  };

  return (
    // Wrapping the components within the ActiveSectionContextProvider
    <ActiveSectionContextProvider>
      <main className="bg-custom-dark text-white">
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
    </ActiveSectionContextProvider>
  );
}
