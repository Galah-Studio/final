// components/abajora_spotlight.tsx

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const AbajoraSpotLight = () => {
  return (
    <div className="relative">
      <div className="fixed top-1/2 right-4 flex flex-col items-center space-y-4 transform -translate-y-1/2">
        <FaXTwitter className="text-white text-3xl hover:text-pink-500 transition-colors duration-300" />
        <FaInstagram className="text-white text-3xl hover:text-pink-500 transition-colors duration-300" />
      </div>
    </div>
  );
};

export default AbajoraSpotLight;
