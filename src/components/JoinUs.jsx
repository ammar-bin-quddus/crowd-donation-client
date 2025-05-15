import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const JoinUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-center text-2xl font-bold text-base-content">Join Our Community</h1>
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
            <span className="text-lg font-semibold">Description: </span>At Crowdcube, we
            believe in the power of community to transform dreams into reality.
            By joining us, you become part of a network that celebrates
            innovation, compassion, and collaboration. Whether you're a creator
            looking to fund your vision or a supporter eager to make a
            difference, there’s a place for you here.
          </p>
          <div>
            <h3 class="text-lg font-bold">Benefits of Joining:</h3>
            <div class="mb-2">
              <p class="font-semibold">For Campaigners:</p>
              <ul class="list-disc list-inside ml-4">
                <li>Launch and manage campaigns effortlessly.</li>
                <li>Access resources to maximize your fundraising success.</li>
                <li>
                  Connect with a global audience that believes in your vision.
                </li>
              </ul>
            </div>
            <div>
              <p class="font-semibold">For Supporters:</p>
              <ul class="list-disc list-inside ml-4">
                <li>Discover diverse and inspiring projects to support.</li>
                <li>
                  Contribute to meaningful causes and track their progress.
                </li>
                <li>
                  Be part of a community that values impact and innovation.
                </li>
              </ul>
            </div>
          </div>
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
              <Link to="/register">
                <button className="btn btn-neutral btn-lg">Sign Up</button>
              </Link>
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
              <Link to="/campaigns">
                <button className="btn btn-neutral btn-lg">Explore Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
