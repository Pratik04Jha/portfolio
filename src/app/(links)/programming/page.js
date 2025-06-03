// imports
import CssSvg from "@/components/svgs/cssSvg";
import HtmlSvg from "@/components/svgs/htmlSvg";
import JavascriptSvg from "@/components/svgs/JavascriptSvg";
import ReactSvg from "@/components/svgs/ReactSvg";
import Nextjs from "@/components/svgs/Nextjs";
import MongodbSvg from "@/components/svgs/MongodbSvg";
import FirebaseSvg from "@/components/svgs/FirebaseSvg";
import NodejsSvg from "@/components/svgs/NodejsSvg";
import TailwindcssSvg from "@/components/svgs/TailwindcssSvg";
import GitSvg from "@/components/svgs/GitSvg";
import ViteSvg from "@/components/svgs/ViteSvg";
import GithubSvg from "@/components/svgs/GithubSvg";
import ExpressSvg from "@/components/svgs/ExpressSvg";
import BootstrampSvg from "@/components/svgs/BootstrampSvg";
import FramerSvg from "@/components/svgs/FramerSvg";
import HeadingSvg from "@/components/svgs/HeadingSvg";

// Skill items without boxShadowColor now — we'll map shadows manually
const skills = [
  { svg: "", name: "Html" },
  { svg: "", name: "Css" },
  { svg: "", name: "Javascript" },
  { svg: "", name: "Nextjs" },
  { svg: "", name: "React" },
  { svg: "", name: "Mongodb" },
  { svg: "", name: "Firebase" },
  { svg: "", name: "Nodejs" },
  { svg: "", name: "Tailwindcss" },
  { svg: "", name: "Git" },
  { svg: "", name: "Vite" },
  { svg: "", name: "Github" },
  { svg: "", name: "Express" },
  { svg: "", name: "Bootstramp" },
  { svg: "", name: "Framer" },
  { svg: <HtmlSvg />, name: "Html" },
  { svg: <CssSvg />, name: "Css" },
  { svg: <JavascriptSvg />, name: "Javascript" },
  { svg: <Nextjs />, name: "Nextjs" },
  { svg: <ReactSvg />, name: "React" },
  { svg: <MongodbSvg />, name: "Mongodb" },
  { svg: "", name: "Firebase" },
  { svg: "", name: "Nodejs" },
  { svg: "", name: "Tailwindcss" },
  { svg: "", name: "Git" },
  { svg: "", name: "Vite" },
  { svg: "", name: "Github" },
  {
    svg: <FirebaseSvg />, name: "Express"
  },
  { svg: <NodejsSvg />, name: "Bootstramp" },
  { svg: <TailwindcssSvg />, name: "Framer" },
  { svg: <GitSvg />, name: "Html" },
  { svg: <ViteSvg />, name: "Css" },
  { svg: <GithubSvg />, name: "Javascript" },
  { svg: "", name: "Nextjs" },
  { svg: "", name: "React" },
  { svg: "", name: "Mongodb" },
  { svg: "", name: "Firebase" },
  { svg: "", name: "Nodejs" },
  { svg: "", name: "Nodejs" },
  { svg: "", name: "Tailwindcss" },
  { svg: <ExpressSvg />, name: "Git" },
  { svg: <BootstrampSvg />, name: "Vite" },
  { svg: <FramerSvg />, name: "Github" },
  { svg: <ReactSvg />, name: "Express" },
  { svg: "", name: "Bootstramp" },
  { svg: "", name: "Framer" },
  { svg: "", name: "Javascript" },
  { svg: "", name: "Nextjs" },
  { svg: "", name: "Html" },
  { svg: "", name: "Css" },
  { svg: "", name: "Javascript" },
  { svg: "", name: "Nextjs" },
  { svg: "", name: "React" },
  { svg: "", name: "Mongodb" },
  { svg: "", name: "Firebase" },
  { svg: "", name: "Nodejs" },
  { svg: "", name: "Tailwindcss" },
  { svg: "", name: "Git" },
  { svg: "", name: "Vite" },
  { svg: "", name: "Github" },
];

// Map skill name to explicit hover shadow classes (hardcoded for Tailwind)
const hoverShadowClasses = {
  Html: "hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]",
  Css: "hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]",
  Javascript: "hover:shadow-[0_0_30px_rgba(234,179,8,0.1)]",
  Nextjs: "hover:shadow-[0_0_30px_rgba(209,213,219,0.1)]",
  React: "hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]",
  Mongodb: "hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]",
  Firebase: "hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]",
  Nodejs: "hover:shadow-[0_0_30px_rgba(163,230,53,0.1)]",
  Tailwindcss: "hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]",
  Git: "hover:shadow-[0_0_30px_rgba(251,146,60,0.1)]",
  Vite: "hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]",
  Github: "hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
  Express: "hover:shadow-[0_0_30px_rgba(113,113,122,0.1)]",
  Bootstramp: "hover:shadow-[0_0_30px_rgba(129,140,248,0.1)]",
  Framer: "hover:shadow-[0_0_30px_rgba(244,114,182,0.1)]",
};

export default function Page() {
  return (
    <main className="min-h-screen   gap-5 text-white pt-20 flex flex-col items-center justify-center w-full">
      <HeadingSvg className="  "/>
      <div className=" w-full items-center flex flex-col ">
        <h2 className="absolute z-100 text-3xl md:text-5xl cursor-default font-normal w-1/2 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
          Learning Programming Skills Makes Me Powerful
        </h2>
        <div className="relative mt-15">
          <div className="absolute h-30 w-full bg-[#101010] -top-10 left-0 blur-xl  " />
          <div className="absolute h-30 w-full bg-[#101010] -bottom-10 left-0 blur-xl  " />
          <div className="absolute w-30 h-full bg-[#101010] -top-10 left-0 blur-xl  " />
          <div className="absolute w-30 h-full bg-[#101010] -top-10 right-0 blur-xl  " />

          <div className="flex flex-wrap w-full justify-center gap-6 bg-[#101010]">
            {skills.map((item, index) => (
              <div
                key={index}
                className={`w-25 h-25 cursor-pointer rounded-2xl p-7 border border-[#2a2a2a] flex items-center justify-center flex-col gap-2 bg-[#171717] group fast-in-slow-out ${
                  hoverShadowClasses[item.name]
                }`}
              >
                {item.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
