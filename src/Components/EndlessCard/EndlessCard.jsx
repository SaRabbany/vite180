import React from 'react';
import POKEMON_ICON from "../../Images/Pokemon.svg"

const EndlessCard = ({data}) => {

    return (
        <article className="endless-card">
            <div className="d-flex align-items-center flex-column image_and_title">
                <img src={data?.icon} alt="" className="flex-shrink-0 m-4" />
                <h3>{data?.title}</h3>
            </div>
            <div className="desc p-4 pt-0">
                <p>
                    {data?.text}
                </p>
            </div>
        </article>
    );
};

export default EndlessCard;