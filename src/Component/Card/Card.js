import React from 'react';
import './Card.css'

const Card = (props) => {
    const { image, name, details, age, time } = props.card;
    console.log(image);
    return (
        <div>
            <div className="card w-full h-full bg-slate-900 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl w=full h-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <strong>For Age: {age}</strong>
                    <strong>Time required:{time}s</strong>
                    <div className="card-actions ">
                        <button className="btn bg-slate-800 w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;