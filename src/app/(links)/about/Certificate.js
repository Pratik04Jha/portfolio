import Image from "next/image";
import React from "react";

const Certificate = ({ data }) => {
  return (
    <div className="group h-110 w-100 border border-zinc-700 dark:border-zinc-700 rounded-xl overflow-hidden  flex flex-col transition-all duration-300   dark:hover:shadow-zinc-800 my-2 ">
      <div className="relative h-60 overflow-hidden">
        <Image
          src={data.imgSrc}
          width={400}
          height={400}
          alt={data.title}
          className="object-cover group-hover:scale-102 transition-transform duration-500"
        />
      </div>

      <div className="p-4 flex flex-col items-start ">
        <h1 className="text-lg font-bold text-white  line-clamp-2">
          {data.title}
        </h1>
        <p className="text-sm  text-white mt-1">
          Issued by {data.issuedBy} • {data.date}
        </p>

        {data.description && (
          <p className="text-sm text-left text-white mt-2 line-clamp-2">
            {data.description}
          </p>
        )}

        <div className="mt-auto pt-3 flex flex-col w-full items-start ">
          <div className="flex justify-start w-full items-center text-xs text-white">
            <span>Credential ID: {data.credentialId}</span>
          </div>
          <a
            href={data.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block border-2 border-zinc-300 py-1 px-4 text-center text-sm font-medium text-white rounded-3xl transition-colors  duration-300 hover:border-white hover:bg-white/5"
          >
            View Credential
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
