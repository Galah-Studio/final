// app/abajora/page.tsx

"use client"; // Ensure this runs on the client-side

import AbajoraCraftSection from "@/components/abajoraCraftSection"; // Correct import with capitalized name

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-dark text-white">
      <h1 className="text-4xl mb-4">Testing Single Component Import</h1>
      <AbajoraCraftSection /> {/* Capitalized component name */}
    </main>
  );
}
