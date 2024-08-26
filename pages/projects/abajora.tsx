// Minimal example: import only a basic component to ensure rendering.
import { Intro } from "@/components";

export default function Abajora() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* Add other components one by one here to test */}
    </main>
  );
}
