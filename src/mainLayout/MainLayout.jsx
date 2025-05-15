import { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import SideBar from "../sidebar/SideBar";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const [open, setOpen] = useState(true);

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex">
          <div className="fixed top-0 left-0 h-screen z-50">
            <SideBar open={open} setOpen={setOpen} />
          </div>

          <div
            className={`min-h-screen duration-300 flex flex-col max-sm:w-[calc(100%-80px)] max-sm:ml-[80px] ${
              open ? "w-[calc(100%-288px)]" : "w-[calc(100%-80px)]"
            } ${open ? "sm:ml-[288px]" : "sm:ml-[80px]"}`}
          >
            <main className="flex-1 pb-4">
              <Outlet open={open} />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
