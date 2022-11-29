import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/ContextProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    const { data: myOrders = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Item Name</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders.map((order, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{order.itemName}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;