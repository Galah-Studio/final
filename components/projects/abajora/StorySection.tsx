import React from 'react';
import SectionHeading from '../../section-heading';

const StorySection = () => {
  return (
    <section id="story" className="py-16 bg-dark-800 text-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About the Project" />
        <p className="text-lg mt-6">
          This is where you can describe the Abajora project in detail. Explain the inspiration, goals, and what makes this project unique.
        </p>
      </div>
    </section>
  );
};

export default StorySection;
