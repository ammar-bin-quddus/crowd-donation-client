import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseRunningCampaigns = () => {
  const {
    data: campaigns = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["runningCampaigns"],
    queryFn: async () => {
      const res = await axios.get(
        "https://crowd-donation-server.vercel.app/runningCampaigns"
      );
      return res.data;
    },
  });

  return { campaigns, isLoading, error };
};

export default UseRunningCampaigns;
