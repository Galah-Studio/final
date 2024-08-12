"use client";

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

// Embedded SVG as a component
const BirdLogoSVG = () => {
  return (
    <svg
      id="a"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 386 382.61"
      style={{ width: '3000px', height: '3000px' }} // Adjusted size for better fit
    >
      <defs>
        <style>
          {`.b{fill:#ff2b69;}`}
        </style>
      </defs>
      <path
        className="b"
        d="M61.6,287.74c-3.95.99-10.35-6.83-13.04-12.3-11.15-22.59-17.41-47.56-17.41-72.93,0-67.6,42.35-126.63,104.92-151.08,7.98-3.12,6.76,1.02,6.48,3.1s-.48,5.33-3.01,6.28c-59.05,21.96-98.39,78.3-98.39,141.7,0,23.79,5.04,47.64,16.32,68.39,5.97,10.99,9.28,15.56,4.13,16.83h0Z"
      />
      <path
        className="b"
        d="M131.51,351.81c-15.74-6.53-30.33-15.26-43.38-26.33-2.15-1.83-9.58-8.15-4.1-9.42s8.52.05,10.58,1.8c12.23,10.38,25.93,18.54,40.67,24.69q10.85,4.52,10.85,9.23c0,4.7-3.34,4.71-14.61.03Z"
      />
      <path
        className="b"
        d="M219.91,356.11c.42-4.38,1.88-4.61,12.54-7.82,37.02-11.14,69.47-34.7,89.48-67.97,1.39-2.31,2.07-3.73,7.16-4.78,5.46-1.13,6.21,2.07,1.42,9.93-21.33,35.46-55.64,61.58-95.41,72.46-6.62,1.81-15.9,5.56-15.19-1.82Z"
      />
      <path
        className="b"
        d="M348.32,249.13c4.84-15.13,7-30.76,7-46.61,0-67.6-43.63-128.51-104.92-152.08-17.75-6.83-18.51-6.85-20.77-5.16-1.75,1.32,1.82,7.63,5.23,8.74,10.7,3.48,10.38,4.29,12.91,5.24,59.05,21.96,97.55,79.86,97.55,143.25,0,14.62-1.9,29.26-5.99,43.2-.51,1.75-3.7,8.51-.59,9.92,5.31,2.41,8.5-3.13,9.58-6.51Z"
      />
      <line className="b" x1="339.33" y1="245.69" x2="349.01" y2="246.79" />
      <path
        className="b"
        d="M385.46,263.65c2.13-4.22-2.13-4.3-10.25-3.88-26.2,1.35-45.17,2.04-64.57.25-4.27-.39-15.13-5.94-20.22-9.46-2.52-1.74,3.06-5.84,8.21-6.64,8.58-1.33,14.21-.56,25.32-3.35,10.69-5.87,8.65-6.43,4.37-7.86-13.49,2.68-38.92.86-43.81,6.13-9.09,9.79-1.67,9.01-22.59,6.21-13.2-1.76-6.4-2.76-22.31,1.62-5.65,1.56-5.71,1.92-3.77-3.65,6.13-17.56,13.88-40.13,14.58-46.43,0,0,0,0,0,0,9.17-43.63.15-57.9-23.19-76.99-2.53-2.07-2.37-3.54-3.18-6.36-2.12-7.42-3.18-22.27-4.24-37.12h0c-4.4-.52-4.23,2.11-4.23,3.17,0,9.76,1.96,23.33,2.01,33.09.04,7.37-.64,10.16,5.42,14.64,24.4,18.03,24.4,29.7,19.09,67.88-.6,4.32-13.84,43.83-21,55.57-.86,1.41-2.16,2.47-3.72,2.99-8.09,2.72-48.62,16.07-56.85,18.74-.71.23-1.49-.03-1.89-.66-8.31-12.96-11.6-33.63-13.12-49.27-4.68-48.02-1.9-59.82,26.2-95.37,8.33-10.53,2.49-27.46-13.42-29.59-6.14-.82-4.73-5.54-3.85-10.4,2.64-14.73,2.95-29.58,3.61-44.53.42-9.6,2.37-29.99,5.36-29.95,2.31.03,3.73,38.22,5.49,38.22,2.49,0,7.42-15.91,9.55-15.91s-1.06,21.21,0,21.21,3.39-3.63,4.24-5.3c6.79-13.35,9.87-8.33,25.02-1.01,4.77,2.3,6.97,4.5,3.62,10.56-1.15,2.07,6.36-1.06,6.36,1.06h0c-1.2,1.95-2.12,9.47-2.12,10.61,0,1.06,2.12,2.12,4.37,1.1h0c.93-5.34,3.62-10.91,4.11-13.82h0c-1.55-1.33-5.3-3.19-5.3-10.61,0-1.06-23.25-12.73-29.7-12.73-1.06,0-3.17,2.11-4.9,4.68h-.01c-.44-7.44,1.72-20.57-.79-21.96h0c-3.84,3.5-7.02,9.85-12.31,18.32h-.02C169.52,25.43,167.85-.24,163.96,0h0c-7.78,5.06-11.53,37.34-12.4,52.37-.85,14.56-2.14,29.08-4.42,43.52-1.12,7.07-1.05,8.02,4.8,5.68,5.3-2.12,23.38,9.75,16.21,19.54-6.67,9.1-17.18,22.2-25.02,33.84-4.9,7.27-7.43,15.61-7.06,24.09,1.02,23.07,2.03,46.17,5.75,69,.41,2.52,2.62,17.03,3.86,23.47.49,2.56-.91,6.09-3.34,7.03-12.62,4.88-50.11,16.99-62.27,17.03-25.62.08-44.97,5.02-68.88,13.66-15.25,11.24-11.47,11.99-8.48,16.22,3.3,4.66,24.05-5.86,33.54-9.25,21.38-7.63,55.41-8.47,55.41-8.47,14.49-3.71,50.36-15.07,57.91-17.67,4.85-1.67,5.27,3.69,5.56,13.3v30.5c-.01,16.97-5.26,42.45-1.07,44.55,6.36,3.18,26.52,5.3,26.54,2.32,1.03-4.44-15.94-.2-21.3-8.24-1.53-2.29,3.1-36.86,4.04-55.32.41-8.01-.68-30.06,1.68-32.19s32.39-13.63,47.42-17.91c.58-.17,1.24-.32,1.94-.46,2.07-.41,3.78,1.63,2.99,3.59-4.24,10.57-8.58,21.14-12.26,31.7-.52,1.49-.88,3.47-.98,5.57.11,1.22-.24,35.94-.24,42.3,0,7.8-.36,22.77-1.06,24.4-.99,2.29-8.12,4.98-9.55,2.12-1.06-2.12-1.06-7.42-1.06-10.61s-.13-10.61-2.12-10.61c-3.18,0-1.82,15.93-2.12,18.03-1.06,7.42-6.36,4.24-6.36,7.42,0,1.1,1.13,1.94,11.67,2.12,7.5.13,17.03-.42,16.97-11.67-.05-9.86,1.06-61.52,1.06-63.64,0-5.75,8.69-25.3,16.34-41.25,1.43-2.98,5.66-6.31,7.29-7.29,2.45-1.46,10.35-7.13,32.99-2.47s31.82,14.41,37.75,14.63c23.01.85,38.47.18,47.21.18,4.1,0,29.28-1.01,32.55-7.51Z"
      />
      <path
        className="b"
        d="M175.57,75.43c-4.01.86-5.52,4.72-5.52,5.9,0,2.36,9.66,0,12.41-3.54,1.27-1.63-1.38-3.54-6.9-2.36Z"
      />
    </svg>
  );
};

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <BirdLogoSVG />
          <span className="absolute text-2xl bottom-0 right-0">👋</span>
        </div>
      </div>

      <h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl font-comfortaa"
      >
        <b className="font-bold">
          Hi, We&apos;re{" "}
          <span
            className="text-[#ff2b69] glow-effect font-comfortaa"
            style={{
              textShadow: "0 0 120px #ff2b69, 0 0 40px #ff2b69",
            }}
          >
            {OWNER_NAME.split(" ")[0]}
          </span>
          .
        </b>{" "}
        We specialize in <b className="font-bold">animation shows and commercials</b>, bringing stories to life with{" "}
        <b className="font-bold">passion and creativity</b>. Our expertise also extends to{" "}
        <u className="underline">producing live-action commercials</u>.
      </h1>

      <div
        className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2 justify-center items-center font-maven"
      >
        <div className="flex gap-2 flex-col sm:flex-row text-lg font-medium">
          <Link
            href="#contact"
            className="group bg-galah text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-galah active:scale-95 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact us
            <BsArrowRight className="opacity-70 group-hover:translate-x-0.5 transition" />
          </Link>

          <Link
            href={EXTRA_LINKS.resume}
            target="_blank"
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-95 transition borderBlack dark:bg-white/10"
          >
            Our Resume
            <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
          </Link>
        </div>
        <div className="flex gap-2 text-lg font-medium">
          <Link
            href={EXTRA_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="Linkedin"
            title="Instagram"
          >
            <FaInstagram />
          </Link>

          <Link
            href={EXTRA_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.1] hover:scale-[1.1] active:scale-95 hover:text-gray-950 transition borderBlack dark:bg-white/10 dark:text-white/60"
            aria-label="GitHub"
            title="X"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
