"use client";
import BoxComponent from "./BoxComponent";
import RatingGrid from "./RatingsGrid";

const chessData = [
  { title: "Rapid", rating: 781 },
  { title: "Blitz", rating: 648 },
  { title: "Bullet", rating: 661 },
  { title: "Daily", rating: 1441 },
  { title: "Daily960", rating: 661 },
  { title: "Puzzle", rating: 1881 },
];

const lichessData = [
  { title: "Rapid", rating: 1352 },
  { title: "Blitz", rating: 1312 },
  { title: "Bullet", rating: 1210 },
  { title: "Classical", rating: 1550 },
  { title: "Daily", rating: 1822 },
  { title: "Puzzle", rating: 1832 },
];

export default function Chess() {
  return (
   <main className="flex flex-col  items-center justify-center pt-20">
      <h1 className=" text-3xl md:text-5xl cursor-default font-normal w-[40%] pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
        More Than a Game. A Battlefield of Brilliance
      </h1>

      <BoxComponent />

      {/* <RatingGrid
        title="Chess.com"
        logo="/chess logo.png"
        data={chessData}
        link="https://chess.com/members/pratikthejha"
        delay={0}
      />
      <RatingGrid
        title="Lichess.com"
        logo="/lichess logo.png"
        data={lichessData}
        link="https://lichess.org/@/pratikthejha"
        delay={300}
      /> */}
    </main>
  );
}
