"use client";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion, useScroll, useSpring } from "framer-motion";

const data = [
  {
    imageSrc: "/portfolio.png",
    description:
      "Navigate your snake, devour fruits, grow endlessly - but don’t bite your own tail or it’s over. A timeless test of reflexes & planning!",
    bgc: "bg-blue-600",
    title: "Snake Game",
    id: "snakeGame",
  },
  {
    imageSrc: "/productivity.png",
    description:
      "Dodge those evil green pipes! It's the ultimate rage-quit game that dares you to beat your own high score.",
    bgc: "bg-yellow-600",
    title: "Flappy Bird",
    id: "flappyBird",
  },
  //
  {
    imageSrc: "/redisigning.png",
    description:
      "Catch the fruits as much as you can in a limited time period. Fast reflexes and a hunger for sweet points are all you need.",
    bgc: "bg-green-600",
    title: "Fruit Catcher",
    id: "fruitCatcher",
  },
  {
    imageSrc: "/time.png",
    description:
      "You’re a box on the run in an endless world of spikes and gaps. Dash your way to survival in this fast-paced, reflex-testing runner!",
    bgc: "bg-green-600",
    title: "Runner Box",
    id: "boxRunner",
  },
  {
    imageSrc: "/portfolio.png",
    description:
      "Navigate your snake, devour fruits, grow endlessly - but don’t bite your own tail or it’s over. A timeless test of reflexes & planning!",
    bgc: "bg-blue-600",
    title: "Snake Game",
    id: "snakeGame",
  },
  {
    imageSrc: "/productivity.png",
    description:
      "Dodge those evil green pipes! It's the ultimate rage-quit game that dares you to beat your own high score.",
    bgc: "bg-yellow-600",
    title: "Flappy Bird",
    id: "flappyBird",
  },
  //
  {
    imageSrc: "/redisigning.png",
    description:
      "Catch the fruits as much as you can in a limited time period. Fast reflexes and a hunger for sweet points are all you need.",
    bgc: "bg-green-600",
    title: "Fruit Catcher",
    id: "fruitCatcher",
  },
  {
    imageSrc: "/time.png",
    description:
      "You’re a box on the run in an endless world of spikes and gaps. Dash your way to survival in this fast-paced, reflex-testing runner!",
    bgc: "bg-green-600",
    title: "Runner Box",
    id: "boxRunner",
  },
  {
    imageSrc: "/portfolio.png",
    description:
      "Navigate your snake, devour fruits, grow endlessly - but don’t bite your own tail or it’s over. A timeless test of reflexes & planning!",
    bgc: "bg-blue-600",
    title: "Snake Game",
    id: "snakeGame",
  },
  {
    imageSrc: "/productivity.png",
    description:
      "Dodge those evil green pipes! It's the ultimate rage-quit game that dares you to beat your own high score.",
    bgc: "bg-yellow-600",
    title: "Flappy Bird",
    id: "flappyBird",
  },
  //
  {
    imageSrc: "/redisigning.png",
    description:
      "Catch the fruits as much as you can in a limited time period. Fast reflexes and a hunger for sweet points are all you need.",
    bgc: "bg-green-600",
    title: "Fruit Catcher",
    id: "fruitCatcher",
  },
  {
    imageSrc: "/time.png",
    description:
      "You’re a box on the run in an endless world of spikes and gaps. Dash your way to survival in this fast-paced, reflex-testing runner!",
    bgc: "bg-green-600",
    title: "Runner Box",
    id: "boxRunner",
  },
];

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="flex h-screen bg-black text-white pt-20  relative">
      {/* Scroll Indicator with Framer Motion */}
      {/* <div className="absolute left-[50%] top-30 h-[400%] w-[1px] bg-[#52A8FF]  origin-top" /> */}

    

      <main className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold line">Featured Projects</h1>
        <div className="flex flex-wrap gap-20 justify-center">
          {data.map((item, index) => (
            <ProjectCard key={index} data={item} />
          ))}
        </div>
      </main>
    </div>
  );
}
