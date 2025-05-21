import { Swiper, SwiperSlide } from "swiper/react";

// import images

import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpeg";
import banner3 from "../assets/images/banner3.webp";
import banner4 from "../assets/images/banner4.webp";
import banner5 from "../assets/images/banner5.jpg";
import banner6 from "../assets/images/banner6.jpg";
import banner7 from "../assets/images/banner7.webp";
import banner8 from "../assets/images/banner8.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./bannercss/styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

export default function App() {
  return (
    <div className="h-[520px] w-full relative">
      <div className="absolute left-0 top-0 w-full h-full flex justify-center items-center z-10 bg-black bg-opacity-50">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          <Typewriter
            words={["Welcome To CROWDCUBE"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={90}
            delaySpeed={1500}
          />
        </h1>
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
            src={banner1}
            alt="banner1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner2}
            alt="banner2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner3}
            alt="banner3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner4}
            alt="banner4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner5}
            alt="banner5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner6}
            alt="banner6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner7}
            alt="banner7"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={banner8}
            alt="banner8"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
