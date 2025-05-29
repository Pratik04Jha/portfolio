import Image from "next/image";
import Link from "next/link";
import { useAnimatedRating } from "./useAnimatedRating";

export default function RatingGrid({ title, logo, data, link, delay = 0 }) {
  const animatedRatings = useAnimatedRating(data, delay);

  return (
    <div className="flex flex-col items-center justify-center">
      <Image src={logo} width={100} height={100} alt={`${title} logo`} />
      <h1 className="text-5xl font-bold ">{title}</h1>
      <h2>Peak Ratings</h2>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {data.map((game, index) => (
          <div
            key={index}
            className="p-8 rounded-lg flex-1 border-2 border-[#1e1e1e] bg-linear-to-br from-zinc-900 to-[#101010] text-center cursor-pointer"
          >
            <h1 className="text-4xl font-bold">{animatedRatings[index]}</h1>
            <h2 className="text-xl">{game.title}</h2>
          </div>
        ))}
      </div>

      <p className="py-4">
        To view my current {title.toLowerCase()} rating click -{" "}
        <Link href={link} target="_blank" className="text-[#00ffdd]">
          here
        </Link>
      </p>
    </div>
  );
}
