import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="groupp">
      <div className="absolute top-0 opacity-0 groupp-hover:opacity-100 groupp-hover:-top-12 transition-all duration-300 ease-in-out bg-zinc-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-50">
        {data.tooltip || "View this project"}
        <div className="absolute w-2 h-2 bg-zinc-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>

      <div className="group relative z-0 flex flex-col w-140 justify-center gap-4 rounded-3xl transition-all duration-500 ease-in-out overflow-hidden p-4  ">
      {/* Tooltip */}
      <div>
        <div className="relative   overflow-hidden rounded-3xl ">
          {/* Main Image */}
          <Image
            src={data.imageSrc}
            width={550}
            height={550}
            className=" transition-all cursor-pointer duration-500 ease-in-out group-hover:rotate-1 group-hover:scale-103 w-140"
            alt=""
          />
        </div>
        <Image
          src={data.imageSrc}
          width={550}
          height={550}
          className="absolute top-0 left-0 blur-3xl -z-1  "
          alt=""
        />

        <div className="absolute top-0 left-0 blur-3xl h-70 -z-1 w-full bg-white/10" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-3 px-4 pb-4 ">
        <h1 className="text-xl font-semibold text-white">{data.title}</h1>

        <p className="text-white line-clamp-2 text-sm">{data.description}</p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mt-1">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs border-2 cursor-pointer border-zinc-700 hover:bg-white/5 text-white  px-4 py-1 rounded-3xl"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <Link href={data.uri} passHref>
            <button className="text-sm font-medium text-white bg-gradient-to-r  bg-red-700  py-3 rounded-xl px-10 transition-all duration-300 ease-in-out cursor-pointer">
              Visit website
            </button>
          </Link>

          <button className="text-sm font-medium text-white hover:border-transparent hover:bg-zinc-800/80 px-5 py-3 rounded-3xl transition-all duration-300 ease-in-out cursor-pointer">
            View details
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
