// components/experience.tsx

"use client";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { EXPERIENCES_DATA } from "@/constants";
import { useThemeContext } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";

import SectionHeading from "./section-heading";

import "react-vertical-timeline-component/style.min.css";

// Define the Experience component.
const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.25); // Lowered threshold
  const { theme } = useThemeContext();

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      {/* Use Comfortaa for SectionHeading */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">Our Experience</span>
      </SectionHeading>

      <VerticalTimeline lineColor="">
        {EXPERIENCES_DATA.map((experience, i) => (
          <VerticalTimelineElement
            key={`experience-${i}`}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background:
                theme === "light" ? "#fff" : "rgba(255, 255, 255, 0.15)",
              fontSize: "1.5rem",
            }}
          >
            {/* Use Maven Pro for the experience content */}
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 font-maven">
              <b>{experience.title}</b> {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

// Export the Experience component.
export default Experience;
