import React from 'react';
import SectionHeading from '../../section-heading';

const CraftSection = () => {
  return (
    <section id="craft" className="py-16 bg-dark-900 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Process" />
        <div className="mt-6">
          <h3 className="text-2xl font-bold">Step Title</h3>
          <p className="mt-4">
            Explanation of this step in the process.
          </p>
          <div className="mt-6">
            <img src="/path-to-image.jpg" alt="Step Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftSection;
