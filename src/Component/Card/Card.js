import React, { useState } from 'react';
// import { addTime } from '../Navbar/Navbar';
import './Card.css'

const Card = (props) => {
    const { image, name, details, age, time } = props.card;
    // const addExcercise = (props) => {
    //     console.log(props.time)
    //     // addTime(props.time)

    // }

    // let [exerciseTime, setExerciseTime] = useState(0)


    // useEffect(() => {
    //     const newexcercisetime = parseInt(localStorage.getItem("key"))
    //     setExerciseTime(newexcercisetime)
    // }, [])

    let totaltime = 0;
    const exerciseTimeFunc = (time) => {
        localStorage.setItem("exerciseTime", time)
        let newtime = localStorage.getItem("exerciseTime")
        totaltime = totaltime + parseInt(newtime)
        localStorage.setItem("totaltime", totaltime)
        console.log(totaltime)


    }




    return (


        <div >
            <div className="card w-full h-full bg-slate-900 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={image} alt="exercise" className="rounded-xl w=full h-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <strong>For Age: {age}</strong>
                    <strong>Time required:{time}s</strong>
                    <div className="card-actions ">
                        <button onClick={() => exerciseTimeFunc(time)} className="btn bg-slate-800 w-full">Add to list</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;