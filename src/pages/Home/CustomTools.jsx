import React from "react";
import ImageAndDescSection from "../../Components/ImageAndSection/ImageAndDescSection";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SECTION_IMG_1 from  "../../Images/section-image-pic.jpg"
import SECTION_IMG_2 from  "../../Images/section-image-pic (1).jpg"
import SECTION_IMG_3 from  "../../Images/section-image-pic (2).jpg"
import SECTION_IMG_4 from  "../../Images/section-image-pic.png"

const CustomTools = () => {
    const data = [
        {
            image: SECTION_IMG_1,
            title: "What is Bulk Alliance",
            desc: "Bulk alliance is a service, in the format of a whatsapp group chat, offering sought after pairs of mainly Jordans, Dunks or Yeezys in bulk, or single, under market price allowing high profit margins to upgrade your reselling game",
        },
        {
            image: SECTION_IMG_2,
            title: "The ultimate advantage",
            desc: "Easily gain competitive advantage over other resellers from this service, purchasing your pairs for lower prices than you’re used to when sourcing",
        },
        {
            image: SECTION_IMG_3,
            title: "What do we offer?",
            desc: "We aim to offer up to 4 bulk buys a week, straight through a supplier to ensure they arrive right at your door taking roughly 2 weeks depending on the pairs",
        },
        {
            image: SECTION_IMG_4,
            title: "Why choose us?",
            desc: "You may ask yourself why you choose us as your supplier… Well for just £20 a month you have access to numerous pairs being sold under market, which as mentioned lowers your costs significantly improving your profit margins, something I'm sure everyone aims for.   With a £20 monthly investment, change your reselling game and join us at Bulk Alliance today, don’t hesitate or you may miss the next post…",
        },
    ];

    return (
        <section id="custom-tools">
            <div className="container">
                {data.map((element, index) => (
                    <ImageAndDescSection data={element} leftOrder={index % 2 !== 0 ? 1 : null} rightOrder={index % 2 !== 0 ? 0 : null} />
                ))}
            </div>
        </section>
    );
};

export default CustomTools;
