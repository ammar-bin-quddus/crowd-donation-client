import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./news.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const News = () => {
  const newsApi = [
    {
      date: "2025-05-20",
      writer: "Sana Ahmed",
      heading: "Crowdcube Crosses $1M in Donations for Local Causes",
    },
    {
      date: "2025-05-18",
      writer: "Jason Lee",
      heading: "Community Rallies to Fund Emergency Medical Campaign",
    },
    {
      date: "2025-05-15",
      writer: "Fatima Chowdhury",
      heading: "New Features Launched on Crowdcube for Campaign Creators",
    },
    {
      date: "2025-05-12",
      writer: "David Khan",
      heading: "Student Startup Raises $50K in 48 Hours Through Crowdcube",
    },
    {
      date: "2025-05-10",
      writer: "Lina Rahman",
      heading: "Crowdcube Partners with NGOs to Support Rural Healthcare",
    },
    {
      date: "2025-05-08",
      writer: "Alex Hossain",
      heading: "Top 5 Most Successful Crowdfunding Campaigns of the Month",
    },
    {
      date: "2025-05-05",
      writer: "Meher Afroz",
      heading: "Crowdcube Introduces AI Tools to Boost Campaign Reach",
    },
    {
      date: "2025-05-03",
      writer: "Tariq Hasan",
      heading: "Local Artist Raises Funds for Community Art Space",
    },
    {
      date: "2025-05-01",
      writer: "Nadia Karim",
      heading: "Monthly Donor Rewards Program Launches on Crowdcube",
    },
  ];

  return (
    <section className="px-4 py-8 h-[70vh]">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-base-content">
        News & Articles
      </h2>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          640: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {newsApi.map((news, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-gray-100 pl-6 pt-6 flex flex-col items-start justify-between text-left gap-6 h-full">
              <p className="text-xs text-white bg-blue-800 p-1">{news?.date}</p>
              <p className="flex items-center gap-2 text-sm font-extralight text-gray-600">
                <FaUser />
                {news?.writer}
              </p>
              <h1 className="text-3xl font-semibold">{news?.heading}</h1>
              <button className="bg-white p-4 hover:bg-gray-800 hover:text-white">
                <FaArrowRight />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default News;
