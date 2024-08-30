// components/abajoraStorySection.tsx

import { useThemeContext } from "@/context/theme-context";

const AbajoraStorySection = () => {
  const { theme } = useThemeContext();

  return (
    <section
      id="story"
      className={`text-center py-16 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-custom-dark text-white"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4">About the Project</h2>
      <p className="max-w-2xl mx-auto text-lg">
        This is where you can describe the Abajora project in detail. Explain
        the inspiration, goals, and what makes this project unique.
      </p>
    </section>
  );
};

export default AbajoraStorySection;
