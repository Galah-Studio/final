import React from "react";

// This is the main component for the Abajora project page
export default function Abajora() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white" }}>
      {/* Drawing a big red circle */}
      <div style={{ width: "200px", height: "200px", backgroundColor: "red", borderRadius: "50%" }}></div>
    </main>
  );
}
