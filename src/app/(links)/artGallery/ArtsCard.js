import React from "react";
import Image from "next/image";

const ArtsCard = ({artdata}) => {
  return (
    <div className="group relative  overflow-hidden p-4  transition-all duration-300 ease-in-out cursor-pointer  rounded-3xl ">
      {/* Image with subtle scale effect on hover */}
      <div className="relative z-0">
        <div className="aspect-square overflow-hidden rounded-2xl  ">
          <Image
            src="/example sketch.jpeg"
            alt="Artwork preview"
            width={400}
            height={400}
            className="h-full w-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-104"
          />
        </div>

        <Image
          src="/example sketch.jpeg"
          alt="Artwork preview"
          width={400}
          height={400}
          className=" absolute h-full w-full top-0 left-0 object-cover -z-1 blur-2xl transition-transform duration-500 ease-in-out group-hover:scale-104"
        />
      </div>

      {/* Card footer */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-neutral-100">{artdata.title}</h3>
        <p className="mt-1 text-sm text-neutral-400">{artdata.artistName}</p>

        {/* Additional metadata - subtle and minimal */}
        <div className="mt-3 flex items-center justify-between border-t border-neutral-800 pt-3">
          <span className="text-xs text-neutral-500">{artdata.date}</span>
          <span className="text-xs font-medium text-neutral-300">{artdata.type}</span>
        </div>
      </div>

      {/* Subtle overlay on hover */}
    </div>
  );
};

export default ArtsCard;
