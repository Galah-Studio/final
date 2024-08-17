import Layout from '../../app/Layout';
import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import CraftSection from '../../components/projects/abajora/CraftSection';
import StorySection from '../../components/projects/abajora/StorySection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';
import Footer from '../../components/footer';

// Import the context provider
import { ActiveSectionContextProvider } from '../../context/active-section-context';

const Abajora = () => {
  // Define the props to pass to the ShareButtons component
  const shareProps = {
    title: 'Abajora Project',
    url: 'https://your-website-url.com/projects/abajora',
    imageUrl: 'https://your-website-url.com/path-to-your-image.jpg',
  };

  return (
    <ActiveSectionContextProvider>
      <div className="bg-custom-dark text-white">
        <ProjectHeader />
        <SpotLight />
        <StorySection />
        <CraftSection />
        <ToolsSection />
        <ShareButtons {...shareProps} />
        <Footer />
      </div>
    </ActiveSectionContextProvider>
  );
};

export default Abajora;
