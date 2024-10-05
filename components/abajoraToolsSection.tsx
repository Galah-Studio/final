// components/abajoraToolsSection.tsx

"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the tags data
const TAGS_DATA = [
  "Animation",
  "Motion Graphics",
  "3D Modeling",
  "Video Editing",
  "Visual Effects",
  "Storyboarding",
  "Rendering",
  "Blender",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "DaVinci Resolve",
  "Cinematic Videography",
  "Photography",
  "Color Grading",
  "Pre-Production",
  "Production",
  "Post-Production",
  "Creative Collaboration",
  "Artistic Exploration",
  "Brand Evolution",
  "Visual Storytelling",
  "Podcast Branding",
  "Lifelike Rendering",
  "Lighting and Texturing",
  "Emotional Resonance",
  "High-Quality Visuals",
];

// Shuffle the tags array to mix up the tags
const shuffledTags = TAGS_DATA.sort(() => Math.random() - 0.5);

// Define animation variants for the fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagger the delay for each tag item
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AbajoraToolsSection = () => {
  // Use the custom hook to determine when this section is in view
  const { ref } = useSectionInView("Tools", 0.25);

  return (
    <section ref={ref} id="tools" className="scroll-mt-28 mb-28">
      <SectionHeading className="font-comfortaa text-[#ff2b69]">
        Our Tools
      </SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 mt-8">
        {shuffledTags.map((tag, index) => (
          <motion.li
            key={`tag-${index}`}
            className="bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white rounded-md px-3.5 py-1.5 md:px-5 md:py-3 text-sm md:text-base"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            custom={index} // Assign a custom index for animation delay
          >
            {tag}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AbajoraToolsSection;
