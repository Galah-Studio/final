import React from 'react';
import ProjectHeader from './ProjectHeader';
import SpotLight from './SpotLight';
import StorySection from './StorySection';
import CraftSection from './CraftSection';
import ToolsSection from './ToolsSection';
import ShareButtons from './ShareButtons';

const Abajora = () => {
  const title = "Abajora Project";
  const url = "https://yourwebsite.com/abajora";
  const imageUrl = "https://yourwebsite.com/path-to-image.jpg";

  return (
    <>
      <ProjectHeader />
      <SpotLight />
      <StorySection />
      <CraftSection />
      <ToolsSection />
      <ShareButtons title={title} url={url} imageUrl={imageUrl} />
    </>
  );
};

export default Abajora;
