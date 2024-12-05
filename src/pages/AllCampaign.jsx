import { useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const campaignData = useLoaderData();

  console.log(campaignData);

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
            {campaignData.map((campaign, index) => (
              <tr key={campaign._id}>
                <th>{index + 1}</th>
                <td>{campaign.title}</td>
                <td>{campaign.email}</td>
                <td>{campaign.deadline}</td>
                <td>
                  <button className="btn btn-neutral btn-outline btn-sm">See More</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
