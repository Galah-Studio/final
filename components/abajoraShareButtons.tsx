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

  return (
    <div className="w-full flex justify-end mt-8">
      <div className="flex items-center space-x-4 mr-8">
        <a
          href={`https://x.com/share?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaXTwitter size={24} className="text-current" />
        </a>
        <a
          href={`https://www.instagram.com/?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaInstagram size={24} className="text-current" />
        </a>
      </div>
    </div>
  );
};

export default AbajoraShareButtons;
