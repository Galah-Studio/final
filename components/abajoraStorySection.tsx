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
        Abajora is not just a podcast; it is a cultural phenomenon that resonates throughout Saudi Arabia and the broader Arabic-speaking world. Hosted by the remarkable Lubna Al Khamis, she is celebrated for her exceptional storytelling and dedication to enriching Arabic content. Lubna’s approach blends profound narratives with engaging discussions, elevating her audience’s listening experience and reflecting a deep appreciation for the Arabic language and its cultural significance .

        <b className="font-medium">In our latest collaboration with Abajora, we had the privilege of crafting a visually stunning logo reveal video, celebrating the podcast’s new identity. This project signifies an important milestone in our ongoing partnership, building on the creative synergy established in our previous work together.
      </p>

      {/* Display another paragraph about the studio's philosophy and approach. */}
      <p className="font-maven text-center">
        Our talented team approached this project with an unwavering commitment to artistry and innovation. We envisioned the logos as elegant lamps, symbolizing enlightenment and transformation. Through meticulous 3D modeling, we brought these logos to life, ensuring that the reveal resonated with sophistication and style.
      </p>

      <p className="font-maven text-center">
        To elevate the narrative, we seamlessly integrated dynamic live-action footage, enriching the visual storytelling and enhancing audience engagement. This integration serves as a bridge that connects the podcast’s imaginative essence with its real-world impact, allowing viewers to immerse themselves in the Abajora experience.
      </p>

      <p className="font-maven text-center">
        The culmination of our efforts culminated in a breathtaking motion graphics segment, where diverse styles and techniques harmoniously converge. Each carefully curated element reflects our studio’s relentless pursuit of excellence, resulting in a captivating video that encapsulates Abajora’s spirit—a podcast that enlightens and inspires.
      </p>

      <p className="font-maven text-center">
        This project not only showcases the evolution of Abajora’s brand but also exemplifies our studio’s dedication to creating high-quality visual experiences that resonate deeply. The creative collaboration and artistic exploration throughout this journey have been exhilarating, celebrating the rich narratives that Lubna and her team continue to share with the world.
      </p>



    </motion.section>
  );
};

export default AbajoraStorySection;
