// Import necessary components from the specified location
import {
  ProjectHeader,
  SpotLight,
  StorySection,
  CraftSection,
  ToolsSection,
  ShareButtons,
} from "@/components/projects/abajora";

// Importing the context provider
import { ActiveSectionContextProvider } from "@/context/active-section-context";

// This is the main component for the Abajora project page
export default function Abajora() {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/projects/abajora",
    imageUrl: "https://your-website-url.com/path-to-your-image.jpg",
  };

  return (
    <ActiveSectionContextProvider>
      <main className="bg-custom-dark text-white">
        <ProjectHeader />
        <SpotLight />
        <StorySection />
        <CraftSection />
        <ToolsSection />
        <ShareButtons {...shareProps} />
      </main>
    </ActiveSectionContextProvider>
  );
}
