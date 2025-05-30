"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import "../../app/(links)/artGallery/cardsStyle.css";
import "swiper/css";
import "swiper/css/effect-cards";

const slidesData = [
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
  { imgSrc: "/example sketch.jpeg" },
];

export default function SwiperSlider() {
  return (
    <div className="relative z-0 ">
      <Swiper
        effect={"cards"}
        loop={true}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper h-200 w-180"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex justify-center items-center relative">
              <Image
                src={slide.imgSrc}
                alt=""
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute -z-1 h-full w-full bg-[rgba(75,219,255,0.15)] blur-3xl top-0 left-0" />
    </div>
  );
}
