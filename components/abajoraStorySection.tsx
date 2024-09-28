// components/abajoraStorySection.tsx

"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants"; // Import OWNER_NAME
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the AbajoraStorySection component.
const AbajoraStorySection = () => {
  // Use the useSectionInView custom hook to track when the "Story" section is in view.
  const { ref } = useSectionInView("Story", 0.25);

  // Return the AbajoraStorySection, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center mx-auto leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About Us." */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">About Us</span>
      </SectionHeading>

      {/* Display a paragraph with information about Galah Studio's background and focus. */}
      <p className="mb-3 font-maven text-center">
        <span
          className="font-comfortaa text-[#ff2b69] glow-effect"
          style={{
            textShadow:
              "0 0 80px #ff2b69, 0 0 10px #ff2b69, 0 0 12px #ff2b69",
          }}
        >
          {OWNER_NAME.split(" ")[0]} Studio
        </span>{" "}
        is dedicated to crafting exquisite{" "}
        <b className="font-medium">animation shows and commercials</b>. Our
        team of experienced filmmakers and animators brings stories to life
        with creativity and passion. We also specialize in producing
        high-quality{" "}
        <b className="font-medium">live-action commercials</b>, ensuring
        top-notch visual storytelling in every project.
      </p>

      {/* Display another paragraph about the studio's philosophy and approach. */}
      <p className="font-maven text-center">
        Our focus is on delivering visually stunning and emotionally engaging
        content. We believe in the power of storytelling and strive to create
        works that resonate with audiences. Whether it's an animation show or
        a live-action commercial, our goal is to captivate and inspire.
      </p>
    </motion.section>
  );
};

export default AbajoraStorySection;
