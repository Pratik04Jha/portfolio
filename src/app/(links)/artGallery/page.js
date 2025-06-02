import ArtsCard from "./ArtsCard";
import App from "./SwiperArts";

const artData = [
  {
    title: "Starry Night",
    artistName: "Vincent van Gogh",
    date: "1889",
    type: "Oil on canvas",
    des: "An iconic swirling night sky over a quiet town, painted during van Gogh's stay at the asylum.",
    url: "/starry-night.jpg",
  },
  {
    title: "The Persistence of Memory",
    artistName: "Salvador Dalí",
    date: "1931",
    type: "Surrealist painting",
    des: "Famous for its melting clocks, symbolizing the fluidity and subjectivity of time.",
    url: "/persistence-of-memory.jpg",
  },
  {
    title: "Girl with a Pearl Earring",
    artistName: "Johannes Vermeer",
    date: "1665",
    type: "Portrait",
    des: "Often called the 'Mona Lisa of the North,' this painting captures a mysterious young woman.",
    url: "/pearl-earring.jpg",
  },
  {
    title: "The Great Wave off Kanagawa",
    artistName: "Hokusai",
    date: "1831",
    type: "Woodblock print",
    des: "A masterpiece of Japanese ukiyo-e, depicting a giant wave threatening boats near Mt. Fuji.",
    url: "/great-wave.jpg",
  },
  {
    title: "Guernica",
    artistName: "Pablo Picasso",
    date: "1937",
    type: "Cubist painting",
    des: "A powerful anti-war statement depicting the horrors of the bombing of Guernica during the Spanish Civil War.",
    url: "/guernica.jpg",
  },
  {
    title: "The Birth of Venus",
    artistName: "Sandro Botticelli",
    date: "1486",
    type: "Renaissance painting",
    des: "Depicts the goddess Venus emerging from the sea as a fully grown woman.",
    url: "/birth-of-venus.jpg",
  },
  {
    title: "Composition VIII",
    artistName: "Wassily Kandinsky",
    date: "1923",
    type: "Abstract",
    des: "A geometric exploration of color and form, representing Kandinsky's transition to pure abstraction.",
    url: "/composition-viii.jpg",
  },{
    title: "Composition VIII",
    artistName: "Wassily Kandinsky",
    date: "1923",
    type: "Abstract",
    des: "A geometric exploration of color and form, representing Kandinsky's transition to pure abstraction.",
    url: "/composition-viii.jpg",
  },{
    title: "Composition VIII",
    artistName: "Wassily Kandinsky",
    date: "1923",
    type: "Abstract",
    des: "A geometric exploration of color and form, representing Kandinsky's transition to pure abstraction.",
    url: "/composition-viii.jpg",
  },
];
export default function GalleryPage() {
  return (
    <main className="flex flex-col h-full bg-[#101010] items-center justify-center pt-20">
      <h1 className=" text-3xl md:text-5xl cursor-default font-normal w-[40%] pb-5 text-center leading-14 bg-gradient-to-t from-white to-[#ffffffb5] bg-clip-text text-transparent">
        Where emotions spill, and sketches heal the unseen
      </h1>
      <div className="border-1 border-zinc-700 flex items-center justify-center gap-3 px-5 py-1 rounded-3xl ">
        <div className="relative z-100 h-4 w-4">
          <div className="bg-[#52A8FF] top-[50%] left-[50%] -translate-1/2 absolute z-10 backgroundShadow rounded-full h-2 w-2"></div>
          <div className="absolute z-1 h-4 w-4 rounded-full bg-[#0F2F57]  "></div>
        </div>
        <p>Top Arts</p>
      </div>
      <App />

      <h1 className=" py-5 text-3xl md:text-5xl cursor-default font-normal heading  w-[50%] pb-10 text-center leading-14 bg-gradient-to-l from-white to-[#91E1FE] bg-clip-text text-transparent">
        Redefining artists expectations
      </h1>
      <div className="flex gap-5 flex-wrap justify-center w-full pb-10">
      {artData.map((items, index) => (
        <ArtsCard key={index} artdata={items} />
      ))}

      </div>
    </main>
  );
}
