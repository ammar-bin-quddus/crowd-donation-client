import { useLoaderData } from "react-router-dom";
import CampaignTable from "../components/CampaignTable";

const AllCampaign = () => {
  const campaignData = useLoaderData();

  //console.log(campaignData);

  return (
    <div className="w-11/12 mx-auto my-8">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Created By</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaignData.map((campaign, index) => <CampaignTable key={campaign._id} index={index} campaign={campaign} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
