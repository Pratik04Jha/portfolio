'use client';
import  RatingGrid  from "./RatingsGrid";

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
    <div className="flex justify-evenly items-center flex-col lg:flex-row h-auto min-h-screen bg-[#101010] p-6 gap-10">
      <RatingGrid
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
      />
    </div>
  );
}
