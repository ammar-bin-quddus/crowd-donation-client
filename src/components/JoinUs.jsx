import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const JoinUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-center text-2xl font-bold">Join Our Community</h1>
        <h2 className="max-md:text-lg md:text-2xl text-[#308FB5] font-extrabold">
          <Typewriter
            words={[
              "Collaborate, support, and inspire.",
              "Together, we make ideas happen.",
            ]}
            loop={true}
            cursor
            cursorStyle="."
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-6">
        <div className="w-full md:w-1/2 bg-orange-200 p-4 flex flex-col justify-center gap-3 items-start rounded-md">
          <p>
            <span className="font-semibold">Description: </span>At Crowdcube, we
            believe in the power of community to transform dreams into reality.
            By joining us, you become part of a network that celebrates
            innovation, compassion, and collaboration. Whether you're a creator
            looking to fund your vision or a supporter eager to make a
            difference, there’s a place for you here.
          </p>
          <p>
            <span className="font-semibold">Benefits of Joining: </span>
            <ul>
              <li>
                For Campaigners:
                <ul className="list-disc text-sm">
                  <li className="ml-3">
                    Launch and manage campaigns effortlessly.
                  </li>
                  <li className="ml-3">
                    Access resources to maximize your fundraising success.
                  </li>
                  <li className="ml-3">
                    Connect with a global audience that believes in your vision.
                  </li>
                </ul>
              </li>
              <li>
                For Supporters:
                <ul className="list-disc text-sm">
                  <li className="ml-3">
                    Discover diverse and inspiring projects to support.
                  </li>
                  <li className="ml-3">
                    Contribute to meaningful causes and track their progress.
                  </li>
                  <li className="ml-3">
                    Be part of a community that values impact and innovation.
                  </li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-center items-center gap-3">
            <div>
              <DotLottieReact
                className="w-28 h-24"
                src="./signup.json"
                loop
                autoplay
              />
            </div>
            <div>
                <Link to='/register'><button className="btn btn-neutral btn-lg">Sign Up</button></Link>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3">
            <div>
              <DotLottieReact
                className="w-28 h-24"
                src="./explore.json"
                loop
                autoplay
              />
            </div>
            <div>
                <Link to='/campaigns'><button className="btn btn-neutral btn-lg">Explore Now</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
