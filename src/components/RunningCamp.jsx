import { Link } from "react-router-dom";
import UseRunningCampaigns from "../hooks/UseRunningCampaigns";

const RunningCamp = () => {
  const { campaigns, isLoading, error } = UseRunningCampaigns();
  console.log(campaigns)

  if (isLoading)
    return <p className="text-center">Loading running campaigns...</p>;
  if (error)
    return (
      <p className="text-center text-red-500">Failed to load campaigns.</p>
    );

  return (
    <section className="px-4 py-8 bg-base-100 text-base-content">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Running Campaigns
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 transition hover:shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 dark:text-white hover:text-yellow-600">
              {campaign.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Goal: <span className="font-medium">${campaign.goalAmount}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              Raised:{" "}
              <span className="font-medium">${campaign.donatedAmount}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Deadline: {new Date(campaign.deadline).toLocaleDateString()}
            </p>
            <Link to={`/campaigns/${campaign._id}`}>
              <button className="btn btn-outline btn-sm w-full">
                See More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RunningCamp;
