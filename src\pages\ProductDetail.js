import React from 'react';

function ProductDetail({ match }) {
  const productId = match.params.id;
  const product = products.find(product => product.id === productId);

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  );
}

export default ProductDetail;