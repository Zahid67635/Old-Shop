import React, { useContext } from "react";
import { FaChair } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/ContextProvider";

const NewNav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="">
      <div className="navbar bg-base-300">
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
            {/* Phone view */}
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52 z-50"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              {user?.email ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>

                  <Link to="/" className="ml-4 mt-2">
                    <button
                      onClick={logOut}
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:px-5 px-3 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                    >
                      SIGNOUT
                    </button>
                  </Link>
                </>
              ) : (
                <ul className="bg-base-100">
                  <li>
                    <Link to="/sellerSignUp">Seller</Link>
                  </li>
                  <li>
                    <Link to="buyerSignUp">Buyer</Link>
                  </li>
                </ul>
              )}
            </ul>
          </div>

          <a href="/" className="flex items-center">
            <h2 className="text-4xl">
              <FaChair></FaChair>
            </h2>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              OLD-SHOP
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="mx-1">
              <Link to="/blog">Blog</Link>
            </li>
            {user?.email ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p className="mr-2 text-sm flex items-center font-bold">
                Welcome, {user.displayName}
              </p>
              <Link to="/">
                <button
                  onClick={logOut}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block"
                >
                  SIGNOUT
                </button>
              </Link>
            </>
          ) : (
            <>
              <div className="dropdown dropdown-end hidden md:block mr-2">
                <label tabIndex={0} className="btn m-1">
                  SignUp
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/sellerSignUp">Seller</Link>
                  </li>
                  <li>
                    <Link to="buyerSignUp">Buyer</Link>
                  </li>
                </ul>
              </div>
              <Link to="/login" className="mr-2">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SIGNIN
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewNav;
