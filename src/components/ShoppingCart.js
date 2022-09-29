import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ cartItem }) => {
  //   const { title, price, thumbnail } = shoppingItem;
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

      {/* <div className="total">
        <p>Total:</p>
      </div> */}
    </div>
  );
};

export default ShoppingCart;
