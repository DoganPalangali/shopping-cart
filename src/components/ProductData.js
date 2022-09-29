import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Product.css";
import ShoppingCart from "./ShoppingCart";
import { BsCart } from "react-icons/bs";

function ProductData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())

    //   .then((itemData) => {
    //     const items = itemData.products;
    //     setData(items);
    //   });

    // datanın fetchlenmesi;

    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const dummyData = await data.json();
      setData(dummyData.products);
      console.log("xdd");
      console.log("dummyData = ", dummyData);
    };

    getData();
  }, []);

  console.log(data);

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
        <button onClick={handleShow} className="cart-button">
          <BsCart />
        </button>
        {show ? <ShoppingCart /> : ""}
      </div>

      <div className="cart-container">
        {data.map((item) => (
          <Card item={item} key={item.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ProductData;
