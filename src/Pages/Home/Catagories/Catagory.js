import React from 'react';

const Catagory = ({ cat }) => {
    const { image, category } = cat;
    return (
        <div className='mx-auto'>
            <div className="card w-96 h-60 bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{category}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Visit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catagory;