import React from "react";

const LanguageCard = ({ languageData }) => {
  return (
    <div className=" text-white border-1 border-zinc-700 hover:border-zinc-600 rounded-2xl shadow-lg p-6  transition-colors duration-300 cursor-pointer  w-60 max-w-md ">
      <h2 className="text-2xl font-semibold mb-2">{languageData.title}</h2>

      <p className="text-sm text-gray-100 mb-3 line-clamp-3">
        {languageData.description}
      </p>

      <ul className="text-sm text-gray-300 mb-3 space-y-1">
        <li>
          <span className="font-medium text-white">Level:</span>{" "}
          {languageData.level}
        </li>
        <li>
          <span className="font-medium text-white ">Rating:</span>{" "}
          <span className="text-xl">{languageData.rating}</span>
        </li>
        <li>
          <span className="font-medium text-white">Language preview:</span>{" "}
          {languageData.helloInLanguage}
        </li>
      </ul>

      {/* Optional future upgrade area */}
      {/* <div className="mt-3">
        <button className="text-sm border border-gray-500 px-3 py-1 rounded-full hover:bg-white hover:text-black transition duration-200">
          Learn More
        </button>
      </div> */}
    </div>
  );
};

export default LanguageCard;
