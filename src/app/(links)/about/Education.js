import Image from "next/image";
import React from "react";

const EducationCard = ({ educationData }) => {
  return (
    <div className="group   border-1 border-zinc-700 text-white p-4 rounded-xl shadow-md transition-transform duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="overflow-hidden rounded-xl w-full md:w-1/3">
          <Image
            src={educationData.imgSrc}
            width={100}
            height={100}
            alt={educationData.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-xl font-bold">{educationData.title}</h2>

          <p className="text-sm text-zinc-200 ">{educationData.duration}</p>
          <p className="text-white mt-2  text-sm line-clamp-3">
            {educationData.description}
          </p>
          <p className="text-sm text-zinc-300 mt-2">
            <span className="font-semibold text-zinc-100">Skills Learned:</span>{" "}
            {educationData.skillsLearned}
          </p>
          <p className="text-sm text-zinc-300 mt-1">
            <span className="font-semibold text-zinc-100">Grade:</span>{" "}
            {educationData.grade}
          </p>
          <div className="flex gap-2">
            <a
              href={educationData.schoolWebsite}
              className="text-white  text-sm "
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="py-1 px-4 rounded-3xl border-2 cursor-pointer border-zinc-300 transition-colors duration-300 hover:border-white bg-white/5">
                Visite website
              </button>
            </a>

            <button className="py-1 px-4 text-sm  rounded-3xl border-2 cursor-pointer border-zinc-300 transition-colors duration-300 hover:border-white bg-white/5">
              See details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
