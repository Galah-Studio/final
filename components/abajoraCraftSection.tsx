// components/abajoraCraftSection.tsx

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

// Define the CraftBoxProps type based on the structure of the craft data.
type CraftBoxProps = {
  description: string;
  imageUrl: string;
  isEven: boolean;
};

// Define the CraftBox component for displaying individual boxes.
const CraftBox = ({ description, imageUrl, isEven }: CraftBoxProps) => {
  // Create a reference for the box element.
  const boxRef = useRef<HTMLElement>(null);

  // Use the useScroll hook to track scroll progress for animations.
  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["0 1", "1.33 1"],
  });

  // Define animations based on scroll progress.
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.article
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={boxRef}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="bg-gray-100 max-w-[42rem] sm:group-even:pl-8 border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[28rem] rounded-lg transition dark:bg-white/10">
        <div className={`pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${isEven ? "sm:pr-10" : "sm:pl-10"} ${isEven ? "sm:ml-[18rem]" : "sm:mr-[18rem]"}`}>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 font-maven">
            {description}
          </p>
        </div>

        <div className={`absolute hidden sm:block top-8 ${isEven ? "-left-40" : "-right-40"} w-[28.25rem] rounded-t-lg shadow-2xl`}>
          <Image
            src={imageUrl}
            alt="Craft Image"
            quality={95}
            width={452}
            height={280}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.article>
  );
};

// Define the AbajoraCraftSection component to display the boxes.
const AbajoraCraftSection = () => {
  // Use the 'useSectionInView' hook to track section visibility.
  const { ref } = useSectionInView("Craft", 0.25); // Lowered threshold

  // Craft data
  const CRAFT_DATA = [
    {
      description:
        "The bed lamps designs showcases the artistry and creativity involved in its creation. The smooth, flowing lines evoke a sense of elegance, while the soft glow creates an inviting atmosphere. Behind the scenes, our team utilized advanced techniques in modeling and rendering to achieve a lifelike appearance. The careful attention to detail in the texture and lighting helps the lamp not only look realistic but also resonate emotionally with viewers. This combination of artistry and technical skill enhances the visual narrative of the logo reveal, reinforcing the deep connection between the Abajora brand and its dedicated listeners.",
      imageUrl: "/abajora/abj_03.png",
    },
    {
      description:
        "To elevate the narrative, we seamlessly integrated dynamic live-action footage, enriching the visual storytelling and enhancing audience engagement. This integration serves as a bridge that connects the podcast’s imaginative essence with its real-world impact, allowing viewers to immerse themselves in the Abajora experience.",
      imageUrl: "/abajora/abj_04.png",
    },
    {
      description:
        "The culmination of our efforts resulted in a breathtaking motion graphics segment, where diverse styles and techniques harmoniously converge. Each carefully curated element reflects our studio’s relentless pursuit of excellence, resulting in a captivating video that encapsulates Abajora’s spirit—a podcast that enlightens and inspires.",
      imageUrl: "/abajora/abj_05.png",
    },
    {
      description:
        "This project not only showcases the evolution of Abajora’s brand but also exemplifies our studio’s dedication to creating high-quality visual experiences that resonate deeply. The creative collaboration and artistic exploration throughout this journey have been exhilarating, celebrating the rich narratives that Lubna and her team continue to share with the world.",
      imageUrl: "/abajora/abj_06.png",
    },
  ];

  return (
  );
};

export default AbajoraCraftSection;
