import React from 'react';
import SectionHeading from '../../section-heading';

const ToolsSection = () => {
  return (
    <section id="tools" className="py-16 bg-dark-800 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Tools Used" />
        <div className="flex flex-wrap mt-6">
          <span className="mr-4 mb-4 text-lg">Blender</span>
          <span className="mr-4 mb-4 text-lg">After Effects</span>
          <span className="mr-4 mb-4 text-lg">Photoshop</span>
          {/* Add more tools as necessary */}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
