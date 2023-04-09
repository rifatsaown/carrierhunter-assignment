import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-primary-focus text-black lg:px-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className={"text-white"} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-white"} to="/Statistics">
                  Statistics
                </NavLink>
              </li>
              <li tabIndex={0}>
                <NavLink
                  className={"text-white justify-between"}
                  to="applied-jobs"
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink className={"text-white"} to="blog">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Career Hunter
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Statistics">Statistics</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to="applied-jobs">Applied Jobs</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-black sm:visible invisible ">
            Start Appling
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
