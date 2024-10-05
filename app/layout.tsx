import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation"; // Importing to detect the current path

import { Footer, ThemeSwitch } from "@/components";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import "./globals.css";

// inter font export
const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#CCD6E0",
};

// site metadata
export const metadata: Metadata = {
  title: `${OWNER_NAME.split(" ")[0]} | Production Studio`,
  description: `${OWNER_NAME.split(" ")[0]}  is a renowned production studio specializing in high-quality film and multimedia projects.`,
  authors: {
    name: OWNER_NAME,
    url: EXTRA_LINKS.github,
  },
  keywords: [
    "reactjs", "nextjs", "vercel", "react", "portfolio", "portfolio-next",
    "emailjs", "framer-motion", "react-hot-toast", "react-icons", 
    "react-intersection-observer", "react-vertical-timeline", 
    "tailwindcss", "ui/ux", "js", "javascript", "typescript", "html", "css"
  ],
  manifest: "/manifest.json",
  other: {
    "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY!,
  },
};

// root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  // Condition to check if the current route is the main page
  const isMainPage = pathname === "/";

  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-custom-dark dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative ${isMainPage ? "pt-28 sm:pt-36" : ""}`}>
        {/* Conditionally add background blur effect only on the main page */}
        {isMainPage && (
          <>
            <div className="bg-[#ffd3e0] dark:bg-[#290E16] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
            <div className="bg-[#ffebf1] dark:bg-[#0c0507] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />
          </>
        )}

        {/* theme context provider */}
        <ThemeContextProvider>
          {/* active section context provider */}
          <ActiveSectionContextProvider>
            {children}
            {/* footer */}
            <Footer />

            {/* toaster */}
            <aside>
              <Toaster
                position="top-right"
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>

            {/* theme switcher */}
            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* vercel analytics */}
        <Analytics />

        {/* vercel speed insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
