import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ cat }) => {
    const { image, category } = cat;
    return (
        <div className='mx-auto'>
            <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{category}</h2>
                    <p>All furniture makes your home beautiful and you will surprise of their beauty.</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product-under-category/${category}`}><button className="btn btn-primary text-white">Visit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;