import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMyDonation = () => {
  const {user} = useContext(AuthContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["myDonations", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://crowd-donation-server.vercel.app/myDonations/${user?.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });
  return { donations: data, isLoading, error, refetch };
};

export default useMyDonation;
