import Image from "next/image";
import Head from "next/head";

const artData = [
  {
    imgSrc: "/example-sketch.jpeg",
    title: "Happy Guy | Inside Sad",
    description: "A poignant exploration of the dichotomy between outward appearances and inner emotions. This piece captures the contrast between the smiling facade we show the world and the complex feelings we keep hidden.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    imgSrc: "/abstract-composition.jpg",
    title: "Abstract Composition #42",
    description: "Vibrant colors and dynamic shapes interplay in this energetic abstract piece. The artist explores the relationship between form and space through bold geometric patterns.",
    year: 2022,
    medium: "Acrylic on canvas"
  },
  {
    imgSrc: "/urban-landscape.jpg",
    title: "Urban Twilight",
    description: "The quiet magic of city streets at dusk comes alive in this atmospheric work. Subtle lighting and careful composition evoke the transitional moment between day and night.",
    year: 2024,
    medium: "Oil on wood panel"
  },{
    imgSrc: "/example-sketch.jpeg",
    title: "Happy Guy | Inside Sad",
    description: "A poignant exploration of the dichotomy between outward appearances and inner emotions. This piece captures the contrast between the smiling facade we show the world and the complex feelings we keep hidden.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    imgSrc: "/abstract-composition.jpg",
    title: "Abstract Composition #42",
    description: "Vibrant colors and dynamic shapes interplay in this energetic abstract piece. The artist explores the relationship between form and space through bold geometric patterns.",
    year: 2022,
    medium: "Acrylic on canvas"
  },
  {
    imgSrc: "/urban-landscape.jpg",
    title: "Urban Twilight",
    description: "The quiet magic of city streets at dusk comes alive in this atmospheric work. Subtle lighting and careful composition evoke the transitional moment between day and night.",
    year: 2024,
    medium: "Oil on wood panel"
  },{
    imgSrc: "/example-sketch.jpeg",
    title: "Happy Guy | Inside Sad",
    description: "A poignant exploration of the dichotomy between outward appearances and inner emotions. This piece captures the contrast between the smiling facade we show the world and the complex feelings we keep hidden.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    imgSrc: "/abstract-composition.jpg",
    title: "Abstract Composition #42",
    description: "Vibrant colors and dynamic shapes interplay in this energetic abstract piece. The artist explores the relationship between form and space through bold geometric patterns.",
    year: 2022,
    medium: "Acrylic on canvas"
  },
  {
    imgSrc: "/urban-landscape.jpg",
    title: "Urban Twilight",
    description: "The quiet magic of city streets at dusk comes alive in this atmospheric work. Subtle lighting and careful composition evoke the transitional moment between day and night.",
    year: 2024,
    medium: "Oil on wood panel"
  },{
    imgSrc: "/example-sketch.jpeg",
    title: "Happy Guy | Inside Sad",
    description: "A poignant exploration of the dichotomy between outward appearances and inner emotions. This piece captures the contrast between the smiling facade we show the world and the complex feelings we keep hidden.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    imgSrc: "/abstract-composition.jpg",
    title: "Abstract Composition #42",
    description: "Vibrant colors and dynamic shapes interplay in this energetic abstract piece. The artist explores the relationship between form and space through bold geometric patterns.",
    year: 2022,
    medium: "Acrylic on canvas"
  },
  {
    imgSrc: "/urban-landscape.jpg",
    title: "Urban Twilight",
    description: "The quiet magic of city streets at dusk comes alive in this atmospheric work. Subtle lighting and careful composition evoke the transitional moment between day and night.",
    year: 2024,
    medium: "Oil on wood panel"
  },{
    imgSrc: "/example-sketch.jpeg",
    title: "Happy Guy | Inside Sad",
    description: "A poignant exploration of the dichotomy between outward appearances and inner emotions. This piece captures the contrast between the smiling facade we show the world and the complex feelings we keep hidden.",
    year: 2023,
    medium: "Charcoal on paper"
  },
  {
    imgSrc: "/abstract-composition.jpg",
    title: "Abstract Composition #42",
    description: "Vibrant colors and dynamic shapes interplay in this energetic abstract piece. The artist explores the relationship between form and space through bold geometric patterns.",
    year: 2022,
    medium: "Acrylic on canvas"
  },
  {
    imgSrc: "/urban-landscape.jpg",
    title: "Urban Twilight",
    description: "The quiet magic of city streets at dusk comes alive in this atmospheric work. Subtle lighting and careful composition evoke the transitional moment between day and night.",
    year: 2024,
    medium: "Oil on wood panel"
  },
];

const truncateText = (text, limit = 100) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + "...";
};

export default function ArtGallery() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <Head>
        <title>Art Gallery | Contemporary Works</title>
        <meta name="description" content="Explore our collection of contemporary artworks" />
      </Head>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Art Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artData.map((artwork, index) => (
            <div 
              key={index}
              className="group cursor-pointer p-4 overflow-hidden relative bg-black rounded-lg  shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative z-0  bg-black ">
                <Image
                  src="/example sketch.jpeg" // Placeholder, replace with artwork.imgSrc
                  alt={artwork.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                      />
                      
                      <Image
                  src="/example sketch.jpeg" // Placeholder, replace with artwork.imgSrc
                  alt={artwork.title}
                  width={600}
                  height={450}
                  className=" absolute top-0 -z-1 left-0 blur-3xl w-full h-full object-cover  transition-transform duration-500 rounded-xl"
                />
              </div>
              
              <div className="p-6 text-center">
                <div className="flex justify-between items-center flex-col ">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {artwork.title}
                  </h2>
                  <span className="text-sm text-white">{artwork.year}</span>
                </div>
                
                
                <p className="text-white">
                  {truncateText(artwork.description, 150)}
                </p>
                
                {/* <div className="mt-4">
                  <button className="text-md font-medium text-black cursor-pointer bg-cyan-400 px-4 py-1 rounded-lg transition-colors">
                     View Details
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
        
    
      </div>
    </div>
  );
}