import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const { title, price, thumbnail } = item;

  return (
    <div className="card-container">
      <img className="card-image" src={thumbnail} alt={title} />

      <p>{title}</p>

      <p>{price}$</p>

      <button>Add to cart</button>
    </div>
  );
};

export default Card;
