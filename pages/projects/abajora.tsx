import React from 'react';
import ProjectHeader from '../components/projects/Abajora/ProjectHeader';
import SpotLight from '../components/projects/Abajora/SpotLight';
import CraftSection from '../components/projects/Abajora/CraftSection';
import StorySection from '../components/projects/Abajora/StorySection';
import ToolsSection from '../components/projects/Abajora/ToolsSection';
import ShareButtons from '../components/projects/Abajora/ShareButtons';
import Footer from '../components/Footer';

const Abajora = () => {
  return (
    <div className="bg-custom-dark text-white">
      <ProjectHeader />
      <SpotLight />
      <StorySection />
      <CraftSection />
      <ToolsSection />
      <ShareButtons />
      <Footer />
    </div>
  );
};

export default Abajora;
