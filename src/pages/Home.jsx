import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Banner from '../components/Banner';
import OurGoal from "../components/OurGoal";
import JoinUs from "../components/JoinUs";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="flex justify-center items-center gap-3">
        <h1 className="text-center text-2xl font-semibold">Welcome To CROWDCUBE</h1>
        <h2 className="text-2xl text-[#308FB5] font-extrabold">
          <Typewriter
            words={["Empower Ideas", "Support Innovations", "Fund Dreams"]}
            loop={true}
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <div className="my-6">
      <Banner />
      </div>
      <div className="my-6">
        <OurGoal />
      </div>
      <div className="my-6">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
