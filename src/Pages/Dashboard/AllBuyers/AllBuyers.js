import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllBuyers = () => {
    const { data: allBuyers = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('oldShopToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

    const handleDelete = email => {
        fetch(`http://localhost:5000/bookings?email=${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('oldShopToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`deleted successfully`)
                }
            })
    }
    return (
        <div>
            <h1 className='font-bold text-xl mb-2'>All Buyers - </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>

                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBuyers &&
                            allBuyers?.map((order, i) => <tr className="hover">
                                <th>{i + 1}</th>

                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td><button onClick={() => handleDelete(order.email)} className='btn btn-outline btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;