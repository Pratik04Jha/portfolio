'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <div className="swiper-container my-8 w-full flex justify-center items-center ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <SwiperSlide key={item} className="my-8">
            <Image src="/example sketch.jpeg" alt="" width={600} height={600} className="rounded-2xl" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
