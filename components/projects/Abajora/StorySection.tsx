"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the StorySection component
const StorySection = () => {
  // Use the useSectionInView custom hook to track when the "Story" section is in view
  const { ref } = useSectionInView("Story");

  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="py-16 px-6 bg-white text-black scroll-mt-28"
    >
      {/* Section heading for Story */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">Story</span>
      </SectionHeading>

      {/* Paragraph about the project story */}
      <p className="mb-3 font-maven">
        This is where you can describe the Abajora project in detail. Explain the inspiration, goals, and what makes this project unique. Our aim was to create something that resonates deeply with our audience, blending creativity with innovation.
      </p>

      {/* Another paragraph with more details */}
      <p className="font-maven">
        Through this project, we sought to push the boundaries of visual storytelling. By combining the latest technology with our team's artistic expertise, we were able to bring the Abajora vision to life, ensuring that every detail was meticulously crafted to deliver a truly immersive experience.
      </p>
    </motion.section>
  );
};

// Export the StorySection component
export default StorySection;
