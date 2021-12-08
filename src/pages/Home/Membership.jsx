import React from "react";

const Membership = () => {
    return (
        <section id="all_membership">
            <div className="container py-5">
                <div className="row membership__large">
                    <div className="col-lg-6">
                        <div className="card large__card h-100 p-5 text-dark">
                            <h4 className="text-center">BULK ALLIANCE MEMBERSHIP</h4>
                            <p className="text-muted pt-3">Whats included</p>

                            <ul className="featured-list">
                                <li>Singles/Bulk offers 3-4 times a week</li>
                                <li>24/7 admin support</li>
                                <li>Free legit checks</li>
                                <li>Access to our WTB/WTS marketplace</li>
                            </ul>

                            <div className="mt-5">
                                <button className="btn bg-red text-light w-75 d-block m-auto">Join Us</button>
                            </div>
                            <button className="corner-budge btn bg-red text-light px-4">£20 P/M</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mx-3 ">
                                <div className="card text-dark p-5 membership-small-card">
                                    <h2 className="text-center title">Year Membership</h2>
                                    <h3 className="text-center text-red price">£200 GBP.</h3>
                                    <p className="text-center validity">Valid for 12 months from purchase date</p>
                                    <div className="text-center button">
                                        <button className="btn bg-red text-light">Buy Now</button>
                                    </div>
                                    <p className="terms small">
                                        By purchasing, you agree to our
                                        <a href="/" className="">
                                            Terms of Service.
                                        </a>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>

                <div className="membership-two-card py-5">
                    <div className="row justify-content-center">
                        {[...new Array(1)].map((item) => (
                    null
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
