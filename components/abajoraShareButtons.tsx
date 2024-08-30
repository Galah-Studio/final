// components/abajora_sharebuttons.tsx

import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const abajoraShareButtons: React.FC<ShareButtonsProps> = ({ title, url, imageUrl }) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex space-x-4 mt-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${theme === "light" ? "text-black" : "text-white"}`}
      >
        <img src="/path/to/twitter-icon.svg" alt="Twitter" className="w-8 h-8" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${theme === "light" ? "text-black" : "text-white"}`}
      >
        <img src="/path/to/instagram-icon.svg" alt="Instagram" className="w-8 h-8" />
      </a>
    </div>
  );
};

export default abajoraShareButtons;
