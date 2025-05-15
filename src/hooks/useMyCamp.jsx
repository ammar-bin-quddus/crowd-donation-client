import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useMyCamp = () => {
    const {user} = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["myCampaigns", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://crowd-donation-server.vercel.app/myCampaign/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });
  return { campaigns: data, isLoading, error, refetch };
};

export default useMyCamp;
