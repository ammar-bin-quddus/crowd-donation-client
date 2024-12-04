import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
  const { handleLogOut, user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/campaigns">All Campaign</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addCampaign">Add New Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/myCampaign">My Campaign</NavLink>
          </li>
          <li>
            <NavLink to="/myDonations">My Donations</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] gap-2 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="text-xl flex justify-center items-center gap-2">
          <img className="w-14 h-12 rounded-md" src={logo} alt="logo" />
          <p className="font-extrabold">
            CROWD<span className="text-[#308FB5]">CUBE</span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <div>
              <img className="w-12 h-12 rounded-full" src={user?.photoURL} />
            </div>
            <button
              onClick={handleLogOut}
              className="btn btn-neutral text-white"
            >
              Log Out
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-neutral">
              Login
            </Link>
            <Link to="/register" className="btn btn-neutral">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
