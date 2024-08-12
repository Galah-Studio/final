import React from 'react';

const ToolsSection = () => {
  return (
    <section className="py-16 px-6 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6">Tools Used</h2>
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
