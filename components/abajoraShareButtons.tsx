// components/abajora_sharebuttons.tsx

import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const AbajoraShareButtons = () => {
  return (
    <div className="flex flex-col space-y-4">
      <a
        href="https://twitter.com/share?url=your-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-pink-500 transition-colors duration-300"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.instagram.com/?url=your-url"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-3xl hover:text-pink-500 transition-colors duration-300"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default AbajoraShareButtons;
