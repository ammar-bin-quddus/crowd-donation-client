import React, { useEffect, useState } from "react";
import RunningCard from "./RunningCard";

const RunningCamp = () => {
  const [allData, setAllData] = useState([]);
  const [runningData, setRunningData] = useState([]);
  // console.log(allData)

  const currentDate = new Date();

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await fetch(
          "https://crowd-donation-server.vercel.app/addCampaign"
        );
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (allData.length > 0) {
      const filteredData = allData.filter(
        (item) => new Date(item.deadline) > currentDate
      );
      setRunningData(filteredData);
    }
  }, [allData]);

  console.log(runningData)

  return (
    <div className="w-11/12 mx-auto my-8">
      <p className="text-2xl text-center text-base-content font-bold">Running Campaigns</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          runningData.map((running) => <RunningCard key={running._id} running={running} />)
        }
      </div>
    </div>
  );
};

export default RunningCamp;
