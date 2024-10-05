"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the skills data
const SKILLS_DATA = [
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

// Shuffle the skills array to mix up the skills
const shuffledSkills = SKILLS_DATA.sort(() => Math.random() - 0.5);

// Define animation variants for the fade-in effect
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index, // Stagger the delay for each skill item
    },
  }),
};

const AbajoraToolsSection = () => {
  // Use the custom hook to determine when this section is in view
  const { ref } = useSectionInView("Tools");

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-8 text-center sm:mb-40"
    >
      <SectionHeading className="font-comfortaa text-[#ff2b69]">
        Our Skills
      </SectionHeading>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 font-maven">
        {shuffledSkills.map((skill, i) => (
          <motion.li
            id="skills"
            key={`skill-${i}`}
            className="bg-white borderBlack max-sm:text-sm rounded-md md:rounded-xl px-3.5 py-1.5 md:px-5 md:py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={i} // Assign a custom index for animation delay
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default AbajoraToolsSection;
