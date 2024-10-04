// components/abajoraStorySection.tsx

"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useEffect } from "react";
// Import the ReactCompareImage component
import ReactCompareImage from "react-compare-image";

// TypeScript declaration for window.twttr
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: () => void;
      };
    };
  }
}

const AbajoraStorySection = () => {
  // Use the useSectionInView custom hook to track when the "Story" section is in view.
  const { ref } = useSectionInView("Story", 0.25);

  // Load the Twitter widgets script when the component mounts.
  useEffect(() => {
    // Function to load or reload the tweet
    const loadTweet = () => {
      // Check if the script is already loaded
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          window.twttr?.widgets.load();
        };
        document.body.appendChild(script);
      }
    };

    // Function to update the tweet theme
    const updateTweetTheme = () => {
      const tweetBlockquote = document.querySelector(".twitter-tweet");
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains("dark");
      if (tweetBlockquote) {
        tweetBlockquote.setAttribute("data-theme", isDarkMode ? "dark" : "light");
        // Re-render the tweet to apply the new theme
        window.twttr?.widgets.load();
      }
    };

    // Load the tweet initially
    loadTweet();

    // Observe changes to the `class` attribute on the `<html>` element
    const observer = new MutationObserver(() => {
      updateTweetTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  // Return the AbajoraStorySection, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="story"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-3xl mx-auto leading-8 sm:mb-40 scroll-mt-28 bg-gray-50 dark:bg-custom-dark"
    >
      {/* Section Heading */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">What is Abajora?</span>
      </SectionHeading>

      {/* First Paragraph */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        Abajora is not just a podcast; it is a cultural phenomenon that resonates
        throughout Saudi Arabia and the broader Arabic-speaking world. Hosted by
        the remarkable Lubna Al Khamis, she is celebrated for her exceptional
        storytelling and dedication to enriching Arabic content. Lubna’s approach
        blends profound narratives with engaging discussions, elevating her
        audience’s listening experience and reflecting a deep appreciation for the
        Arabic language and its cultural significance.
      </p>

      {/* Embed Tweet */}
      <div className="mb-12 mt-12 flex justify-center">
        <blockquote
          className="twitter-tweet"
          data-theme="light"
        >
          <a href="https://twitter.com/lubnaAlkhamis/status/1717842627586912301"></a>
        </blockquote>
      </div>

      {/* Second Paragraph */}
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        In our latest collaboration with Abajora, we had the privilege of crafting
        a visually stunning logo reveal video, celebrating the podcast’s new
        identity. This project signifies an important milestone in our ongoing
        partnership, building on the creative synergy established in our previous
        work together.
      </p>

      {/* Image Comparison Slider */}
      <div className="mt-12 mb-12 flex justify-center">
        <div className="w-full max-w-xl">
          <ReactCompareImage
            leftImage="/abajora/abj_01.png"
            rightImage="/abajora/abj_02.png"
            sliderLineColor="#ff2b69"
            sliderPositionPercentage={0.5}
          />
        </div>
      </div>

      {/* Remaining Paragraphs */}      
      <p className="mb-6 font-maven text-center text-gray-950 dark:text-gray-50">
        Our talented team approached this project with an unwavering commitment to
        artistry and innovation. We envisioned the logos as elegant bed lamps,
        The rendered scene of the logo as a bed lamp beautifully captures the essence
        of the project, emphasizing both the elegance of the design and the symbolic
        meaning behind it. This lamp represents the listeners of the Abajora podcast 
        providing warmth, comfort, and illumination during their reflective moments.
        It embodies the habit many listeners have of tuning into the podcast before
        drifting off to sleep, creating a sense of serenity in their nightly routines.
      </p>
    </motion.section>
  );
};

export default AbajoraStorySection;
