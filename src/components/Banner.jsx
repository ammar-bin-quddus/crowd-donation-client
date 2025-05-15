import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannercss/styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function App() {
  return (
    <div className="h-[480px] w-full relative">
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center z-10 bg-black bg-opacity-50">
        <h1 className="text-4xl text-center text-white font-bold">Welcome To CROWDCUBE</h1>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images.deccanchronicle.com/dc-Cover-579av3see9tlg2rkv6ikuq5eb4-20190907033112.Medi.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.squarespace-cdn.com/content/v1/64a5e626ec1d391e9ea4ef5d/e75928bd-83b5-4737-8bed-3ff8c2df0bf4/Funding+%26+Fundraising.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i0.wp.com/glcoverage.com/wp-content/uploads/2024/06/tips-for-filmmakers-making-short-film-6fbc1a62-cover-photo.webp?fit=6000%2C3376&ssl=1"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.artnews.com/wp-content/uploads/2023/10/IN2509_014_CCCR-Press-Site-2000x1334-1.jpg?w=1200"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.hepper.com/wp-content/uploads/2022/08/veterinarian-giving-injection-to-a-cat_Africa-Studio_Shutterstock-e1676989806171.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.globalgiving.org/pfil/10113/ph_10113_88489.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://static.wixstatic.com/media/11062b_e6bdb51135924b5797b9284fd94167c2~mv2.jpeg/v1/fill/w_568,h_380,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_e6bdb51135924b5797b9284fd94167c2~mv2.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://riseuplabs.com/wp-content/uploads/2021/05/game-development-the-ultimate-guide-in-multiple-devices.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
