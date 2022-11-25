import React from 'react';
import shop from '../../../assets/old-shop.jpg';

const Banner = () => {
    return (
        <div className='my-5'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${shop})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Old Shop</h1>
                        <p className="mb-5 text-xl">Old shop is a Used Products Resale Market where used furniture is available in a good price. You can buy and sell used furniture from our website. </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;