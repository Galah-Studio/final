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
        "Our journey with Vivi began by meticulously crafting 3D models of their entire product line. Each bottle was designed with precision, capturing the essence of Vivi's commitment to purity and refreshment. The models highlight the sleek design and branding that make Vivi stand out in the market.",
      imageUrl: "/vivi/vivi_05.png",
    },
    {
      description:
        "Our Ramadan campaign was crafted for seamless performance across vertical and horizontal platforms. We focused on thoughtful framing and composition to enhance viewer experience. For YouTube, immersive scenes were designed in a wide aspect ratio, while the vertical format for Instagram and Snapchat ensured key elements were prominent and engaging for mobile users.",
      imageUrl: "/vivi/vivi_06.png",
    },
    {
      description:
        "we developed character designs and scene concepts aimed at resonating with a diverse audience, ensuring that each element aligned with Vivi’s core values and identity. This thorough groundwork laid the foundation for a cohesive narrative that captures the essence of the brand.",
      imageUrl: "/vivi/vivi_07.png",
    },
    {
      description:
        "Collaborating closely with Vivi, we ensured that every aspect of the project aligned with their brand values. From initial concept to final production, our focus was on creating content that not only looks impressive but also tells the story of Vivi's dedication to delivering pure refreshment.",
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
