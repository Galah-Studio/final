import React from "react";

// Define the prop type for the SectionHeading component.
type SectionHeadingProps = {
  children: React.ReactNode; // Children are of type React.ReactNode.
  className?: string; // Optional className prop to allow custom styling.
};

// SectionHeading component takes the children prop and displays it as an h2 element.
const SectionHeading = ({ children, className }: SectionHeadingProps) => {
  return (
    <h2 className={`text-3xl font-medium capitalize mb-8 text-center ${className}`}>
      {children}
    </h2>
  );
};

export default SectionHeading;
