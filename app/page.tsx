"use client";

import { useThemeContext } from "@/context/theme-context";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Intro } from "@/components/intro";
import { Projects } from "@/components/projects";
import { SectionDivider } from "@/components/section-divider";
import { Skills } from "@/components/skills";

export default function Home() {
  const { theme } = useThemeContext();

  return (
    <main className={`flex flex-col items-center px-4 ${theme === "light" ? "light-theme" : "dark-theme"}`}>
      {/* The Intro component is displayed at the top of the page. */}
      <Intro />

      {/* A Vertical line or divider separating sections on the page. */}
      <SectionDivider />

      {/* The About component provides information about the author or user. */}
      <About />

      {/* The Projects component displays information about projects. */}
      <Projects />

      {/* The Skills component shows the skills of the author or user. */}
      <Skills />

      {/* The Experience component displays work or education experience. */}
      <Experience />

      {/* The Contact component allows users to get in touch. */}
      <Contact />
    </main>
  );
}
