// components/abajoraShareButtons.tsx

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const AbajoraShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  imageUrl,
}) => {
  const { theme } = useThemeContext();

  // Define button styles based on the theme
  const buttonStyles =
    theme === "light"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "bg-gray-700 text-gray-200 hover:bg-gray-600";

  return (
    <div className="w-full flex justify-end mt-8">
      <div className="flex flex-col items-center space-y-4 mr-4">
        <a
          href={`https://twitter.com/share?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 ${buttonStyles} shadow-md`}
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-200 ${buttonStyles} shadow-md`}
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default AbajoraShareButtons;
