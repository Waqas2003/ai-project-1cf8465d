import React from 'react';
import ProductCard from '../components/ProductCard';

function Home({ products }) {
  return (
    <div className="container">
      <h1>Home</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;