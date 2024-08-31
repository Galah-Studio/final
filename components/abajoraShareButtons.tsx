// components/abajoraShareButtons.tsx

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const AbajoraShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex flex-col space-y-4 fixed right-8 top-[50%] transform -translate-y-1/2 z-10">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white transition transform hover:scale-105"
        aria-label="Share on Twitter"
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white transition transform hover:scale-105"
        aria-label="Share on Instagram"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default AbajoraShareButtons;
