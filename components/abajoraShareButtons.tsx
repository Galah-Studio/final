// components/abajoraShareButtons.tsx

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const AbajoraShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  const { theme } = useThemeContext();

  return (
    <div className="fixed right-4 bottom-20 flex flex-col items-center space-y-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 flex items-center justify-center rounded-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} shadow-md`}
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-12 h-12 flex items-center justify-center rounded-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"} shadow-md`}
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default AbajoraShareButtons;
