import React from 'react';

const ToolsSection = () => {
  return (
    <section id="tools" className="bg-backbanner-dark text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-comfortaa text-3xl mb-4 text-galah">Tools Used</h2>
        <div className="flex flex-wrap space-x-4">
          <span className="font-maven">Blender</span>
          <span className="font-maven">After Effects</span>
          <span className="font-maven">Photoshop</span>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
