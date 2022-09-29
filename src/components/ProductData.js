import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Product.css";
import ShoppingCart from "./ShoppingCart";

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

  const handleClick = (item) => {
    cartItem.push(item);
    console.log(cartItem);
  };

  return (
    <div>
      <div className="Shopping-Cart">
        <ShoppingCart />
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
