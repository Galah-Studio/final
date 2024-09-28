// components/abajoraSpotLight.tsx

"use client";

import Image from 'next/image';
import { useSectionInView } from "@/lib/hooks";
import { useThemeContext } from "@/context/theme-context";

const AbajoraSpotLight = () => {
  const { ref } = useSectionInView("SpotLight", 0.25);
  const { theme } = useThemeContext();

  // Define gradient based on theme
  const gradientColor = theme === "light" ? "255, 255, 255" : "0, 0, 0";

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
          className="absolute top-0 left-0 w-full h-full z-10"
          style={{
            background: `linear-gradient(to bottom, rgba(${gradientColor}, 0) 0%, rgba(${gradientColor}, 1) 100%)`,
          }}
        ></div>

        {/* Title */}
        <h1
          className={`absolute bottom-8 w-full text-center text-4xl font-comfortaa z-20 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          The Title Goes Here
        </h1>
      </div>
    </section>
  );
};

export default AbajoraSpotLight;
