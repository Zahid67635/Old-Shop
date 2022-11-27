import React, { useEffect, useState } from 'react';
import Catagory from './Catagory';

const Catagories = () => {
    const [cats, setCats] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCats(data))
    }, [])
    return (
        <div className='my-10'>
            <h2 className='text-3xl font-bold text-center'>All Categories :</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10'>
                {
                    cats.map(cat => <Catagory cat={cat}></Catagory>)
                }
            </div>
        </div>
    );
};

export default Catagories;