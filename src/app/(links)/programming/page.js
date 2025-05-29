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

const skills = [
  {
    svg: <HtmlSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <CssSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <JavascriptSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <Nextjs />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <ReactSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <MongodbSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <FirebaseSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <NodejsSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <TailwindcssSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <GitSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <ViteSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <GithubSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <ExpressSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <BootstrampSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
  {
    svg: <FramerSvg />,
    textShadow: "0_0_5px_rgba(255, 255, 255, 0.8)",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-10 bg-[#101010] text-white pt-20">
      <div className="mb-14 w-full items-center flex flex-col">
        <h2 className="text-3xl md:text-5xl mb-6 text-white font-bold bg-clip-text">
          Programming
        </h2>
        <div className="flex flex-wrap w-1/2 justify-center gap-6">
          {skills.map((items, index) => (
            <div
              key={index}
              className={`w-25 h-25 cursor-pointer rounded-2xl p-7 border border-[#1E1E1E] flex items-center justify-center flex-col gap-2 bg-[#171717]`}
            >
              {items.svg}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
