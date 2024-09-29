// components/viviSpotLight.tsx

"use client";

import Image from 'next/image';
import { useSectionInView } from "@/lib/hooks";

const viviSpotLight = () => {
  const { ref } = useSectionInView("SpotLight", 0.25);

  return (
    <section
      ref={ref}
      id="spotlight"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Spotlight Container */}
      <div className="relative w-full h-full">
        {/* Image */}
        <Image
          src="/abj_full.png" // Ensure this path is correct
          alt="Spotlight"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        {/* Gradient Overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-gray-50 dark:to-black"
        ></div>

        {/* Title */}
        <h1
          className="absolute bottom-8 w-full text-center text-4xl font-comfortaa z-20 text-[#ff2b69]"
        >
          The Title Goes Here
        </h1>
      </div>
    </section>
  );
};

export default viviSpotLight;
