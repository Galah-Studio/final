// components/ViviCraftSection.tsx

"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import { useSectionInView } from "@/lib/hooks";

type CraftBoxProps = {
  description: string;
  imageUrl: string;
  isEven: boolean;
};

const CraftBox = ({ description, imageUrl, isEven }: CraftBoxProps) => {
  const boxRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: boxRef,
    offset: ["0 1", "1.33 1"],
  });

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
      <div className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden relative sm:min-h-[28rem] rounded-lg transition dark:bg-white/10">
        {/* Text */}
        <div
          className={`pt-4 pb-7 px-5 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${
            isEven
              ? "sm:pr-10 sm:ml-[18rem] items-end text-right"
              : "sm:pl-10 sm:mr-[18rem] items-start text-left"
          }`}
        >
          <p className="leading-relaxed text-gray-700 dark:text-white/70 font-maven">
            {description}
          </p>
        </div>

        {/* Image */}
        <div
          className={`absolute top-0 bottom-0 hidden sm:block ${
            isEven ? "-left-40" : "-right-40"
          } w-[28.25rem]`}
        >
          <Image
            src={imageUrl}
            alt="Craft Image"
            quality={95}
            fill
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.article>
  );
};

const ViviCraftSection = () => {
  const { ref } = useSectionInView("Craft", 0.25);

  const CRAFT_DATA = [
    {
      description:
        "Our journey with Vivi began by meticulously crafting 3D models of their entire product line. Each bottle was designed with utmost precision, reflecting Vivi’s unwavering commitment to purity and refreshment. These models not only capture the sleek aesthetics of Vivi’s branding but also emphasize the distinctive features that set the brand apart in the competitive beverage market. The careful attention to detail in the design process ensures that each product resonates with consumers, highlighting the quality and innovation that Vivi represents.",
      imageUrl: "/vivi/vivi_05.png",
    },
    {
      description:
        "Our Ramadan campaign was crafted for seamless performance across vertical and horizontal platforms. We focused on thoughtful framing and composition to enhance viewer experience. For YouTube, immersive scenes were designed in a wide aspect ratio, while the vertical format for Instagram and Snapchat ensured key elements were prominent and engaging for mobile users.",
      imageUrl: "/vivi/vivi_06.png",
    },
    {
      description:
        "We developed detailed character designs and scene concepts specifically aimed at resonating with a diverse audience, carefully considering various cultural and emotional touchpoints. Each element was meticulously crafted to ensure alignment with Vivi’s core values and identity, reflecting the brand’s commitment to quality and refreshment. This thorough groundwork not only laid the foundation for a cohesive narrative but also created a rich tapestry that captures the essence of the brand. By prioritizing these aspects, we aimed to create a compelling story that engages viewers on multiple levels, fostering a deeper connection with the Vivi brand and its mission.",
      imageUrl: "/vivi/vivi_07.png",
    },
    {
      description:
        "Collaborating closely with Vivi allowed us to ensure that every aspect of the project was in perfect harmony with their brand values. From the initial concept phase through to the final production, our unwavering focus was on creating content that not only looks visually impressive but also effectively narrates Vivi’s commitment to delivering pure refreshment. We engaged in extensive discussions and feedback sessions with the Vivi team to align our creative direction with their vision. This collaborative approach enabled us to weave the brand’s essence into every detail, resulting in a cohesive narrative that highlights Vivi’s dedication to quality and sustainability.",
      imageUrl: "/vivi/vivi_08.png",
    },
  ];

  return (
    <section
      ref={ref}
      id="craft"
      className="scroll-mt-28 mb-28 bg-gray-50 dark:bg-custom-dark"
    >
      <div>
        {CRAFT_DATA.map((item, i) => (
          <CraftBox
            key={`craft-${i}`}
            {...item}
            isEven={i % 2 === 0} // Ensures the first box has isEven === true
          />
        ))}
      </div>
    </section>
  );
};

export default ViviCraftSection;
