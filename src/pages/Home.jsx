import Banner from "../components/Banner";
import OurGoal from "../components/OurGoal";
import JoinUs from "../components/JoinUs";
import RunningCamp from "../components/RunningCamp";
import Map from "../components/Map";
import News from "../components/news/News";

const Home = () => {
  return (
    <div>
      <div className="w-full">
        <Banner />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <RunningCamp />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <OurGoal />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <News />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <JoinUs />
      </div>
      <div className="mt-6">
        <Map />
      </div>
    </div>
  );
};

export default Home;
