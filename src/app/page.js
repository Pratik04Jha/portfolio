import ColorfulButton from "@/components/ui/ColorfulButton";
import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full bg-[#101010] text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="z-10 text-center flex flex-col items-center ">
        {/* <div className="relative w-[200px] h-[200px] mb-4 flex items-center justify-between"> */}
          {/* <div className="absolute inset-0 rounded-full top-0 left-0  bg-[conic-gradient(red,orange,yellow,green,blue,indigo,violet,red)] animate-spin-slow z-0"></div>
          <Image
            src="/Creator.jpg"
            width={192}
            height={192}
            alt="This is the image of the creator"
            className="rounded-full relative z-20 ml-1"
          />
        </div> */}

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight mb-4">
          Creator of Digital Empires
        </h1>
        <p className="text-lg sm:text-xl md:text-xl text-white max-w-2xl mx-auto mb-8">
          Architect of code. Visionary of virtual realms. I don’t just design
          websites - I engineer experiences, break boundaries, and leave echoes
          in the digital world. A mind wired to conquer, not conform.
        </p>
        <Link href="/projects">
          <ColorfulButton />
        </Link>
      </div>
      {/* <svg
        width="800"
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-0 w-full h-full z-1 pointer-events-none"
        style={{
          WebkitMaskImage: "radial-gradient( black, transparent )",
          maskImage: "linear-gradient(to bottom, transparent, black 500%)",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
        }}
      >
        <defs>
          <pattern
            id="tilePattern"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <rect width="40" height="40" fill="transparent" />
            <rect
              width="50"
              height="50"
              fill="none"
              stroke="#555"
              stroke-width="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tilePattern)" />
      </svg>
      <div className="absolute h-[40px] blur-[100px] animate-rainbow-stripe bg-[length:200%_100%] w-full top-[90%] z-1000 -inset-100  bg-[linear-gradient(to_left,red,orange,yellow,green,cyan,blue,violet,red)] opacity-100  pointer-events-none left-0 " /> */}
    </div>
  );
}
