import React from 'react';
import AdvertiseItems from './AdvertiseItems/AdvertiseItems';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;