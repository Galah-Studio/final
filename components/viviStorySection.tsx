// components/ViviStorySection.tsx

"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";
import ReactCompareImage from "react-compare-image";

const ViviStorySection = () => {
  // Use the useSectionInView custom hook to track when the "Story" section is in view.
  const { ref } = useSectionInView("Story", 0.25);

  // Return the ViviStorySection, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-3xl mx-auto leading-8 sm:mb-40 scroll-mt-28 bg-gray-50 dark:bg-custom-dark"
    >
      {/* Section Heading */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">
          Vivi: Pure Refreshment
        </span>
      </SectionHeading>

      {/* Embed Image */}
      <div className="mt-12 mb-12 flex justify-center">
        <Image
          src="/vivi/vivi_03.png"
          alt="Vivi water bottles displayed elegantly"
          width={800}
          height={450}
          className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* First Paragraph */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        Vivi is a captivating water company that embodies purity and refreshment
        in every drop. Nestled in the heart of Saudi Arabia, Vivi sources its
        water from deep, pristine wells in the Al-Muzahimiyah region, where
        nature’s finest resources meet advanced purification methods. The
        company prides itself on delivering water that is not only clean and
        refreshing but also embodies a commitment to sustainability and
        environmental stewardship. As consumers increasingly seek healthier
        hydration options, Vivi stands out as a beacon of quality, providing a
        trustworthy choice for those who value both taste and purity. With its
        dedication to excellence, Vivi is redefining the bottled water
        experience, making it an essential companion for everyday life.
      </p>

      {/* Embed Image */}
      <div className="mt-12 mb-12 flex justify-center">
        <Image
          src="/vivi/vivi_04.png"
          alt="Close-up of Vivi water bottle design"
          width={800}
          height={450}
          className="rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Second Paragraph */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        For the Vivi Ramadan campaign, our first major focus was the detailed
        creation of 3D models for their product line. Each bottle and item was
        meticulously crafted using advanced modeling techniques to ensure
        lifelike representation. Our artists paid close attention to the
        intricacies of the shapes, textures, and labels, capturing the unique
        characteristics of each product. This level of detail not only
        highlighted the quality of Vivi’s offerings but also set the stage for
        high-quality renders that would be used across various marketing
        platforms.
      </p>


      {/* Image Comparison Slider */}
<div className="mt-12 mb-12 flex justify-center">
  <div className="w-[800px] h-[450px]">
    <ReactCompareImage
      leftImage="/vivi/vivi_01.png"
      rightImage="/vivi/vivi_02.png"
      sliderLineColor="#ff2b69"
      sliderPositionPercentage={0.5}
      style={{ width: '100%', height: '100%' }}
    />
  </div>
</div>

      {/* Remaining Paragraphs */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        We also pre-produced a vibrant 2D animated commercial for Vivi, focusing
        on creating a compelling narrative that effectively showcased their
        brand. This pre-production phase involved collaborative brainstorming
        sessions to explore various themes and concepts that would resonate with
        the audience. Throughout this process, we crafted an engaging script
        that emphasized the essence of the brand, ensuring that the dialogue and
        visuals aligned seamlessly. Additionally, we dedicated time to character
        design and storyboarding, meticulously planning each scene to enhance
        the overall message of the animation. This thorough preparation laid a
        solid foundation for an animation that not only draws viewers in but
        also strengthens their connection with the Vivi brand, reflecting its
        commitment to quality and refreshment.
      </p>
    </motion.section>
  );
};

export default ViviStorySection;
