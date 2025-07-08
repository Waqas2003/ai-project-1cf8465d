import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h5 className="card-title">{product.name}</h5>
      <p className="card-text">{product.description}</p>
      <p className="card-text">Price: ${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductCard;