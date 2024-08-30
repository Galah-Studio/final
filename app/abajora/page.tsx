"use client"; // Ensure this runs on the client-side

import { MyContextProvider, useMyContext } from "@/context/my-context";

export default function Page() {
  return (
    <MyContextProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-custom-dark text-white">
        <h1 className="text-4xl mb-4">Testing Context</h1>
        <DisplayValue />
      </div>
    </MyContextProvider>
  );
}

// A simple component to display and update the context value
function DisplayValue() {
  const { value, setValue } = useMyContext();

  return (
    <div>
      <p>Current Value: {value}</p>
      <button onClick={() => setValue("New Value")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Change Value
      </button>
    </div>
  );
}
