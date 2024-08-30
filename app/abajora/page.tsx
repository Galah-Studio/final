"use client"; // Ensure this runs on the client-side

import { ActiveSectionContextProvider, useActiveSectionContext } from "@/context/active-section-context"; // Correct import

export default function Page() {
  return (
    <ActiveSectionContextProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom-dark text-white">
        <h1 className="text-4xl mb-4">Testing Context</h1>
        <DisplayValue />
      </div>
    </ActiveSectionContextProvider>
  );
}

// A simple component to display and update the context value
function DisplayValue() {
  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <div>
      <p>Current Active Section: {activeSection}</p>
 <button
  onClick={() => setActiveSection("Home")} // Replace with a valid section name
  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
>
  Change Active Section
</button>

    </div>
  );
}
