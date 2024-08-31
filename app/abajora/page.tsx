// app/abajora/page.tsx

"use client";

import AbajoraLogos from "@/components/abajoraLogos";
import AbajoraSpotLight from "@/components/abajoraSpotLight";
import AbajoraStorySection from "@/components/abajoraStorySection";
import AbajoraCraftSection from "@/components/abajoraCraftSection";
import AbajoraToolsSection from "@/components/abajoraToolsSection";
import AbajoraShareButtons from "@/components/abajoraShareButtons";

export default function Page() {
  return (
    <main className="bg-custom-dark text-white relative">
      <div className="absolute inset-0">
        <img
          src="/vivi_full.png"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Logos Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <AbajoraLogos />
        <h1 className="text-white text-center mt-8 text-3xl md:text-5xl font-bold">
          The Title Goes Here
        </h1>
      </div>

      {/* Share Buttons */}
      <div className="relative z-10">
        <AbajoraSpotLight />
      </div>

      {/* Story Section */}
      <section className="relative z-10" id="story">
        <AbajoraStorySection />
      </section>

      {/* Craft Section */}
      <section className="relative z-10" id="craft">
        <AbajoraCraftSection />
      </section>

      {/* Tools Section */}
      <section className="relative z-10" id="tools">
        <AbajoraToolsSection />
      </section>

      {/* Share Buttons Fixed */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-20">
        <AbajoraShareButtons />
      </div>
    </main>
  );
}
