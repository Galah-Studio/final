import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import StorySection from '../../components/projects/abajora/StorySection';
import CraftSection from '../../components/projects/abajora/CraftSection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';
import Footer from '../../components/footer';
// Import the context provider and test export
import { useActiveSectionContext, testExport } from '../../context/active-section-context';

console.log(testExport); // Temporary debug statement to ensure import works

const Abajora = () => {
  return (
    <ActiveSectionContextProvider>
      <div className="bg-custom-dark text-white">
        <ProjectHeader />
        <SpotLight />
        <StorySection />
        <CraftSection />
        <ToolsSection />
        <div className="flex justify-center">
          <ShareButtons title="Abajora Project" url="http://yourwebsite.com/abajora" imageUrl="path/to/image.jpg" />
        </div>
        <Footer />
      </div>
    </ActiveSectionContextProvider>
  );
};

export default Abajora;
