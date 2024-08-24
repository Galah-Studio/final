import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import { Header, Footer, ThemeSwitch } from "@/components";
import { EXTRA_LINKS, OWNER_NAME } from "@/constants";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

import "./globals.css";

// Inter font export
const inter = Inter({ subsets: ["latin"] });

// Metadata should be defined in a common file if used across both client and server
// I'm assuming you will move this to a separate file such as utils/siteMetadata.ts
// Here's the import statement you would use:
import { metadata } from "@/utils/siteMetadata";

// Root layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 text-gray-950 relative pt-28 sm:pt-36`}
      >
        {/* Background blur effect */}
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]" />
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] -z-10 left-[-35rem] h-[50rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

        {/* Theme and Active Section Context Providers */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {/* Header */}
            <Header />
            {children}
            {/* Footer */}
            <Footer />

            {/* Toaster Notifications */}
            <aside>
              <Toaster
                position="top-right",
                toastOptions={{
                  className: "dark:bg-white/10 dark:text-white/80",
                }}
              />
            </aside>

            {/* Theme Switch */}
            <aside>
              <ThemeSwitch />
            </aside>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
