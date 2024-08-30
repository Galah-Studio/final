// components/abajora_projectheader.tsx

import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useThemeContext } from "@/context/theme-context";

const abajoraProjectHeader = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useThemeContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        className={`fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border ${
          theme === "light" ? "border-gray-300 bg-white" : "border-white border-opacity-40 bg-custom-dark"
        } bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full`}
      />
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap w-[22rem] items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {LINKS.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition font-maven",
                  {
                    "text-gray-800 dark:text-gray-400 hover:text-black dark:hover:text-gray-200": true,
                    "!text-black font-medium dark:!text-white": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className={`${
                      theme === "light" ? "bg-gray-300" : "bg-pink-200/50"
                    } rounded-full absolute inset-0 -z-10`}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default AbajoraProjectHeader;
