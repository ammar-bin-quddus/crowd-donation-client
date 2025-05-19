import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import SideBar from "../sidebar/SideBar";

const Dashboard = () => {
  const { loading } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col">
          <div className="fixed top-0 left-0 z-50 w-full">
            <Nav />
          </div>

          <div className="flex">
            <div className="fixed top-0 left-0 z-50 h-[calc(100%-80px)] mt-[80px]">
              <SideBar open={open} setOpen={setOpen} />
            </div>

            <div
              className={`h-[calc(100%-80px)] mt-[80px] duration-300 flex flex-col max-sm:w-[calc(100%-80px)] max-sm:ml-[80px] ${
                open ? "w-[calc(100%-288px)]" : "w-[calc(100%-80px)]"
              } ${open ? "sm:ml-[288px]" : "sm:ml-[80px]"}`}
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
