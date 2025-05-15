import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyCampaignTable from "../components/MyCampaignTable";

const MyCampaign = () => {
  const myCampaignData = useLoaderData();
  //console.log(myCampaignData);
  const [myCampData, setMyCampData] = useState(myCampaignData);

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Minimum Amount</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-base-content">
            {myCampaignData.map((myCampaign, index) => (
              <MyCampaignTable
                key={myCampaign._id}
                index={index}
                myCampaign={myCampaign}
                myCampData={myCampData}
                setMyCampData={setMyCampData}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCampaign;
