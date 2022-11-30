import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Item from './Item';

const AdvertiseItems = () => {
    const [product, setProduct] = useState({})

    const { data: items = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://old-shop-server.vercel.app/products');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='my-32'>
            <h2 className='text-3xl text-center ml-5 my-10 font-bold'>Available Products :</h2>
            <h2 className='text-xl text-center ml-5 my-10 font-bold'>Please Login to Order a Product</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    items.map(i => <Item key={i._id} details={i} setProduct={setProduct} product={product}></Item>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;