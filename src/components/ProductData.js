import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Product.css";
import ShoppingCart from "./ShoppingCart";
import { BsCart } from "react-icons/bs";

function ProductData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const dummyData = await data.json();
      setData(dummyData.products);
    };

    getData();
  }, []);

  const [cartItem, setCartItem] = useState([]);

  const [show, setShow] = useState(false);

  const handleClick = (item) => {
    cartItem.push(item);
    console.log(cartItem);
  };
  const handleShow = () => {
    setShow((setShow) => !show);
    console.log(show);
  };
  return (
    <div>
      <div className="shopping-cart">
        <button onClick={handleShow} className="card-button">
          <BsCart />
        </button>

        {show ? <ShoppingCart cartItem={cartItem} /> : ""}
      </div>

      <div className="product-container">
        {data.map((item) => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ProductData;
