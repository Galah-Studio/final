// components/viviCraftSection.tsx

"use client";

import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

const viviCraftSection = () => {
  const { ref } = useSectionInView("Craft", 0.25);
  const { theme } = useThemeContext();

  return (
    <section
      ref={ref}
      id="craft"
      className="bg-gray-50 dark:bg-black text-black bg-bg-black text-white"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeading>
          <span className="font-comfortaa text-[#ff2b69]">Our Craft</span>
        </SectionHeading>
        {/* Craft section content */}
      </div>
    </section>
  );
};

export default viviCraftSection;
