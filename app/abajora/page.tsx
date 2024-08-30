import { abajoraProjectHeader as AbajoraProjectHeader } from "@/components";

// This is the main component for the Abajora project page
export default function AbajoraPage() {
  return (
    <main className="flex flex-col items-center px-4 bg-custom-dark text-white">
      {/* The ProjectHeader component displays the header section of the project */}
      <AbajoraProjectHeader />
    </main>
  );
}
