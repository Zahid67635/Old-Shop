import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Contexts/ContextProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [orderLoading, setOrderLoading] = useState(true)
    const url = `https://old-shop-server.vercel.app/userBookings?email=${user?.email}`
    const { data: myOrders = [] } = useQuery({
        queryKey: ['userBookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('oldShopToken')}`
                }
            });
            const data = res.json();
            setOrderLoading(false)
            return data;
        }
    })
    return (
        <div>
            {orderLoading ? <p className='text-3xl text-center mt-10'>Loading...</p>
                :
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Item Name</th>
                                <th>Email</th>
                                <th>Contact Number</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders &&
                                myOrders?.map((order, i) => <tr className="hover">
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={order.image} alt='' />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{order.itemName}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>{order.email}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.reSellPrice}</td>
                                    <td><button className='btn btn-outline btn-warning btn-sm'>Pay</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default MyOrders;