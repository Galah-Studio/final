import React from 'react';
import ProjectHeader from '../../components/projects/Abajora/ProjectHeader';
import SpotLight from '../../components/projects/Abajora/SpotLight';
import StorySection from '../../components/projects/Abajora/StorySection';
import CraftSection from '../../components/projects/Abajora/CraftSection';
import ToolsSection from '../../components/projects/Abajora/ToolsSection';
import ShareButtons from '../../components/projects/Abajora/ShareButtons';

const Abajora = () => {
  return (
    <div>
      <ProjectHeader />
      <SpotLight />
      <StorySection />
      <CraftSection />
      <ToolsSection />
      <ShareButtons />
    </div>
  );
};

export default Abajora;
