import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import abjImg from "@/public/abajora.png";
import realtorImg from "@/public/arki.jpg";
import ecommerceImg from "@/public/vivi.jpg";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://www.instagram.com/galah.tv/",
  github: "https://x.com/Galahtv",
  resume: "/resume.pdf",
  source_code: "https://github.com/sanidhyy/portfolio",
  email: "sanidhya.verma12345@gmail.com",
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [
  {
    title: "Studio Standards",
    date: "We're Passionate About Our Work",
    description: `“Passion is the key essential force that drives our success. It determines everything that we think and do!”`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Exceptional Animation Services",
    date: "Our Mission & Vision",
    description: `Our mission is to provide our clients with exceptional animation services that meet their unique needs and exceed their expectations. We strive to be a leader in the animation industry in the Middle East, and to build long-term relationships with our clients based on trust, collaboration, and quality work.`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Specialists in High-Quality 2D Animation",
    date: "About Us",
    description: `We are an animation studio based in Riyadh, Saudi Arabia, specializing in creating high-quality 2D animations for a variety of industries and clients. Our team of skilled animators and designers are passionate about creating engaging and visually stunning content that brings our clients' ideas to life.`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Extensive Industry Experience",
    date: "Our Expertise",
    description: `Our exceptional team brings a wealth of expertise and experience gained through working on different shows including Masameer, from YouTube to Movie and to Netflix. Our team members have honed their skills and developed a deep understanding of industry best practices. We are perfectly equipped to bring our animated TV shows to life.`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Transforming Ideas into Captivating Experiences",
    date: "Bringing Ideas to Life",
    description: `At Galah, we specialize in turning ideas into captivating experiences. From concept designing to storyboarding, animation, and final delivery, we bring your vision to life. With meticulous attention to detail and state-of-the-art animation techniques, we create immersive experiences that captivate and entertain.`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Crafting Stories that Inspire",
    date: "Creating Engaging Stories",
    description: `We craft stories that captivate and entertain. But we go beyond mere entertainment. Our narratives also impart knowledge and inspire personal growth. Through compelling characters and immersive settings, we engage audiences while seamlessly integrating educational elements.`,
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Showcasing the Beauty of Saudi Arabia",
    date: "Embracing Saudi Arabia's Nature",
    description: `We are dedicated to creating immersive environments that vividly reflect the breathtaking landscapes and natural wonders of Saudi Arabia. Our aim is to educate and inspire people, allowing them to discover and appreciate the vast and diverse nature that Saudi Arabia has to offer.`,
    icon: React.createElement(CgWorkAlt),
  },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Abajora Podcast Commercial",
    description: `We created a commercial for a podcast called "Abajora". The ad includes realistic 3D modeling, motion graphics, and video editing. #3D #Blender #AfterEffects #Premiere`,
    tags: ["3D", "Blender", "AfterEffects", "Premiere"],
    imageUrl: "/path/to/abajora-image.png",
    projectUrl: "https://yourprojecturl.com/abajora",
  },
  {
    title: "Vivi Water Company Campaign",
    description: `We created an ad campaign for Vivi, a water company, featuring realistic product modeling and renders. #Blender #AfterEffects #Photoshop #Illustrator`,
    tags: ["Blender", "AfterEffects", "Photoshop", "Illustrator"],
    imageUrl: "/path/to/vivi-image.png",
    projectUrl: "https://yourprojecturl.com/vivi",
  },
  {
    title: "ARKI Tectonica Ceremony Documentation",
    description: `We documented a celebration ceremony for ARKI Tectonica, using a cinematic kit and edited the videos and photos. #DaVinciResolve #AfterEffects #Premiere #Photoshop #Videography #Photography`,
    tags: ["DaVinciResolve", "AfterEffects", "Premiere", "Photoshop", "Videography", "Photography"],
    imageUrl: "/path/to/arki-image.png",
    projectUrl: "https://yourprojecturl.com/arki",
  },
  {
    title: "Tiraz Brochure Design",
    description: `We designed a brochure for Tiraz, including writing the content, editing photos, and designing the layout. #InDesign #Photoshop #Writing #Illustrator`,
    tags: ["InDesign", "Photoshop", "Writing", "Illustrator"],
    imageUrl: "/path/to/tiraz-image.png",
    projectUrl: "https://yourprojecturl.com/tiraz",
  },
] as const;

// Data for skills
export const SKILLS_DATA = [
  "2D Animation",
  "Motion Graphics",
  "Project Development",
  "Pre-production",
  "Post-production",
  "Production",
  "Writing",
  "Blender",
  "After Effects",
  "Premiere",
  "Photoshop",
  "Illustrator",
  "DaVinci Resolve",
  "Videography",
  "Photography",
  "InDesign",
] as const;


// Owner name
export const OWNER_NAME = "Galah Studio";
