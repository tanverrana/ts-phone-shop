import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Products from '../Products/Products';
import Summary from '../Summary/Summary';
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
                <Summary summary={summary}></Summary>
            </div>
        </div>
    );
};

export default Shop;