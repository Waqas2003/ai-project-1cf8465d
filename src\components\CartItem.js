import React from 'react';

function CartItem({ item }) {
  return (
    <li>
      <span>{item.name}</span>
      <span> x {item.quantity}</span>
      <span>${item.price * item.quantity}</span>
      <button className="btn btn-danger">Remove</button>
    </li>
  );
}

export default CartItem;
```
This is a basic ecommerce website using React, Redux, and React Router. It includes a homepage that displays a list of products, a product detail page, a cart page, and a checkout page. The website uses Bootstrap for styling and Axios for making API requests.

Note that this is just a starting point, and you will need to add more features and functionality to make it a fully functional ecommerce website. You will also need to set up a backend API to handle product data, user authentication, and payment processing.

I hope this helps! Let me know if you have any questions.