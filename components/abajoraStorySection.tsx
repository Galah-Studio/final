// components/abajoraStorySection.tsx

"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { useEffect } from "react";

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
    // Check if the script is already loaded
    if (typeof window !== "undefined" && window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Function to update the tweet theme
    const updateTweetTheme = () => {
      const tweetBlockquote = document.querySelector(".twitter-tweet");
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains("dark");
      if (tweetBlockquote) {
        tweetBlockquote.setAttribute("data-theme", isDarkMode ? "dark" : "light");
        // Re-render the tweet to apply the new theme
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      }
    };

    // Observe changes to the `dark` class on the <html> element
    const observer = new MutationObserver(() => {
      updateTweetTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Initial theme update
    updateTweetTheme();

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
      className="mb-28 max-w-3xl mx-auto leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Section Heading */}
      <SectionHeading>
        <span className="font-comfortaa text-[#ff2b69]">About Us</span>
      </SectionHeading>

      {/* First Paragraph */}
      <p className="mb-6 font-maven text-left">
        Abajora is not just a podcast; it is a cultural phenomenon that resonates
        throughout Saudi Arabia and the broader Arabic-speaking world. Hosted by
        the remarkable Lubna Al Khamis, she is celebrated for her exceptional
        storytelling and dedication to enriching Arabic content. Lubna’s approach
        blends profound narratives with engaging discussions, elevating her
        audience’s listening experience and reflecting a deep appreciation for the
        Arabic language and its cultural significance.
      </p>

      {/* Embed Tweet */}
      <div className="mb-6 flex justify-center">
        <blockquote
          className="twitter-tweet"
          data-theme="light"
        >
          <a href="https://twitter.com/lubnaAlkhamis/status/1717842627586912301"></a>
        </blockquote>
      </div>

      {/* Second Paragraph */}
      <p className="mb-6 font-maven text-left">
        In our latest collaboration with Abajora, we had the privilege of crafting
        a visually stunning logo reveal video, celebrating the podcast’s new
        identity. This project signifies an important milestone in our ongoing
        partnership, building on the creative synergy established in our previous
        work together.
      </p>

      {/* Embed Image */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/abajora/abj_01.png"
          alt="Abajora Project Image"
          width={800}
          height={450}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Remaining Paragraphs */}
      <p className="mb-6 font-maven text-left">
        Our talented team approached this project with an unwavering commitment to
        artistry and innovation. We envisioned the logos as elegant lamps,
        symbolizing enlightenment and transformation. Through meticulous 3D
        modeling, we brought these logos to life, ensuring that the reveal
        resonated with sophistication and style.
      </p>

      <p className="mb-6 font-maven text-left">
        To elevate the narrative, we seamlessly integrated dynamic live-action
        footage, enriching the visual storytelling and enhancing audience
        engagement. This integration serves as a bridge that connects the
        podcast’s imaginative essence with its real-world impact, allowing viewers
        to immerse themselves in the Abajora experience.
      </p>

      <p className="mb-6 font-maven text-left">
        The culmination of our efforts resulted in a breathtaking motion graphics
        segment, where diverse styles and techniques harmoniously converge. Each
        carefully curated element reflects our studio’s relentless pursuit of
        excellence, resulting in a captivating video that encapsulates Abajora’s
        spirit—a podcast that enlightens and inspires.
      </p>

      <p className="font-maven text-left">
        This project not only showcases the evolution of Abajora’s brand but also
        exemplifies our studio’s dedication to creating high-quality visual
        experiences that resonate deeply. The creative collaboration and artistic
        exploration throughout this journey have been exhilarating, celebrating
        the rich narratives that Lubna and her team continue to share with the
        world.
      </p>
    </motion.section>
  );
};

export default AbajoraStorySection;
