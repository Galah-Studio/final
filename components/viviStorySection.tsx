// components/viviStorySection.tsx

"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";

const ViviStorySection = () => {
  const { ref } = useSectionInView("Story", 0.25);

  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-3xl mx-auto leading-8 sm:mb-40 scroll-mt-28 bg-white dark:bg-custom-dark"
    >
      {/* Section Heading */}
      <SectionHeading>
        <span className="font-comfortaa text-[#00ADEF]">Our Story</span>
      </SectionHeading>

      {/* Temporary Content */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        This is a temporary story about the Vivi Water Company Ad Campaign. You can replace this text with the actual content later.
      </p>

      {/* Image */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/vivi/story_image.png" // Replace with the actual image path
          alt="Vivi Story Image"
          width={800}
          height={450}
          className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </motion.section>
  );
};

export default ViviStorySection;