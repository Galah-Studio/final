// components/abajoraSpotLight.tsx

import Image from 'next/image';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import GalahLogo from '@/public/galah_logo.svg'; // Adjust the path to your logo file

const AbajoraSpotLight = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Spotlight Image */}
      <div className="relative w-full h-full">
        <Image
          src="/vivi_full.png" // Ensure this path is correct
          alt="Spotlight"
          layout="fill"
          objectFit="cover"
          className="z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        />
        
        {/* Logos */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <Image src={GalahLogo} alt="Galah Logo" width={100} height={100} className="mb-4" />
          <Image src={GalahLogo} alt="Abajora Logo" width={100} height={100} />
        </div>

        {/* Title */}
        <h1 className="absolute bottom-8 w-full text-center text-4xl font-bold text-white">
          The Title Goes Here
        </h1>
      </div>

    </section>
  );
};

export default AbajoraSpotLight;
