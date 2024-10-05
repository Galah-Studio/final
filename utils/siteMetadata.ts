import { Metadata } from "next";
import { OWNER_NAME, EXTRA_LINKS } from "@/constants";

export const metadata: Metadata = {
  title: `${OWNER_NAME.split(" ")[0]} | Production Studio`,
  description: `${OWNER_NAME.split(" ")[0]} is a renowned production studio specializing in high-quality film and multimedia projects.`,
  authors: {
    name: OWNER_NAME,
    url: EXTRA_LINKS.github,
  },
  keywords: [
    "reactjs", "nextjs", "vercel", "react", "portfolio", "portfolio-next"
  ]
};
