import React from 'react';
import ProjectHeader from '../../components/projects/abajora/ProjectHeader';
import SpotLight from '../../components/projects/abajora/SpotLight';
import StorySection from '../../components/projects/abajora/StorySection';
import CraftSection from '../../components/projects/abajora/CraftSection';
import ToolsSection from '../../components/projects/abajora/ToolsSection';
import ShareButtons from '../../components/projects/abajora/ShareButtons';
import Footer from '../../components/projects/abajora/Footer';

const Abajora = () => {
  return (
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
  );
};

export default Abajora;
