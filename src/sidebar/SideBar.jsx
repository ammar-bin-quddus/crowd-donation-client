import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  FaArrowLeft,
  FaBullhorn,
  FaDonate,
  FaHome,
  FaList,
} from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { AiOutlineLogin } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

const SideBar = ({open, setOpen}) => {
  const { handleLogOut, user } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li className="hover:bg-white hover:text-black flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4">
        <NavLink to="/dashboard">
          <FaHome />
        </NavLink>
        <NavLink
          className={`${open ? "block" : "hidden"} origin-left duration-200`}
          to="/dashboard"
        >
          Home
        </NavLink>
      </li>
      {user && (
        <>
          <li className="hover:bg-white hover:text-black flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4">
            <NavLink to="addCampaign">
              <MdAddBox />
            </NavLink>
            <NavLink
              className={`${
                open ? "block" : "hidden"
              } origin-left duration-200`}
              to="addCampaign"
            >
              Add New Campaign
            </NavLink>
          </li>
          <li className="hover:bg-white hover:text-black flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4">
            <NavLink to={`myCampaign/${user?.email}`}>
              <FaBullhorn />
            </NavLink>
            <NavLink
              className={`${
                open ? "block" : "hidden"
              } origin-left duration-200`}
              to={`myCampaign/${user?.email}`}
            >
              My Campaign
            </NavLink>
          </li>
          <li className="hover:bg-white hover:text-black flex rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm items-center gap-x-4">
            <NavLink to={`myDonations/${user?.email}`}>
              <FaDonate />
            </NavLink>
            <NavLink
              className={`${
                open ? "block" : "hidden"
              } origin-left duration-200`}
              to={`myDonations/${user?.email}`}
            >
              My Donations
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-[#308FB5] h-screen p-5  pt-8 relative duration-300 flex flex-col justify-between`}
    >
      <FaArrowLeft
        className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 text-sm text-white border-[#308FB5] bg-[#308FB5]
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div>
        <div
          className={`flex flex-wrap gap-3 ${
            !open && "justify-center"
          } items-center`}
        >
          <img
            src={logo}
            className={`w-8 h-8 rounded-md cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <p className={`font-extrabold ${open ? "block" : "hidden"}`}>
            CROWD<span className="text-white">CUBE</span>
          </p>

          {/* dark mood toggle */}

          <label className="swap swap-rotate text-white">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={handleToggle}
              type="checkbox"
              value="synthwave"
              checked={theme === "dark"}
            />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
        <ul className="pt-6">{links}</ul>
      </div>
      <div>
        {user ? (
          <div
            className={`${open ? "flex" : "flex flex-col"} items-center gap-2`}
          >
            <div>
              <img className="w-10 h-10 rounded-full" src={user?.photoURL} />
            </div>
            <button
              onClick={handleLogOut}
              className="text-2xl text-white font-bold hover:bg-white hover:text-black rounded-full p-2"
            >
              <RiLogoutCircleLine />
            </button>
          </div>
        ) : (
          <div className={`flex ${!open && "flex-col"} items-center gap-7`}>
            <Link
              to="/login"
              className="text-3xl text-white font-bold hover:bg-white hover:text-black rounded-full p-3"
            >
              <AiOutlineLogin />
            </Link>
            <Link
              to="/register"
              className="text-3xl text-white font-bold hover:bg-white hover:text-black rounded-full p-3"
            >
              <IoPersonAdd />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
