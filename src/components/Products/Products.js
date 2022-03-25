import React from 'react';
import "./Products.css";

const Products = (props) => {
    const { image, phone_name, price, brand } = props.product
    return (
        <div className="product">
            <img src={image} alt="" />
            <h4>Phone Name:{phone_name}</h4>
            <h5>Brand Name:{brand}</h5>
            <h5>Price:${price}</h5>
            <button className="btn">
                Add To Cart
            </button>
        </div>
    );
};

export default Products;