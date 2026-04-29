import React from 'react';
import './productCard.css';

const ProductCard = ({ name, image, description }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <button className="learn-more">Learn More →</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
