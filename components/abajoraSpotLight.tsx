// components/abajoraSpotLight.tsx

"use client";

import Image from 'next/image';
import { useSectionInView } from "@/lib/hooks";

const AbajoraSpotLight = () => {
  const { ref } = useSectionInView("SpotLight", 0.25);

  return (
    <section ref={ref} id="spotlight" className="relative w-full h-screen overflow-hidden">
      {/* Spotlight Image */}
      <div className="relative w-full h-full">
        <Image
          src="/abj_full.png" // Ensure this path is correct
          alt="Spotlight"
          layout="fill"
          objectFit="cover"
          className="z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        />

        {/* Title */}
        <h1 className="absolute bottom-8 w-full text-center text-4xl font-bold text-white">
          The Title Goes Here
        </h1>
      </div>
    </section>
  );
};

export default AbajoraSpotLight;
