import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import logo from "../../Images/Logo.png"
import FAQ from './../../pages/Home/FAQ';

const Navbar = () => {
    const [IsContentShow, setIsContentShow] = useState(false);

    return (
        <>
            <div>
                <nav className="hnazmul-navbar">
                    <div className="hnazmul-navbar-container container-xxl">
                        <div className="hnazmul-nav-brand">
                            <img style={{maxWidth:70}} src={logo} alt="" />
                        </div>
                        <div onClick={() => setIsContentShow(true)} className="hnazmul-nav-toggle-btn">
                            <button>
                                <InlineIcon height="30px" className="toggler-btn" icon="gg:menu-right-alt" />
                            </button>
                        </div>

                        <div className={`hnazmul-navbar-content ${IsContentShow ? "navbar-show" : ""}`}>
                            <div className="hnazmul-navbar-content-wrapper">
                                <ul onClick={()=> setIsContentShow(false)} className="navbar-list">
                                    <li className="navbar-list-item">
                                        <a href="#sliderHeader" className="navbar-list-link">
                                            Home
                                        </a>
                                    </li>
                                    <li className="navbar-list-item">
                                        <a href="#custom-tools" className="navbar-list-link">
                                            About
                                        </a>
                                    </li>
                                    <li className="navbar-list-item">
                                        <a href="#all_membership" className="navbar-list-link">
                                            Price
                                        </a>
                                    </li>
                                    <li className="navbar-list-item">
                                        <a href="#faq" className="navbar-list-link">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                                <button className="navbar-closer-icon">
                                    <InlineIcon onClick={() => setIsContentShow(false)} height="35px" className="navbar-closer" icon="clarity:times-circle-line" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Navbar;
