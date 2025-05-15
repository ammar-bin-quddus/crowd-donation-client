import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { photoURL, displayName, email } = user;

  return (
    <div className="bg-gray-300 p-6 text-base-content">
      <div className="h-screen flex flex-col justify-start items-center w-full sm:w-2/3 bg-white p-8 shadow-lg rounded-md">
        <div className="text-center border-2 flex flex-col justify-center items-center gap-3">
          <div><img className="w-44 h-44 rounded-full" src={photoURL} alt="profile pic" /></div>
          <p className="text-xl sm:text-3xl font-semibold">{displayName}</p>
          <p className="text-lg sm:text-2xl">{email}</p>
        </div>
        <div>
          <div className=""></div>
          <div className="divider divider-horizontal"></div>
          <div className=""></div>
          <div className="divider divider-horizontal"></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
