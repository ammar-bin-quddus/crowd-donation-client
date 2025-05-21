import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { Outlet } from "react-router-dom";
import SideBar from "../sidebar/SideBar";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* <div className="fixed top-0 left-0 z-50 w-full">
            <Nav />
          </div> */}

          <div className="flex">
            <div className="fixed top-0 left-0 z-50">
              <SideBar open={open} setOpen={setOpen} />
            </div>

            <div
              className={`duration-300 ${
                open ? "sm:w-[calc(100%-288px)]" : "w-[calc(100%-80px)]"
              } ${open ? "sm:ml-[288px]" : "ml-[80px]"}`}
            >
              <main className="flex-1">
                <Outlet open={open} />
              </main>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
