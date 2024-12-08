import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const OurGoal = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Our Goal</h1>
      <div className="flex flex-col md:flex-row justify-between items-center my-6">
        <div className="w-full md:w-1/2 bg-orange-200 p-4 flex flex-col justify-center gap-3 items-start rounded-md">
          <div>
            <DotLottieReact
              className="w-16 h-12"
              src="./arrow.json"
              loop
              autoplay
            />
          </div>
          <p>
            At Crowdcube, our goal is to empower dreamers, innovators, and
            changemakers by connecting them with the support they need to turn
            their visions into reality. We aim to create a platform where ideas
            thrive, communities unite, and meaningful projects find life through
            collective contributions. Whether it's launching a startup,
            supporting a personal cause, or fueling a creative idea, we are
            committed to fostering innovation, compassion, and collaboration. By
            bridging the gap between passionate individuals and generous
            supporters, we strive to build a brighter future where everyone has
            the opportunity to achieve their goals and make a lasting impact.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <DotLottieReact
            src="./goal.json"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default OurGoal;
