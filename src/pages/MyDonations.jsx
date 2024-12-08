import React from "react";
import { useLoaderData } from "react-router-dom";
import MyDonateCard from "../components/MyDonateCard";

const MyDonations = () => {
  const myDonateData = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-8">
      <p className="font-bold text-3xl text-center">My Donations</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {myDonateData.map((myDonate) => (
          <MyDonateCard key={myDonate._id} myDonate={myDonate} />
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
