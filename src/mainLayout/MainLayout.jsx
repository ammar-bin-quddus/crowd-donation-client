import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  // className={`min-h-screen duration-300 flex flex-col max-sm:w-[calc(100%-80px)] max-sm:ml-[80px] ${
  //             open ? "w-[calc(100%-288px)]" : "w-[calc(100%-80px)]"
  //           } ${open ? "sm:ml-[288px]" : "sm:ml-[80px]"}`}

  return (
    <div className="">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="sticky top-0 left-0 z-50">
            <Nav />
          </div>

          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainLayout;
