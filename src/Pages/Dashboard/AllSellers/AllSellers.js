import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: allSellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('oldShopToken')}`
                }
            })
            const data = res.json();
            return data;
        }
    })

    const handleDelete = email => {
        fetch(`http://localhost:5000/sellers?email=${email}`, {
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
            <h1 className='font-bold text-xl mb-2'>All Sellers - </h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>

                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allSellers &&
                            allSellers?.map((order, i) => <tr className="hover">
                                <th>{i + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>

                                <td><button onClick={() => handleDelete(order.email)} className='btn btn-outline btn-warning btn-sm'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;