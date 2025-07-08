import React, { useState } from 'react';
import CartItem from '../components/CartItem';

function Cart({ cart }) {
  const [cartItems, setCartItems] = useState(cart.items);

  return (
    <div className="container">
      <h1>Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      <p>Total: ${cart.total}</p>
      <button className="btn btn-primary">Checkout</button>
    </div>
  );
}

export default Cart;