import Page from "./(links)/programming/page";
import ProjectsPage from "./(links)/projects/page";
import Chess from "./(links)/chess/page";
import ContactPage from "./(links)/contact/page";
import TestimonialSlider from "./(links)/about/Testimonial";
import HeadingSvg from "@/components/svgs/HeadingSvg";

export default function Home() {

   

  return (
    <div className="h-full  w-full flex-col bg-[#101010] text-white flex items-center justify-center  relative ">
      <div className="z-10 relative h-screen justify-center  w-full text-center flex flex-col items-center ">
        <div className="inter font-semibold mb-6 bg-[#160f19] border-2  border-[#421A56] flex items-center justify-center gap-3 px-5 py-1 rounded-3xl ">
          <p>Pratik Jha Portfolio</p>
        </div>

        <h1 className="manrope text-7xl cursor-default   w-[40%]  text-center leading-20 bg-gradient-to-b from-white to-[#737374] bg-clip-text text-transparent">
          The Creator of Digital Empire
        </h1>

        <p className="text-lg sm:text-xl md:text-xl w-[30%] text-white max-w-2xl my-5 mx-auto mb-8">
          I'm Pratik Jha - The creator, building my own digital world through code and design.
        </p>

        <div className="flex gap-6">
          <button className="w-32 cursor-pointer  bg-gradient-to-br from-[#60B2DC] via-[#54367C] to-[#C358F6] py-3 rounded-lg border-1 border-zinc-700">
            Projects
          </button>
          <button className="w-32 cursor-pointer  py-3 rounded-lg border-1 border-zinc-700">
            Profile
          </button>
        </div>
      </div>

      <Page />

      <ProjectsPage />

      <Chess />

      <div className="flex flex-col items-center w-full gap-5 mt-50 justify-center">
        <HeadingSvg />
        <h1 className="text-3xl md:text-5xl cursor-default  font-normal w-[30%] mb-10 pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
          Don't litsen to me, see what other say
        </h1>
      </div>

      <TestimonialSlider />

      <ContactPage className="" />
    </div>
  );
}
