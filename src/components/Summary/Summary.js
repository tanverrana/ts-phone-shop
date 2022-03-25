import React from 'react';

const Summary = (props) => {
    const { summary } = props;
    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Summary:{summary.image}</h5>
        </div>
    );
};

export default Summary;