import React from 'react';
import FaqCard from '../../Components/FaqCard/Faqcard';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const FAQ = () => {

    const data = [
        {
            question: "How long does the shoe take to arrive?",
            answer: " The shoes usually arrive within 2 weeks"
        }, {
            question: "What shoes will be provided in the group?",
            answer: "You will have a mixture of Yeezys, Jordans & Dunks"
        }, {
            question: "Are the shoe 100% authentic?",
            answer: "Yes all pairs get checked before they get sent out to the buyers"
        }
    ]








    return (
        <section id="faq" className="py-2 py-md-4 py-lg-5">
            <SectionTitle text="Frequently Asked Questions"></SectionTitle>
            <div className="container">
                {data?.map(data => <FaqCard data={data} />)}

            </div>
            <div className="py-2 py-md-2 py-lg-4"></div>
        </section>
    );
};

export default FAQ;