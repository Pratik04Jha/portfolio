"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Grip } from "lucide-react";
import { ImSphere } from "react-icons/im";
import { TbBrandAppleArcade, TbAutomation } from "react-icons/tb";
import { GiSlowBlob } from "react-icons/gi";
import { PiSphereDuotone } from "react-icons/pi";
import { RiBloggerLine } from "react-icons/ri";
import { useState } from "react";

export default function ToggleGridDropdown() {
  const [showGridMenu, setShowGridMenu] = useState(false);

  const menuItems = [
    {
      icon: <ImSphere size={40} />,
      title: "Main",
      link: "https://main-website-9re5rheox-pratik04jha.vercel.app/",
    },
    {
      icon: <TbBrandAppleArcade size={40} />,
      title: "Arcade",
      link: "https://arcade-zeta.vercel.app/",
    },
    {
      icon: <GiSlowBlob size={40} />,
      title: "AI Website",
      link: "/",
    },
    {
      icon: <PiSphereDuotone size={40} />,
      title: "Portfolio",
      link: "https://pratik-the-legend.vercel.app/",
    },
    {
      icon: <RiBloggerLine size={40} />,
      title: "Blog",
      link: "/Home",
    },
    {
      icon: <TbAutomation size={40} />,
      title: "Automation",
      link: "/Home",
    },
  ];

  return (
    <div className="relative flex items-center">
      <button
        onClick={() => setShowGridMenu(!showGridMenu)}
        className="text-white rounded-lg font-extralight flex items-center cursor-pointer"
      >
        <Grip size={20} className=""/>
      </button>

      <AnimatePresence>
        {showGridMenu && (
          <motion.div
            className="absolute right-6 top-16 grid grid-cols-2 gap-4 p-4 w-64 bg-[#1c1c1f] border border-zinc-800 rounded-lg z-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {menuItems.map((item, i) => (
              <Link
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : "_self"}
                key={i}
                className="h-20 flex flex-col justify-center items-center gap-2 rounded-lg hover:bg-zinc-800 transition duration-200 hover:scale-105 cursor-pointer text-white"
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
