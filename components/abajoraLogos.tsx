// components/AbajoraLogos.tsx

"use client";

import React from "react";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const AbajoraLogos = () => {
  const { ref } = useSectionInView("Clients", 0.25);
  return (
    <div
      ref={ref}
      id="clients"
      className="flex justify-center space-x-44 items-center mt-32 mb-36 bg-gray-50 dark:bg-black transition-colors duration-300"
    >
      {/* First SVG Logo */}
      <div className="relative text-black dark:text-white">
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386 382.61"
          style={{ width: "150px", height: "150px" }}
        >
          <defs>
            <style>{`.b{fill: currentColor;}`}</style>
          </defs>
          <g id="Layer_5">
            <path
              d="M374.37 195.11c2.86 0 5.38-1.36 6.99-3.46a8.61 8.61 0 0 0 1.79-5.84L372.19 20.5c-.25-4.64-4.11-8.29-8.76-8.29H22.07c-4.66 0-8.52 3.65-8.76 8.29L2.34 185.82c-.08 1.26.13 2.46.55 3.57a8.77 8.77 0 0 0 8.23 5.73"
              className="cls-1"
            />
            <path
              d="m200.7 372.75 80.05-80.05c4.37-4.37 4.37-11.52 0-15.89l-80.05-80.05c-4.37-4.37-11.52-4.37-15.89 0l-80.05 80.05c-4.37 4.37-4.37 11.52 0 15.89l80.05 80.05V196.83l-80.05 80.05c-4.37 4.37-4.37 11.52 0 15.89l80.05 80.05c4.37 4.37 11.52 4.37 15.89 0l80.05-80.05c4.37-4.37 4.37-11.52 0-15.89l-80.05-80.05"
              className="cls-1"
            />
          </g>
        </svg>
      </div>

      {/* Second SVG Logo */}
      <div className="relative text-black dark:text-white">
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 386 382.61"
          style={{ width: "150px", height: "150px" }}
        >
          <defs>
            <style>{`.b{fill: currentColor;}`}</style>
          </defs>
          <path
            className="b"
            d="M61.6,287.74c-3.95.99-10.35-6.83-13.04-12.3..."
          />
          {/* Add other paths or elements as necessary */}
        </svg>
      </div>
    </div>
  );
};

export default AbajoraLogos;
