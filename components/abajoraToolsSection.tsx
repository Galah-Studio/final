// components/abajora_toolssection.tsx

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading"; // Corrected import path

const AbajoraToolsSection = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading className="font-comfortaa text-[#ff2b69]">
        Our Projects
      </SectionHeading>
      {/* Add your tools section content here */}
    </section>
  );
};

export default AbajoraToolsSection;
