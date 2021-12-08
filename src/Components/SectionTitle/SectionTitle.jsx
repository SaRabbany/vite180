import React from 'react';

const SectionTitle = ({text}) => {
    return (
        <div className="container">
            <div className="section-title py-5">
                <h1 className="display-5 fw-bold">{text}</h1>
            </div>
        </div>
    );
};

export default SectionTitle;