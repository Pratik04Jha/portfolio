import Page from "./(links)/programming/page";
import ProjectsPage from "./(links)/projects/page";
import Chess from "./(links)/chess/page";
import ContactPage from "./(links)/contact/page";
import TestimonialSlider from "./(links)/about/Testimonial";
import HeadingSvg from "@/components/svgs/HeadingSvg";

export default function Home() {
  return (
    <div className="h-full w-full flex-col flex items-center justify-center relative ">
      <div
        id="home"
        className="z-10 min-h-screen relative h-screen justify-center w-full text-center flex flex-col items-center"
      >
        <div
          className="inter font-semibold mb-6 border-2 flex items-center justify-center gap-3 px-5 py-1 rounded-3xl
      border-[#421A56]"
        >
          <p>Pratik Jha Portfolio</p>
        </div>

        <h1
          className="manrope text-7xl cursor-default w-[40%] text-center leading-20 
      bg-gradient-to-b from-black to-[#555] dark:from-white dark:to-[#737374] 
      bg-clip-text text-transparent"
        >
          The Creator of Digital Empire
        </h1>

        <p className="text-lg sm:text-xl md:text-xl w-[30%] max-w-2xl my-5 mx-auto mb-8 ">
          I am Pratik Jha - The creator, building my own digital world through
          code and design.
        </p>

        <div className="flex gap-6">
          <button className="w-32 cursor-pointer bg-gradient-to-br from-[#60B2DC] via-[#54367C] to-[#C358F6] py-3 rounded-lg border border-zinc-300 dark:border-zinc-700">
            Projects
          </button>
          <button className="w-32 cursor-pointer py-3 rounded-lg border border-zinc-300 dark:border-zinc-700">
            Profile
          </button>
        </div>
      </div>

      <Page />
      <ProjectsPage />
      <Chess id="chess" />

      <div
        id="testimonial"
        className="min-h-20 flex flex-col items-center w-full gap-5 mt-50 justify-center"
      >
        <HeadingSvg />
        <h1
          className="text-3xl md:text-5xl cursor-default font-normal w-[30%] mb-10 pb-5 text-center leading-14 
      bg-gradient-to-t from-black to-[#00000080] dark:from-white dark:to-[#ffffffb5] 
      bg-clip-text text-transparent"
        >
          Do not listen to me, see what others say
        </h1>
      </div>

      <TestimonialSlider />
      <ContactPage />
    </div>
  );
}
