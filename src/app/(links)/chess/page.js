'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const chessData = [
  {
    title: "Rapid",
    rating: 781,
  },
  {
    title: "Blitz",
    rating: 648,
  },
  {
    title: "Bullet",
    rating: 661,
  },
  {
    title: "Daily",
    rating: 1441,
  },
  {
    title: "Daily960",
    rating: 661,
  },
  {
    title: "Puzzle",
    rating: 1881,
  },
];

const lichessData = [
  {
    title: "Rapid",
    rating: 1352,
  },
  {
    title: "Blitz",
    rating: 1312,
  },
  {
    title: "Bullet",
    rating: 1210,
  },
  {
    title: "Classical",
    rating: 1550,
  },
  {
    title: "Daily",
    rating: 1822,
  },
  {
    title: "Puzzle",
    rating: 1832,
  },
];

export default function Chess() {
  const [animatedChessRatings, setAnimatedChessRatings] = useState(
    chessData.map(() => 0)
  );
  const [animatedLichessRatings, setAnimatedLichessRatings] = useState(
    lichessData.map(() => 0)
  );

  useEffect(() => {
    // Function to animate the ratings
    const animateRatings = (targetRatings, setRatings) => {
      const duration = 2000; // Animation duration in ms
      const startTime = performance.now();
      
      const updateRatings = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const newRatings = targetRatings.map((item, index) => {
          return Math.floor(progress * item.rating);
        });
        
        setRatings(newRatings);
        
        if (progress < 1) {
          requestAnimationFrame(updateRatings);
        }
      };
      
      requestAnimationFrame(updateRatings);
    };

    // Start animations with a slight delay between them
    animateRatings(chessData, setAnimatedChessRatings);
    setTimeout(() => {
      animateRatings(lichessData, setAnimatedLichessRatings);
    }, 300); // 300ms delay before starting Lichess animation
  }, []);

  return (
    <div className="flex justify-evenly items-center h-screen ">
      <div className="flex flex-col items-center justify-center">
        <Image
          src="/chess logo.png"
          width={100}
          height={100}
          alt="Chess.com logo"
          className=""
        />
        <h1 className="text-5xl font-bold ">Chess.com</h1>
        <h2>Peak Ratings</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {chessData.map((game, index) => (
            <div
              key={index}
              className="p-8 rounded-lg flex-1 border-2 border-zinc-900  justify-between items-center gap-2 text-center cursor-pointer"
            >
              <h1 className="text-4xl font-bold  ">{animatedChessRatings[index]}</h1>
              <h2 className="text-xl ">{game.title}</h2>
            </div>
          ))}
        </div>
        <p className="py-4">
          To view my current chess.com rating click -{" "}
          <Link
            href="https://chess.com/members/pratikthejha"
            target="_blank"
            className="text-[#00ffdd]"
          >
            here
          </Link>
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <Image
          src="/lichess logo.png"
          width={100}
          height={100}
          alt="Lichess logo"
          className=""
        />
        <h1 className="text-5xl font-bold ">Lichess.com</h1>
        <h2>Peak Ratings</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {lichessData.map((game, index) => (
            <div
              key={index}
              className="p-8 rounded-lg flex-1 border-2 border-zinc-900 justify-between items-center gap-2 text-center cursor-pointer"
            >
              <h1 className="text-4xl font-bold ">{animatedLichessRatings[index]}</h1>
              <h2 className="text-xl ">{game.title}</h2>
            </div>
          ))}
        </div>
        <p  className="py-4">
          To view my current lichess rating click -{" "}
          <Link
            href="https://lichess.org/@/pratikthejha" // Fixed link to lichess
            target="_blank"
            className="text-[#00ffdd]"
          >
            here
          </Link>
        </p>
      </div>
    </div>
  );
}