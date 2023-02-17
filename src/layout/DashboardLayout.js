import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/ContextProvider';
import useAdmin from '../hooks/useAdmin';
import useSeller from '../hooks/useSeller';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Navbar from '../Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isSeller, sellerLoading] = useSeller(user.email);
    const [isAdmin, adminLoading] = useAdmin(user.email);
    return (
        <div>
            <Navbar></Navbar>
            {
                adminLoading || sellerLoading ? <p className='text-3xl text-center mt-10'>Loading</p>
                    :
                    <div className="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <Dashboard></Dashboard>
                            <Outlet></Outlet>
                            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        </div>
                        <div className="bg-base-100">
                            <div className="drawer-side">
                                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                                <ul className="menu p-4 w-80 text-base-content">
                                    {
                                        isSeller?.role === 'seller' && <><li className='bg-cyan-300 p-2 font-bold'><Link to='/dashboard/addProduct'>Add A product</Link></li>
                                            <li className='bg-cyan-300 p-2 font-bold'><Link to='/dashboard/myProducts'>My Products</Link></li></>

                                    }
                                    {
                                        isAdmin?.role === 'admin' ? <><li className='bg-cyan-300 p-2 font-bold'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
                                            <li className='bg-cyan-300 p-2 font-bold'><Link to='/dashboard/allSellers'>All Sellers</Link></li></> : ''
                                    }
                                    {
                                        isAdmin?.role !== 'admin' && isSeller?.role !== 'seller' && <li className='bg-cyan-300 p-2 font-bold'><Link to='/dashboard/myorders'>My Orders</Link></li>
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default DashboardLayout;