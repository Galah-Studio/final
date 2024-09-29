// components/viviToolsSection.tsx

"use client";

import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const viviToolsSection = () => {
  const { ref } = useSectionInView("Tools", 0.25);

  return (
    <section ref={ref} id="tools" className="scroll-mt-28 mb-28">
      <SectionHeading className="font-comfortaa text-[#ff2b69]">
        Our Tools
      </SectionHeading>
      {/* Tools section content */}
    </section>
  );
};

export default viviToolsSection;
