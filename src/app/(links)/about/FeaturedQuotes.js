"use client"; // Add this since Swiper uses client-side features

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';


export const quotes = [
  {
    text: "It is not the answer that enlightens, but the question.",
    author: "Eugène Ionesco",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "Success is going from failure to failure without losing enthusiasm.",
    author: "Winston Churchill",
  },
  {
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
  },
];

const FeaturedQuotes = () => {
  return (
    <div className="w-[50%]  mx-auto px-2">
      <Swiper
        modules={[ Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        loop={true}
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index}>
            <div className="border-1 border-zinc-700   w-full cursor-grab p-6 rounded-xl  text-center">
              <blockquote className="text-xl italic font-medium text-white">
                {quote.text}
              </blockquote>
              <p className="mt-4 text-white ">
                - {quote.author}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedQuotes;