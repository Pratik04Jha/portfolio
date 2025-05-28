export default function ColorfulButton({ children, className, ...props }) {
  return (
    <div className="relative group w-fit ">
      <div className="relative p-[3px] sm:p-[4px] md:p-[5px] px-[6px] sm:px-[8px] md:px-[10px] rounded-[100px] overflow-hidden">
        <div className="absolute -inset-100 z-0 rounded-[100px] bg-[conic-gradient(from_0deg,red,orange,yellow,green,cyan,blue,violet,red)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow pointer-events-none" />

        <button className="changed relative overflow-hidden text-sm sm:text-base md:text-lg lg:text-2xl py-6 px-16 sm:py-4 sm:px-20 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center z-20">
          <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-30 text-white mix-blend-difference whitespace-nowrap ">
            Explore
          </span>
        </button>
      </div>
    </div>
  );
}
