import Link from "next/link";
import { useAnimatedRating } from "./useAnimatedRating";

export default function RatingGrid({ title, logo, data, link, delay = 0 }) {
  const animatedRatings = useAnimatedRating(data, delay);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.map((game, index) => (
          <div
            key={index}
            className="p-8 rounded-lg flex-1 w-40 h-40 flex flex-col items-center justify-center border-2 border-[#2a2a2a] bg-[#171717] text-center cursor-pointer"
          >
            <div className={` ${game.color}`}>
              {game.svg}
            </div>

            <h1 className="text-3xl font-extrabold">{animatedRatings[index]}</h1>
            <h2 className="text-xl">{game.title}</h2>
          </div>
        ))}
      </div>

      {/* <p className="py-4">
        To view my current {title.toLowerCase()} rating click {" "}
        <Link href={link} target="_blank" className="text-[#00ffdd]">
          here
        </Link>
      </p> */}
    </div>
  );
}
