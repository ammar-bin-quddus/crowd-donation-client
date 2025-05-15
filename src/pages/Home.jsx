import Banner from "../components/Banner";
import OurGoal from "../components/OurGoal";
import JoinUs from "../components/JoinUs";
import RunningCamp from "../components/RunningCamp";

const Home = ({ open }) => {
  return (
    <div className="mb-8">
      <div className="w-full mb-6">
        <Banner />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <RunningCamp />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <OurGoal />
      </div>
      <div className="w-11/12 mx-auto my-6">
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
