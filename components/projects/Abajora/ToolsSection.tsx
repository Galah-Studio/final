import React from 'react';
import SectionHeading from "@/components/SectionHeading"; // Adjust the path based on your folder structure

const ToolsSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-black" id="tools">
      <SectionHeading>Tools Used</SectionHeading>
      <div className="flex flex-wrap gap-4">
        <span className="bg-gray-200 px-4 py-2 rounded-lg">Blender</span>
        <span className="bg-gray-200 px-4 py-2 rounded-lg">After Effects</span>
        <span className="bg-gray-200 px-4 py-2 rounded-lg">Photoshop</span>
        {/* Add more tools as needed */}
      </div>
    </section>
  );
};

export default ToolsSection;
