import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import NewNav from '../Shared/Navbar/NewNav';

const Main = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <NewNav></NewNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;