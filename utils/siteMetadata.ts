import { Metadata } from "next";
import { OWNER_NAME, EXTRA_LINKS } from "@/constants";

export const metadata: Metadata = {
  title: `${OWNER_NAME.split(" ")[0]} | Personal Portfolio`,
  description: `${OWNER_NAME.split(" ")[0]} is a full-stack developer with 4 years of experience.`,
  authors: {
    name: OWNER_NAME,
    url: EXTRA_LINKS.github,
  },
  keywords: [
    "reactjs", "nextjs", "vercel", "react", "portfolio", "portfolio-next"
  ]
};
