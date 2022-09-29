import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, handleClick }) => {
  const { title, price, thumbnail } = item;

  return (
    <div className="card-container">
      <img className="card-image" src={thumbnail} alt={title} />

      <p>{title}</p>

      <p>{price}$</p>

      <button onClick={() => handleClick(item)}>Add to cart</button>
    </div>
  );
};

export default Card;
