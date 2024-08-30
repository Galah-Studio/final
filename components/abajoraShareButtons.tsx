"use client";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useThemeContext } from "@/context/theme-context";

interface ShareButtonsProps {
  title: string;
  url: string;
  imageUrl: string;
}

const abajoraShareButtons: React.FC<ShareButtonsProps> = ({
  title,
  url,
  imageUrl,
}) => {
  const { theme } = useThemeContext();

  return (
    <div className="flex justify-center gap-4 mt-6">
      <a
        href={`https://twitter.com/share?url=${url}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
        className={`p-4 text-gray-700 flex items-center justify-center rounded-full outline-none transition ${
          theme === "light"
            ? "bg-white hover:bg-gray-100"
            : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
        }`}
        style={{
          backgroundColor: "#ff2b69",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "white",
        }}
      >
        <FaXTwitter size={24} />
      </a>
      <a
        href={`https://www.instagram.com/?url=${url}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Instagram"
        className={`p-4 text-gray-700 flex items-center justify-center rounded-full outline-none transition ${
          theme === "light"
            ? "bg-white hover:bg-gray-100"
            : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
        }`}
        style={{
          backgroundColor: "#ff2b69",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          color: "white",
        }}
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default abajoraShareButtons;
