import React, { useEffect, useState } from 'react';
import Item from './Item';

const AdvertiseItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='my-32'>
            <h2 className='text-3xl text-center ml-5 my-10 font-bold'>Available Products :</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    items.map(i => <Item details={i}></Item>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;