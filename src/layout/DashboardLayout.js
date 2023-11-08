import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/ContextProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Dashboard from "../Pages/Dashboard/Dashboard";
import NewNav from "../Shared/Navbar/NewNav";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller, sellerLoading] = useSeller(user.email);
  const [isAdmin, adminLoading] = useAdmin(user.email);
  return (
    <div>
      <NewNav></NewNav>
      {adminLoading || sellerLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="font-semibold">Loading..</span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <div className="flex mt-5 mb-2 gap-2 md:justify-center">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-outline btn-sm drawer-button lg:hidden ml-3 mb-2"
              >
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
              <h1 className="text-2xl font-bold text-center">
                Welcome to Dashboard
              </h1>
            </div>

            <div className="p-4">
              <Outlet></Outlet>
            </div>
          </div>

          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu min-h-full pt-2 md:p-4 w-80 bg-base-200 text-base-content">
              {isAdmin?.role === "admin" ? (
                <h1 className="text-xl font-semibold text-center p-2">
                  Admin Dashboard
                </h1>
              ) : (
                <h1 className="text-xl font-semibold text-center p-2">
                  User Dashboard
                </h1>
              )}

              {isSeller?.role === "seller" && (
                <>
                  <li className="bg-cyan-300 md:p-2 font-semibold">
                    <Link to="/dashboard/addProduct">Add A product</Link>
                  </li>
                  <li className="bg-cyan-300 md:p-2 font-semibold rounded-sm">
                    <Link to="/dashboard/myProducts">My Products</Link>
                  </li>
                </>
              )}
              {isAdmin?.role === "admin" ? (
                <>
                  <li className="bg-cyan-300 p-2 font-bold rounded-sm">
                    <Link to="/dashboard/allBuyers">All Buyers</Link>
                  </li>
                  <li className="bg-cyan-300 md:p-2 font-semibold rounded-sm">
                    <Link to="/dashboard/allSellers">All Sellers</Link>
                  </li>
                </>
              ) : (
                ""
              )}
              {isAdmin?.role !== "admin" && isSeller?.role !== "seller" && (
                <li className="bg-cyan-300 md:p-2 font-semibold rounded-sm">
                  <Link to="/dashboard/myorders">My Orders</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
