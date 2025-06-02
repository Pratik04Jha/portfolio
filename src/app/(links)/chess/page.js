"use client";
import RapidSvg from "@/components/svgs/ChessIcons/RapidSvg";
import BoxComponent from "./BoxComponent";
import RatingGrid from "./RatingsGrid";
import BlitzSvg from "@/components/svgs/ChessIcons/BlitzSvg";
import BulletSvg from "@/components/svgs/ChessIcons/BulletSvg";
import PuzzleSvg from "@/components/svgs/ChessIcons/PuzzleSvg";
import DailyWeird from "@/components/svgs/ChessIcons/DailyWeird";
import DailySvg from "@/components/svgs/ChessIcons/DailySvg";

const chessData = [
  { title: "Rapid", rating: 781, color: "text-[#81B64C]", svg: <RapidSvg /> },
  { title: "Blitz", rating: 648, color: "text-[#FAD541]", svg: <BlitzSvg /> },
  { title: "Bullet", rating: 661, color: "text-[#E3AA24]", svg: <BulletSvg /> },
  { title: "Daily", rating: 1441, color: "text-[#F7C631]", svg: <DailySvg /> },
  {
    title: "Daily960",
    rating: 661,
    color: "text-[#DC501D]",
    svg: <DailyWeird />,
  },
  {
    title: "Puzzle",
    rating: 1881,
    color: "text-[#FA742C]",
    svg: <PuzzleSvg />,
  },
];

export default function Chess() {
  return (
    <main className="flex flex-col  items-center justify-center pt-20">
      <h1 className=" text-3xl md:text-5xl cursor-default font-normal w-1/2  pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
        More Than a Game. A Battlefield of Brilliance
      </h1>
      <BoxComponent />
      <RatingGrid
        title="Chess.com"
        logo="/chess logo.png"
        data={chessData}
        link="https://chess.com/members/pratikthejha"
        delay={0}
      />
    </main>
  );
}
