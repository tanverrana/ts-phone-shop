import React from 'react';
import "./Summary.css";

const Summary = (props) => {
    const { summary } = props;
    console.log(summary);
    const name = summary.map(product => product.phone_name);
    return (
        <div>
            <h2>Order Summary</h2>
            <h5 className="phone">Phone Name:{name}</h5>
            <button className="chose-btn">Chose One For Me</button>
            <button className="remove-btn">Chose Again</button>
        </div>
    );
};

export default Summary;