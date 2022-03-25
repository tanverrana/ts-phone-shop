import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [summary, setSummary] = useState([]);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product);
        const newSummary = [...summary, product];
        setSummary(newSummary);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Products>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <div>
                    <img src={summary.image} alt="" />
                    <p>summary:{summary.phone_name}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;