// components/abajora_craftsection.tsx

import { useThemeContext } from "@/context/theme-context";

const abajoraCraftSection = () => {
  const { theme } = useThemeContext();

  return (
    <section
      id="craft"
      className={`p-8 ${theme === "light" ? "bg-gray-100 text-black" : "bg-custom-dark text-white"}`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className={`font-comfortaa text-3xl mb-4 ${theme === "light" ? "text-gray-800" : "text-galah"}`}>
          Process
        </h2>
        <div className="mb-8">
          <h3 className="font-comfortaa text-2xl">Step Title</h3>
          <p className="font-maven text-lg">Explanation of this step in the process.</p>
        </div>
      </div>
    </section>
  );
};

export default AbajoraCraftSection;
