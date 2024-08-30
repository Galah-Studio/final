"use client";

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const abajoraShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex justify-center mt-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-700 dark:bg-gray-800 flex items-center justify-center mx-2"
        style={{ width: '40px', height: '40px' }}
      >
        <FaXTwitter className="text-white" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-700 dark:bg-gray-800 flex items-center justify-center mx-2"
        style={{ width: '40px', height: '40px' }}
      >
        <FaInstagram className="text-white" />
      </a>
    </div>
  );
};

export default abajoraShareButtons;
