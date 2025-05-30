import SwiperGallery from "@/components/ui/SwiperGallery";
import AllArts from "./AllArts";

export default function GalleryPage() {
  return (
    <main className="flex flex-col h-full bg-linear-to-b from-[#101010] to-[#1b1b25] items-center justify-center pt-20">
      <h1 className=" text-3xl md:text-5xl cursor-default font-normal w-[40%] pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
        Where emotions spill, and sketches heal the unseen
      </h1>
      <div className="border-1 border-zinc-700 flex items-center justify-center gap-3 px-5 py-1 rounded-3xl mb-10">
        <div className="relative z-100 h-4 w-4">
          <div className="bg-[#52A8FF] top-[50%] left-[50%] -translate-1/2 absolute z-10 backgroundShadow rounded-full h-2 w-2"></div>
          <div className="absolute z-1 h-4 w-4 rounded-full bg-[#0F2F57]  "></div>
        </div>
        <p>Top Arts</p>
      </div>
      <SwiperGallery />

      <h1 className=" py-5 text-3xl md:text-5xl cursor-default font-normal heading  w-[50%] pb-10 text-center leading-14 bg-gradient-to-l from-white to-[#91E1FE] bg-clip-text text-transparent">
        Redefining developers experience
      </h1>
    </main>
  );
}
// #0F2F57
