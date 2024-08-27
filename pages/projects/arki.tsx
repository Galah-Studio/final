import React from 'react';

// This is the main component for the ARKI project page
export default function Arki() {
  return (
    <main className="bg-custom-dark text-white min-h-screen p-8">
      {/* Page title */}
      <h1 className="text-4xl font-comfortaa mb-8">ARKI Tectonica Celebration Ceremony</h1>

      {/* About section */}
      <section className="mb-8">
        <h2 className="text-3xl font-comfortaa text-galah mb-4">About the Project</h2>
        <p className="font-maven text-lg leading-relaxed">
          Documented a prestigious celebration ceremony for ARKI Tectonica with cinematic precision. Utilizing our high-end cinematic kit, we captured and edited breathtaking visuals that highlighted the event's grandeur and significance.
        </p>
      </section>

      {/* Image Spotlight */}
      <section className="flex justify-center mb-8">
        <img src="/arki.png" alt="ARKI Ceremony" className="rounded-lg shadow-lg max-w-full" />
      </section>

      {/* Tools Used section */}
      <section>
        <h2 className="text-3xl font-comfortaa text-galah mb-4">Tools Used</h2>
        <ul className="list-disc list-inside font-maven text-lg">
          <li>DaVinci Resolve</li>
          <li>After Effects</li>
          <li>Premiere</li>
          <li>Photoshop</li>
          <li>Videography</li>
          <li>Photography</li>
        </ul>
      </section>
    </main>
  );
}
