import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/ContextProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/sellerProducts?email=${user?.email}`
    const { data: myProducts = [] } = useQuery({
        queryKey: ['sellerProducts', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('oldShopToken')}`
                }
            });
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
                            <th>Item</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts &&
                            myProducts.map((order, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt='' />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{order.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.reSellPrice}</td>
                                <td><button className='btn btn-outline btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;