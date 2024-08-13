import React from 'react';
import SectionHeading from "../../section-heading"; // Adjusted the path based on your folder structure

const StorySection = () => {
  return (
    <section className="py-16 px-6 bg-white text-black" id="story">
      <SectionHeading>About the Project</SectionHeading>
      <p className="text-lg">
        This is where you can describe the Abajora project in detail. Explain the inspiration, goals, and what makes this project unique.
      </p>
    </section>
  );
};

export default StorySection;
