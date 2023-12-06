import React from 'react';
import './Product.css';

const Product = (props) => {
    const { id, image, title, rating, price } = props;
  
    return (
    <div className="product">
        <img src={image} alt="jimi hendrix guitar" />
        <div className="product-info">
            <p>{title}</p>
            <div className="product-rating">
                <p>{rating}</p>
            </div>
            <p className="product-price">{price}</p>
            <button className="product-button">Add to Basket</button>
        </div>
    </div>
  )
}

export default Product