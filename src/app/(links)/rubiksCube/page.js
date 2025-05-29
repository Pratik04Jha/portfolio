import Image from "next/image";

const cubeSections = [
  {
    title: "Cubes",
    types: ["1x1", "2x2", "3x3", "4x4", "5x5"],
    image: "https://via.placeholder.com/150?text=Cubes",
  },
  {
    title: "Pyraminx",
    types: ["2x2", "3x3"],
    image: "https://via.placeholder.com/150?text=Pyraminx",
  },
  {
    title: "Mirror Cubes",
    types: ["2x2", "3x3", "4x4"],
    image: "https://via.placeholder.com/150?text=Mirror+Cube",
  },
  {
    title: "Megaminx",
    types: ["Standard"],
    image: "https://via.placeholder.com/150?text=Megaminx",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen px-6 py-10 bg-zinc-950 text-white pt-20">
      {cubeSections.map((section, idx) => (
        <div key={idx} className="mb-14 w-full items-center flex flex-col">
          <h2 className="text-3xl md:text-5xl  mb-6  text-white font-bold  bg-clip-text">
            {section.title}
          </h2>
          <div className="flex  gap-6 pb-4">
            {section.types.map((type, i) => (
              <div
                key={i}
                className="w-60 h-80 cursor-pointer rounded-2xl p-4 border border-zinc-900 flex items-center justify-center flex-col gap-2"
              >
                <Image
                  src="/cube.png"
                  width={100}
                  height={100}
                  alt={`${type} ${section.title}`}
                  className="w-full  object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-center">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
