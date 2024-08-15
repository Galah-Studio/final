import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import StorySection from '../../components/projects/abajora/StorySection';
import CraftSection from '../../components/projects/abajora/CraftSection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';

const Abajora = () => {
  const title = "Abajora Project";
  const url = "https://galah.tv/projects/abajora";
  const imageUrl = "https://yourwebsite.com/path-to-image.jpg"; // Replace with the correct image URL

  return (
    <div>
      <ProjectHeader />
      <SpotLight />
      <StorySection />
      <CraftSection />
      <ToolsSection />
      <ShareButtons title={title} url={url} imageUrl={imageUrl} /> {/* Pass the required props */}
    </div>
  );
};

export default Abajora;
