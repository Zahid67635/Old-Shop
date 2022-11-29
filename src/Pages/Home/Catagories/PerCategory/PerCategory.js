import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../../AdvertiseItems/Item';

const PerCategory = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState({})
    return (
        <div>
            <h1 className='text-2xl font-bold text-center mt-4'>{products.length} Available Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-20'>
                {
                    products.map(p => <Item details={p} setProduct={setProduct} product={product}></Item>)
                }
            </div>
        </div>
    );
};

export default PerCategory;