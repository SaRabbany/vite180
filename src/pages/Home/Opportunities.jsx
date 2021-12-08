import React from "react";
import EndlessCard from "../../Components/EndlessCard/EndlessCard";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ENDLESS_CARD_IMG from "../../Images/endeless-card (1).jpg"
import ENDLESS_CARD_IM2 from "../../Images/endeless-card (2).jpg"
import ENDLESS_CARD_IM3 from "../../Images/endeless-card-3.jpg"

const Opportunities = () => {

    const endless_card_data = [
        {
            icon: ENDLESS_CARD_IMG,
            title: " BA coming through as per 🙌🏾",
            text: "",
        },
        {
            icon: ENDLESS_CARD_IM2,
            title: "Love boss👊🏾",
            text: "",
        },
        {
            icon: ENDLESS_CARD_IM3,
            title: "Let’s get it!",
            text: "",
        },
    ];

    return (
        <section id="opportunities">
            <SectionTitle text={"Reviews"} />
            <div className="container">
                <div className="row row-cols-1 row-cols-lg-2">
                    {endless_card_data.map((e, i) => (
                        <div className="col mb-4">
                            <EndlessCard data={e} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Opportunities;
