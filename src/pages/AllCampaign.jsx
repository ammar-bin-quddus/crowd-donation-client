import { useLoaderData } from "react-router-dom";
import CampaignTable from "../components/CampaignTable";
import { useState } from "react";

const AllCampaign = () => {
  const campaignData = useLoaderData();

  const [campData, setCampData] = useState(campaignData);
  console.log(campData);

  const handleSort = () => {
    const sortedData = campData.sort((a, b) => a.amount - b.amount);
    console.log(sortedData)
    setCampData([...sortedData]);
  };

  //console.log(campaignData);

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="flex justify-end items-center my-4">
        <button onClick={handleSort} className="btn btn-neutral">
          Sort
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Created By</th>
              <th>Deadline</th>
              <th>Minimum Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-base-content">
            {campData.map((campaign, index) => (
              <CampaignTable
                key={campaign._id}
                index={index}
                campaign={campaign}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
