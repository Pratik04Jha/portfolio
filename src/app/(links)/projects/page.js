// "use client";
import HeadingSvg from "@/components/svgs/HeadingSvg";
import ProjectCard from "@/components/ui/ProjectCard";
import React from 'react'
// import { motion, useScroll, useSpring } from "framer-motion";

const data = [
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "LudumVerse is your ultimate destination for online browser games. Enjoy a collection of addictive, fun, and free games anytime, anywhere.",
    title: "LudumVerse | Gaming arcade",
    id: "ludumVerse",
    uri: "/",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "WebGL"],
    tooltip: "Explore gaming arcade",
  },
  {
    imageSrc: "/Project-Images/ZeniusVerse.png",
    description:
      "ZeniusVerse is an AI-powered platform offering intelligent solutions for everyday problems with cutting-edge machine learning models.",
    title: "ZeniusVerse | AI universe",
    id: "zeniusVerse",
    uri: "/",
    skills: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL"],
    tooltip: "Discover AI universe",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "A marketplace for indie game developers to showcase and sell their creations to a global audience of gamers.",
    title: "IndieGame Hub | Marketplace",
    id: "indieGameHub",
    uri: "/",
    skills: ["TypeScript", "Next.js", "Stripe", "Firebase", "Tailwind CSS"],
    tooltip: "Visit marketplace",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
  {
    imageSrc: "/Project-Images/LudumVerse.png",
    description:
      "An analytics platform for game developers to track player behavior and optimize their gaming experiences.",
    title: "GameAnalytics Pro | Dashboard",
    id: "gameAnalytics",
    uri: "/",
    skills: ["D3.js", "React", "Express", "MySQL", "AWS"],
    tooltip: "Check analytics",
  },
];

export default function ProjectsPage() {
  return (
    <div id="projects" className="flex min-h-screen bg-[#101010] flex-col  items-center gap-5 text-white py-20  relative ">
      <HeadingSvg className="  " />

      <main className="flex flex-col items-center gap-10">
        <h1 className="text-3xl md:text-5xl cursor-default font-normal w-[40%] pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
          Turning Imagination Into Real Code
        </h1>
        <div className="flex flex-wrap gap-20 justify-center">
          {data.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

