import React from "react";
import { useLoaderData } from "react-router-dom";
import MyDonateCard from "../components/MyDonateCard";

const MyDonations = () => {
  const myDonateData = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-base-content">
        {myDonateData.map((myDonate) => (
          <MyDonateCard key={myDonate._id} myDonate={myDonate} />
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
