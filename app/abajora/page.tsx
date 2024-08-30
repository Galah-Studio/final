// app/abajora/page.tsx

"use client"; // Ensure this runs on the client-side

import abajoraCraftSection from "@/components/abajoraCraftSection"; // Correct import

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-dark text-white">
      <h1 className="text-4xl mb-4">Testing Single Component Import</h1>
      <abajoraCraftSection />
    </main>
  );
}
