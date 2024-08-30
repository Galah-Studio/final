import { abajoraProjectHeader as ProjectHeader, abajoraSpotLight as SpotLight, abajoraStorySection as StorySection, abajoraCraftSection as CraftSection, abajoraToolsSection as ToolsSection, abajoraShareButtons as ShareButtons, } from "@/components";

// Importing the context provider
import { ActiveSectionContextProvider } from "@/context/active-section-context";

export default function Abajora() {
  const shareProps = {
    title: "Abajora Project",
    url: "https://your-website-url.com/abajora",
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
