import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// let total = 0;

// const addTime = props => {
//     total = total + props;
//     console.log(total)
// }

const Navbar = () => {
    let [breakTime, setBreakTime] = useState(0)


    useEffect(() => {
        const newtime = parseInt(localStorage.getItem("key"))
        setBreakTime(newtime)
    }, [])

    const breakTimeFunc = (time) => {
        setBreakTime(time);
        localStorage.setItem("key", time)
    }


    // useEffect(() => {
    //     const exercisetime = parseInt(localStorage.getItem("key"))
    //     setExerciseTime(exercisetime)
    // }, [])


    let totalExerciseTime = 0;


    const toastClick = () => {
        toast.success('Congratulations!', {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (


        < div className="bg-slate-900 p-10 h-full" >
            <p className='text-2xl'>Mehedi Hasan Salman</p>
            <p>Mirpur, Dhaka</p>
            <div className="info grid grid-cols-3 text-center my-10 bg-slate-800 rounded-2xl p-5">
                <p>75<sub>Kg</sub></p>
                <p>5.8<sub>ft</sub></p>
                <p>22<sub>yrs</sub></p>
                <p>Weight</p>
                <p>Height</p>
                <p>Age</p>
            </div>
            <p className='text-2xl pt-10'>Add A Break</p>
            <div className="break-time grid grid-cols-5 text-center my-5 bg-slate-800 text-slate-800 rounded-2xl p-3 gap-3 lg:gap-6">
                <button onClick={() => breakTimeFunc(10)} className='p-3 hover:bg-accent hover:text-white hover:font-bold bg-white rounded-full'>10s</button>
                <button onClick={() => breakTimeFunc(20)} className='p-3 hover:bg-accent hover:text-white hover:font-bold bg-white rounded-full'>20s</button>
                <button onClick={() => breakTimeFunc(30)} className='p-3 hover:bg-accent hover:text-white hover:font-bold bg-white rounded-full'>30s</button>
                <button onClick={() => breakTimeFunc(40)} className='p-3 hover:bg-accent hover:text-white hover:font-bold bg-white rounded-full'>40s</button>
                <button onClick={() => breakTimeFunc(50)} className='p-3 hover:bg-accent hover:text-white hover:font-bold bg-white rounded-full'>50s</button>
            </div>
            <p className='text-2xl py-10'>Exercise Details</p>
            <div className='text-white'>
                <div className="grid grid-cols-2 bg-slate-800 p-3 rounded-2xl">
                    <p>Excercise time</p>
                    <p>{localStorage.getItem("exerciseTime")} seconds</p>
                </div>
                <br />
                <div className="break-time grid grid-cols-2 bg-slate-800 p-3 rounded-2xl">
                    <p>Break time</p>
                    <p>{breakTime} seconds</p>
                </div>
            </div>
            <br />
            <button onClick={toastClick} className='bg-accent w-full p-5 rounded-2xl text-white'>Activity Complete</button>

            <ToastContainer />


        </ div>
    );
};

export default Navbar;