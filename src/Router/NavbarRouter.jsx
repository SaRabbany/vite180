import React from 'react';
import { Routes,Route,Outlet } from 'react-router-dom';
import Navbar from '../Components/navbar/Navbar';
import Home from '../pages/Home/Home';

const NavbarRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterChild/>}>
                <Route index element={<Home/>}></Route>
            </Route>
        </Routes>
    );
};

const RouterChild = () => {
    return (
        <Outlet/>
    )
}

export default NavbarRouter;