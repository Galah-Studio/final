import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import CraftSection from '../../components/projects/abajora/CraftSection';
import StorySection from '../../components/projects/abajora/StorySection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';
import Footer from '../components/Footer';

const abajora = () => {
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

export default abajora;
