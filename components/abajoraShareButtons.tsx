// components/abajoraShareButtons.tsx

import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
  return (
    <div className="fixed right-4 bottom-1/2 transform translate-y-1/2 z-30 flex flex-col space-y-4">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-pink-500 transition"
      >
        <FaXTwitter className="w-6 h-6" />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-gray-900 text-white rounded-full hover:bg-pink-500 transition"
      >
        <FaInstagram className="w-6 h-6" />
      </a>
    </div>
  );
};

export default AbajoraShareButtons;
