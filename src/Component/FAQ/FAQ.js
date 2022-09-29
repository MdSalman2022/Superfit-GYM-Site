import React from 'react';

const FAQ = () => {
    return (
        <div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content">
                    How does react work?
                </div>
                <div className="collapse-content bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content">
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content">
                    What are the differences between Props and State?
                </div>
                <div className="collapse-content bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content">
                    <p>Props: The data is passed from one component to another. It is immutable. It can be used with state and functional components. Its read-only. <br /> State: The data is passed within the component only. It is mutable. State is both read and write.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content ">
                    What are usage of useeffect?
                </div>
                <div className="collapse-content bg-slate-800 text-slate-800-content peer-checked:bg-slate-800 peer-checked:text-slate-800-content">
                    <p> The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;