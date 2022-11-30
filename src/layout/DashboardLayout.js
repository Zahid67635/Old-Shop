import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/ContextProvider';
import useSeller from '../hooks/useSeller';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isSeller] = useSeller(user.email)

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Dashboard></Dashboard>
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            isSeller.role === 'seller' ? <><li><Link to='/dashboard/addProduct'>Add A product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li></> :
                                <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        }

                        <li><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                        <li><Link to='/dashboard/allSellers'>All Sellers</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;