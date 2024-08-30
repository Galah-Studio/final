// components/abajora_sharebuttons.tsx

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const abajoraShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  const { theme } = useThemeContext();

  return (
    <div className="fixed right-4 bottom-4 flex flex-col space-y-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-4 rounded-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <FaXTwitter className="w-8 h-8" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`p-4 rounded-full ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}
      >
        <FaInstagram className="w-8 h-8" />
      </a>
    </div>
  );
};

export default abajoraShareButtons;
