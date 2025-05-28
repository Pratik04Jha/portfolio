// app/projects/Sidebar.js
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const navItems = [
  { icon: <FaHome />, label: "Feature", href: "/" },
  { icon: <FaCode />, label: "Games", href: "/projects" },
  { icon: <FaLaptopCode />, label: "Productivity", href: "/skills" },
  { icon: <FaRocket />, label: "AI/ML", href: "/launch" },
  { icon: <FaRocket />, label: "Frontend", href: "/launch" },
    { icon: <FaRocket />, label: "Backend", href: "/launch" },
    { icon: <FaRocket />, label: "Saas", href: "/launch" },

];

export default function Sidebar() {
  return (
    <aside className="fixed pt-15 w-20 md:w-60 bg-black border-r border-zinc-800 h-full p-4 flex flex-col gap-6">

      <nav className="flex-1 flex flex-col gap-4 ">
        {navItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 text-sm md:text-base text-white transition-all  rounded-md "
            >
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}
