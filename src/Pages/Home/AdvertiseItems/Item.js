import React from 'react';

const Item = ({ details }) => {
    const { name, price, image } = details
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                <figure className='w-100'><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <div className="card-actions justify-between">
                        <p className='text-xl'>Price: {price}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;