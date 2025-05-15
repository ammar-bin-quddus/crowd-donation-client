import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useMyCamp from "../hooks/useMyCamp";
import Loading from "../components/Loading";
import useMyDonation from "../hooks/useMyDonation";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, displayName, email } = user;
  const {campaigns, isLoading, error, refetch} = useMyCamp();
  const {donations} = useMyDonation();

  if(isLoading) {
    return <Loading />
  }

  if(error) {
    return <p>error in data fetching</p>
  }

  return (
    <div className="bg-gray-300 p-6 text-base-content">
      <div className="h-screen flex flex-col justify-between items-center w-full sm:w-2/3 bg-white p-8 shadow-lg rounded-md">
        <div className="text-center flex flex-col justify-center items-center gap-3">
          <div><img className="w-44 h-44 rounded-full" src={photoURL} alt="profile pic" /></div>
          <p className="text-xl sm:text-3xl font-semibold">{displayName}</p>
          <p className="text-lg sm:text-2xl">{email}</p>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className=""><p className="text-blue-950 font-bold text-3xl text-center">{campaigns?.length}</p><p>Total campaigns</p></div>
          <div className="divider divider-horizontal"></div>
          <div className=""><p className="text-blue-950 font-bold text-3xl text-center">{donations?.length}</p><p>Total donations</p></div>
          <div className="divider divider-horizontal"></div>
          <div className=""><p className="text-blue-950 font-bold text-3xl text-center">8.9</p><p>Ratings</p></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
