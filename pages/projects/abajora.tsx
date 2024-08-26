import React from "react";
import { Intro } from "@/components"; // Import the Intro component

// Simple Header Component
function Header() {
  return <h1 style={{ color: "black", fontSize: "2rem" }}>Hello, Abajora!</h1>;
}

// Main Abajora Component
export default function Abajora() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", backgroundColor: "white" }}>
      <Header />
      <Intro /> {/* Reintroduce the Intro component */}
      <div style={{ width: "200px", height: "200px", backgroundColor: "red", borderRadius: "50%" }}></div>
    </main>
  );
}
