// components/abajoraSpotLight.tsx

import Image from "next/image";

const AbajoraSpotLight = () => {
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
      <Image
        src="/vivi_full.png"
        alt="Spotlight Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className="flex space-x-4 mb-10">
          <Image
            src="/path-to-galah-logo.png"
            alt="Galah Logo"
            width={100}
            height={100}
          />
          <Image
            src="/path-to-galah-logo.png" // Placeholder for Abajora logo
            alt="Placeholder Logo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="absolute bottom-10 text-white text-4xl font-bold">
          The Title Goes Here
        </h1>
      </div>
    </section>
  );
};

export default AbajoraSpotLight;
