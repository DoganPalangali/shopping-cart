import React from "react";

const Card = ({ item }) => {
  const { title, price, thumbnail } = item;

  return (
    <div>
      <img src={thumbnail} alt={title} />

      <p>{title}</p>

      <p>{price}$</p>
    </div>
  );
};

export default Card;
