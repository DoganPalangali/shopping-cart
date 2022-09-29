import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ cartItem, setCartItem }) => {
  return (
    <div className="cart-container">
      {cartItem.length !== 0
        ? cartItem.map((item) => (
            <div className="item-container" key={item.id}>
              <img
                className="cart-image"
                src={item.thumbnail}
                alt={item.title}
              />
              <p>{item.title}</p>

              <p>{item.price}$</p>
            </div>
          ))
        : "Sepetiniz Boş"}

      <hr />
    </div>
  );
};

export default ShoppingCart;
