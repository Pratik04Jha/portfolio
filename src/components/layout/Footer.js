"use client";
import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";
import SocialIcons from "../ui/SocialIcons";
import { usePathname } from "next/navigation";

const noFooterRoutes = [
  "/games/snakeGame",
  "/games/flappyBird",
  "/games/fruitCatcher",
  "/games/boxRunner",
  "/games/trexRunner",
  "/games/rockPaperScissor",
  "/games/ticTacToe",
  "/games/numberGuessing",
  "/games/bubbling",
];

const footerSections = [
  {
    title: "Website Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Products", href: "/Explore" },
      { label: "Contact", href: "/About" },
      { label: "Blogs", href: "/About" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Privacy policy", href: "/" },
      { label: "Terms of use", href: "/" },
    ],
  },
  {
    title: "Other Products",
    links: [
      { label: "Main Website", href: "", external: true },
      {
        label: "Portfolio Website",
        href: "https://pratik-the-legend.vercel.app/",
        external: true,
      },
      {
        label: "Game Arcade",
        href: "https://arcade-zeta.vercel.app/",
        external: true,
      },
      { label: "Artificial Intelligence", href: "/", external: true },
      { label: "Blog | Article | Thoughts", href: "", external: true },
      { label: "Productivity App", href: "", external: true },
      { label: "Automation App", href: "", external: true },
    ],
  },
  {
    title: "Follow Me",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/poptale_artz/" },
      { label: "Twitter (X)", href: "https://x.com/pratik04jha" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/pratik-jha-380037301/",
      },
      { label: "GitHub", href: "https://github.com/Pratik04Jha" },
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61574732885384",
      },
      { label: "Quora", href: "https://www.quora.com/profile/Pratik-1703" },
    ],
  },
];

// Social icons array
const socialData = [
  {
    icon: <FaInstagram className="text-white" size={30} />,
    src: "/",
    title: "Instagram",
  },
  {
    icon: <FaGithub className="text-white" size={30} />,
    src: "/",
    title: "Github",
  },
  {
    icon: <FaTwitter className="text-white" size={30} />,
    src: "/",
    title: "Twitter",
  },
  {
    icon: <FaFacebook className="text-white" size={30} />,
    src: "/",
    title: "Facebook",
  },
  {
    icon: <FaLinkedin className="text-white" size={30} />,
    src: "/",
    title: "LinkedIn",
  },
  {
    icon: <FaQuora className="text-white" size={30} />,
    src: "/",
    title: "Quora",
  },
];

const Footer = () => {
  const pathname = usePathname();
  if (noFooterRoutes.includes(pathname)) return null;

  return (
    <footer className="w-full  bg-zinc-800/30 text-white pt-14 pb-0 px-5 relative">
      <div className="absolute h-[2px] animate-rainbow-stripe bg-[length:200%_100%] w-full top-0 -inset-100 z-10 bg-[linear-gradient(to_left,red,orange,yellow,green,cyan,blue,violet,red)] opacity-100 pointer-events-none left-0 " />
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left sm:px-60">
          {footerSections.map(({ title, links }, idx) => (
            <div key={idx}>
              <h1 className="font-semibold text-white/90 text-lg pb-2">
                {title}
              </h1>
              <ul className="text-sm text-white/80 space-y-1">
                {links.map(({ label, href, external }, i) => (
                  <li key={i}>
                    {/* Use <a> tag with target _blank for external links */}
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white ease-in-out duration-100"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="hover:text-white ease-in-out duration-100"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center lg:justify-center">
          <div className="flex justify-center lg:justify-end gap-6 my-10">
            {socialData.map((item, index) => (
              <SocialIcons key={index} data={item} />
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center">
          <p className="text-center absolute bottom-0 my-5">
            © All rights reserved - Pratik Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
