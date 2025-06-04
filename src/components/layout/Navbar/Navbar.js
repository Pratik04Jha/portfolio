"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import ToggleGridDropdown from "./ToggleGridDropdown";

const linkData = [
  { name: "Home", href: "#home" },
  { name: "Programming", href: "#programming" },
  { name: "Projects", href: "#projects" },
  { name: "Chess", href: "#chess" },
  { name: "Contact", href: "#contact" },
  { name: "Testimonial", href: "#testimonial" },
];

const links = [
  // { name: "Art gallery", href: "/artGallery" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-1000000000 flex justify-between items-center py-4 border-b-1 border-zinc-800 bg-[#101010]/80    backdrop-blur-xl px-10">
      <div className="flex justify-start items-center gap-10 ">
        <Link href="/">
          <div className="font-semibold">Pratik Jha</div>
        </Link>
        <div className="flex justify-center items-center gap-8">
          {linkData.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className=" relative  py-1 inline-block group hover:text-white transition-colors duration-300"
            >
              {items.name}
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-white/60 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex items-center justify-center ">
          {links.map((items, index) => (
            <Link
              className="hover:bg-zinc-800 px-4 py-1 rounded-lg transition-colors duration-300 "
              key={index}
              href={items.href}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4  border-l-2 border-zinc-800 border-r-2 px-4">
          <ToggleGridDropdown />
          <ThemeToggle />
        </div>

        <div>
          <Link href="/about">
            <button className="px-4 cursor-pointer py-1 text-sx bg-white text-black rounded-lg">
              Profile
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
