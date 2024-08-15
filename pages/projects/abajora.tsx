import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import StorySection from '../../components/projects/abajora/StorySection';
import CraftSection from '../../components/projects/abajora/CraftSection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';

const abajora = () => {
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

export default abajora;
