import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ data }) => {
  return (
    <div className="group relative flex flex-col justify-center cursor-pointer items-center gap-4  transition-all duration-500 ease-in-out">
      {/* Tooltip */}
      <div className="absolute  -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-12 transition-all duration-300 ease-in-out bg-zinc-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-50">
        {data.tooltip || "View this project"}
        <div className="absolute w-2 h-2 bg-zinc-900 rotate-45 -bottom-1 left-1/2 -translate-x-1/2"></div>
      </div>
      
      {/* Image Container with Crazy Hover Effects */}
      <div className="relative transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:-rotate-1  ">
        {/* Main Image */}
        <Image src={data.imageSrc} width={550} height={550} className="" alt="" />
        <Image
          src={data.imageSrc}
          width={550}
          height={550}
          className="absolute top-0 left-0 blur-2xl -z-0"
          alt=""
        />
         <Image
          src={data.imageSrc}
          width={550}
          height={550}
          className="absolute top-0 left-0 z-1"
          alt=""
        />
        
        
      </div>
      
      
    </div>
  );
};

export default ProjectCard;