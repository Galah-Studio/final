import React from 'react';
import SectionHeading from "@/components/SectionHeading"; // Adjust the path based on your folder structure

const CraftSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-black" id="craft">
      <SectionHeading>Process</SectionHeading>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row">
          <img src="/path-to-image.jpg" alt="Process Image" className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Step Title</h3>
            <p className="text-lg">Explanation of this step in the process.</p>
          </div>
        </div>
        {/* Repeat similar blocks for each step in the process */}
      </div>
    </section>
  );
};

export default CraftSection;
