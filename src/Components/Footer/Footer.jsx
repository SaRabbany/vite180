import { InlineIcon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import LOGO_IMG from "../../Images/Logo.png"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container py-2">
                <div className="row row-cols-1 row-cols-lg-2 pt-4">
                    <div className="col d-flex align-items-center">
                        <div className="logo me-4">
                            <img src={LOGO_IMG} className="rounded rounded-pill" style={{ maxWidth: 40 }} alt="" />
                        </div>
                        <div className="footer-links">
                            <a href="#custom-tools" className="link" to={"/"}>
                                About
                            </a>
                            <a href="#opportunities" className="link" to={"/"}>
                                Reviews
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end align-items-center">
                        <p>Follow us: </p>
                        <div className="icons">
                            <a href="https://www.instagram.com/bulkalliance/">
                                <InlineIcon icon="la:instagram" />{" "}
                            </a>
                            <a href="bulkalliance1@gmail.com">
                                <InlineIcon icon="fontisto:email" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container  pb-4">
                <div className="row row-cols-1 row-cols-lg-2 justify-content-between">
                    <div className="copyright">
                        &copy; Developed my{" "}
                        <a className="text-blue-grey ms-2" href="http://wakestart.com">
                            Wakestart LTD
                        </a>
                    </div>
                    <div className="copyright-links d-flex justify-content-end">
                        <a href="#faq">FAQ</a>
                        <a to="">Contact</a>
                        <a href="#custom-tools">about</a>
                        <Link to="/">Terms and Condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
