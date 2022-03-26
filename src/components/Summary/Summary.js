import React from 'react';
import "./Summary.css";

const Summary = (props) => {
    const { summary } = props;
    console.log(summary);
    const removeProduct = () => {

    }
    return (
        <div>
            <h2>Order Summary</h2>
            {
                summary.map(product => <h5 className="phone">{product.phone_name}</h5>)
            }
            <button className="chose-btn">Chose One For Me</button>
            <button onClick={removeProduct} className="remove-btn">Chose Again</button>
        </div>
    );
};

export default Summary;