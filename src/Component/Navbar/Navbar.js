import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-slate-900 p-10 h-full">
            <p className='text-2xl'>Mehedii Hasan Salman</p>
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
            <div className="break-time grid grid-cols-5 text-center my-5 bg-slate-800 text-slate-800 rounded-2xl p-3 gap-6">
                <p className='p-3 bg-white rounded-full'>10s</p>
                <p className='p-3 bg-white rounded-full'>20s</p>
                <p className='p-3 bg-white rounded-full'>30s</p>
                <p className='p-3 bg-white rounded-full'>40s</p>
                <p className='p-3 bg-white rounded-full'>50s</p>
            </div>
            <p className='text-2xl py-10'>Excercise Details</p>
            <div className='text-white'>
                <div className="grid grid-cols-2 bg-slate-800 p-3 rounded-2xl">
                    <p>Excercise time</p>
                    <p>200 seconds</p>
                </div>
                <br />
                <div className="grid grid-cols-2 bg-slate-800 p-3 rounded-2xl">
                    <p>Break time</p>
                    <p>20 seconds</p>
                </div>
            </div>
            <br />
            <button className='bg-accent w-full p-5 rounded-2xl text-white'>Activity Complete</button>
        </div>
    );
};

export default Navbar;