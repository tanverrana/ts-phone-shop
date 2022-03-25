import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Products.css";

const Products = (props) => {
    const { image, phone_name, price, brand } = props.product;
    const { handleAddToCart } = props;
    return (
        <div className="product">
            <img src={image} alt="" />
            <h4>Phone Name:{phone_name}</h4>
            <h5>Brand Name:{brand}</h5>
            <h5>Price:${price}</h5>
            <button onClick={() => handleAddToCart(props.product)} className="btn">
                Add To Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;